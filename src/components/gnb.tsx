'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
        <nav className="fixed left-0 right-0 top-0 z-50 border-b-2 border-[#111827] bg-[#07111f]/95 text-white backdrop-blur-md">
            <div className="game-container">
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3" onClick={handleMenuClick}>
                        <Image
                            src="/image/mark.png"
                            alt="도약민 로고"
                            width={34}
                            height={34}
                            className="h-[34px] w-[34px] rounded-xl border-2 border-white/20 object-cover"
                        />
                        <span className="text-lg font-black tracking-tight">DOYAKMIN</span>
                    </Link>

                    <div className="hidden items-center gap-2 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-xl px-4 py-2 text-sm font-extrabold text-white/72 transition-colors hover:bg-white/10 hover:text-[#b7ff2a]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/games" className="hidden game-button min-h-10 px-4 text-sm md:inline-flex">
                        PLAY
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white/20 text-white md:hidden"
                        aria-label="메뉴 열기"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t-2 border-white/10 bg-[#07111f] md:hidden">
                    <div className="game-container py-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-2xl px-4 py-4 text-lg font-black text-white/86 hover:bg-white/10 hover:text-[#b7ff2a]"
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
