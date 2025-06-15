'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GlobalNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-2">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/image/logo.png"
                                    alt="doyakmin logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors duration-300">
                                주식회사 도약민
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <a href="/" className="relative px-5 py-2 text-xl font-medium text-gray-300 hover:text-emerald-400 transition-all duration-300 group">
                                <span className="relative z-10">홈</span>
                            </a>
                            <a href="/games" className="relative px-5 py-2 text-xl font-medium text-gray-300 hover:text-emerald-400 transition-all duration-300 group">
                                <span className="relative z-10">게임</span>
                            </a>
                            <a href="/teams" className="relative px-5 py-2 text-xl font-medium text-gray-300 hover:text-emerald-400 transition-all duration-300 group">
                                <span className="relative z-10">팀 소개</span>
                            </a>
                            <a href="/contact" className="relative px-5 py-2 text-xl font-medium text-gray-300 hover:text-emerald-400 transition-all duration-300 group">
                                <span className="relative z-10">문의</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-emerald-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-300"
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
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md rounded-xl m-4 border border-gray-800/50">
                            <a href="/" className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300">홈</a>
                            <a href="/games" className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300">게임</a>
                            <a href="/teams" className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300">팀 소개</a>
                            <a href="/contact" className="text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300">문의</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}