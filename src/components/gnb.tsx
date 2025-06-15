'use client'

import { useState } from 'react'

export default function GlobalNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                            도약민
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="/" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors">
                                홈
                            </a>
                            <a href="/games" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors">
                                게임
                            </a>
                            <a href="/news" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors">
                                팀 소개
                            </a>
                            <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors">
                                문의
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md rounded-lg mt-2">
                            <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">홈</a>
                            <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">회사소개</a>
                            <a href="/games" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">게임</a>
                            <a href="/news" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">뉴스</a>
                            <a href="/careers" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">채용</a>
                            <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">문의</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}