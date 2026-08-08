import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const fallbackScriptUrl =
    'https://script.google.com/macros/s/AKfycbwMOD4ea2l892156W_xGTRj2x044itAUEk4aZ7YVh6nQ_yCjXqYhyXE5u4IZZvf3o6g/exec'

const limits = {
    name: 100,
    replyContact: 200,
    category: 50,
    message: 5000,
    service: 100,
}

function readField(value: unknown, key: keyof typeof limits) {
    if (typeof value !== 'string') return ''
    return value.trim().slice(0, limits[key])
}

export async function POST(request: Request) {
    let body: Record<string, unknown>
    try {
        body = (await request.json()) as Record<string, unknown>
    } catch {
        return NextResponse.json({ ok: false, message: '올바르지 않은 요청입니다.' }, { status: 400 })
    }

    // Honeypot: normal visitors never fill this hidden field.
    if (typeof body.website === 'string' && body.website.trim()) {
        return NextResponse.json({ ok: true })
    }

    const name = readField(body.name, 'name')
    const replyContact = readField(body.replyContact, 'replyContact')
    const category = readField(body.category, 'category')
    const message = readField(body.message, 'message')
    const service = readField(body.service, 'service') || 'website-contact'

    if (!name || !replyContact || !category || !message) {
        return NextResponse.json({ ok: false, message: '필수 항목을 모두 입력해주세요.' }, { status: 400 })
    }

    const scriptUrl = process.env.CONTACT_SCRIPT_URL || fallbackScriptUrl
    const payload = new URLSearchParams({
        submittedAt: new Date().toISOString(),
        source: 'website-contact',
        service,
        name,
        replyContact,
        email: replyContact,
        category,
        message,
    })

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: payload.toString(),
            cache: 'no-store',
            signal: AbortSignal.timeout(12_000),
        })

        const responseText = await response.text()
        let result: Record<string, unknown> = {}
        try {
            result = JSON.parse(responseText) as Record<string, unknown>
        } catch {
            result = {}
        }

        const accepted = result.result === 'success' || result.status === 'success' || result.ok === true
        if (!response.ok || !accepted) {
            console.error('Contact upstream rejected request', { status: response.status, result })
            return NextResponse.json(
                { ok: false, message: '문의 저장 서버가 요청을 처리하지 못했습니다.' },
                { status: 502 },
            )
        }

        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error('Contact upstream request failed', error)
        return NextResponse.json(
            { ok: false, message: '문의 저장 서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.' },
            { status: 502 },
        )
    }
}
