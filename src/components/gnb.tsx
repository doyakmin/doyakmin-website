'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Building2, Home, Mail, Menu, Newspaper, X, Gamepad2 } from 'lucide-react'
import LanguageSelector from './language_selector'
import TranslatedText from './translated_text'

const navItems = [
    { href: '/', ko: '홈', en: 'Home', Icon: Home },
    { href: '/games', ko: '게임', en: 'Games', Icon: Gamepad2 },
    { href: '/team', ko: '회사', en: 'Studio', Icon: Building2 },
    { href: '/news', ko: '소식', en: 'News', Icon: Newspaper },
    { href: '/contact', ko: '문의', en: 'Contact', Icon: Mail },
]

export default function GlobalNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

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
                                <TranslatedText ko={item.ko} en={item.en} />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <LanguageSelector />
                        <Link href="/games" className="game-button min-h-10 px-4 text-sm">
                            PLAY
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white/20 text-white md:hidden"
                        aria-label="메뉴 열기"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t-2 border-white/10 bg-[#07111f] md:hidden">
                    <div className="game-container py-3">
                        <div className="mb-2 px-1">
                            <LanguageSelector />
                        </div>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-2xl px-4 py-4 text-lg font-black text-white/86 hover:bg-white/10 hover:text-[#b7ff2a]"
                                onClick={handleMenuClick}
                            >
                                <TranslatedText ko={item.ko} en={item.en} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-[#111827] bg-white/96 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_rgba(7,17,31,0.14)] backdrop-blur-md md:hidden">
                <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
                    {navItems.map(({ href, ko, en, Icon }) => {
                        const isActive = href === '/' ? pathname === href : pathname.startsWith(href)

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex min-h-[58px] flex-col items-center justify-center rounded-2xl text-[11px] font-black transition-colors ${
                                    isActive
                                        ? 'bg-[#111827] text-[#b7ff2a]'
                                        : 'text-[#526071] hover:bg-[#f4f7fb] hover:text-[#111827]'
                                }`}
                                onClick={handleMenuClick}
                            >
                                <Icon className="mb-1 h-5 w-5" strokeWidth={2.6} />
                                <TranslatedText ko={ko} en={en} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
