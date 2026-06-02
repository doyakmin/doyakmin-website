'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
    { href: '/', label: '홈' },
    { href: '/games', label: '게임' },
    { href: '/team', label: '회사' },
    { href: '/news', label: '소식' },
    { href: '/contact', label: '문의' },
]

export default function GlobalNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 bg-black/95 text-white backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex h-11 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2" onClick={handleMenuClick}>
                        <Image
                            src="/image/mark.png"
                            alt="도약민 로고"
                            width={22}
                            height={22}
                            className="h-[22px] w-[22px] rounded-[5px] object-cover"
                        />
                        <span className="text-[12px] font-normal tracking-[-0.01em] text-white/90">
                            도약민
                        </span>
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[12px] font-normal tracking-[-0.01em] text-white/75 transition-colors hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/games"
                        className="hidden rounded-full bg-[#0066cc] px-3 py-1 text-[12px] leading-none text-white transition-transform active:scale-95 md:inline-flex"
                    >
                        한국지
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-white md:hidden"
                        aria-label="메뉴 열기"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t border-white/10 bg-black md:hidden">
                    <div className="mx-auto max-w-6xl px-4 py-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-[8px] px-3 py-3 text-[17px] tracking-[-0.01em] text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                                onClick={handleMenuClick}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
