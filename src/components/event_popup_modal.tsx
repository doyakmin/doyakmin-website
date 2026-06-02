'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

interface EventPopupModalProps {
  isEnabled?: boolean
}

const STORAGE_KEY = 'doyakmin_event_popup_hidden_until'
const HIDE_DURATION = 24 * 60 * 60 * 1000

export default function EventPopupModal({ isEnabled = true }: EventPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isEnabled) return

    try {
      const hiddenUntil = localStorage.getItem(STORAGE_KEY)
      if (!hiddenUntil || Date.now() > Number(hiddenUntil)) {
        const timer = window.setTimeout(() => setIsOpen(true), 500)
        return () => window.clearTimeout(timer)
      }
    } catch {
      setIsOpen(true)
    }
  }, [isEnabled, mounted])

  const close = () => {
    setIsOpen(false)
  }

  const hideForToday = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + HIDE_DURATION))
    } catch {
      // Ignore storage errors and just close the modal.
    }
    close()
  }

  if (!mounted || !isEnabled || !isOpen) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07111f]/80 px-4 backdrop-blur-sm">
      <div className="game-card max-w-md bg-white p-6 text-[#111827]">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0c7a90]">Event Notice</p>
        <h2 className="mt-3 text-3xl font-black tracking-tighter">한국지 소식을 확인하세요</h2>
        <p className="mt-4 text-base font-bold leading-relaxed text-[#526071]">
          이벤트, 당첨자 발표, 서비스 공지는 소식 페이지에서 가장 빠르게 확인할 수 있습니다.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link href="/news" className="game-button" onClick={close}>
            소식 보러가기
          </Link>
          <button
            type="button"
            onClick={hideForToday}
            className="rounded-2xl px-4 py-3 text-sm font-black text-[#526071] hover:bg-[#f4f7fb]"
          >
            오늘 하루 보지 않기
          </button>
          <button
            type="button"
            onClick={close}
            className="rounded-2xl px-4 py-3 text-sm font-black text-[#526071] hover:bg-[#f4f7fb]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
