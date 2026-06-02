'use client'

import { usePathname } from 'next/navigation'

export default function LanguageSelector() {
    const pathname = usePathname()
    const currentPath = pathname || '/'
    const englishUrl = `https://translate.google.com/translate?sl=ko&tl=en&u=${encodeURIComponent(`https://doyakmin.com${currentPath}`)}`

    return (
        <div className="flex items-center rounded-xl border-2 border-white/20 bg-white/8 p-1 text-xs font-black">
            <a
                href={currentPath}
                className="rounded-lg px-2.5 py-1.5 text-[#b7ff2a] transition-colors hover:bg-white/10"
                aria-label="한국어로 보기"
            >
                KR
            </a>
            <span className="px-0.5 text-white/30">/</span>
            <a
                href={englishUrl}
                className="rounded-lg px-2.5 py-1.5 text-white/72 transition-colors hover:bg-white/10 hover:text-[#b7ff2a]"
                aria-label="영어 번역으로 보기"
            >
                ENG
            </a>
        </div>
    )
}
