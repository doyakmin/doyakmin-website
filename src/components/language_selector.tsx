'use client'

import { useEffect, useState } from 'react'

type Language = 'ko' | 'en'

export default function LanguageSelector() {
    const [language, setLanguage] = useState<Language>('ko')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('doyakmin-language')
        const initialLanguage: Language = savedLanguage === 'en' ? 'en' : 'ko'
        setLanguage(initialLanguage)
        document.documentElement.dataset.lang = initialLanguage
        document.documentElement.lang = initialLanguage === 'en' ? 'en' : 'ko'
    }, [])

    const changeLanguage = (nextLanguage: Language) => {
        setLanguage(nextLanguage)
        localStorage.setItem('doyakmin-language', nextLanguage)
        document.documentElement.dataset.lang = nextLanguage
        document.documentElement.lang = nextLanguage === 'en' ? 'en' : 'ko'
    }

    const buttonClass = (target: Language) =>
        `rounded-lg px-2.5 py-1.5 transition-colors ${
            language === target
                ? 'bg-[#b7ff2a] text-[#111827]'
                : 'text-white/72 hover:bg-white/10 hover:text-[#b7ff2a]'
        }`

    return (
        <div className="flex items-center rounded-xl border-2 border-white/20 bg-white/8 p-1 text-xs font-black">
            <button type="button" onClick={() => changeLanguage('ko')} className={buttonClass('ko')}>
                KR
            </button>
            <span className="px-0.5 text-white/30">/</span>
            <button type="button" onClick={() => changeLanguage('en')} className={buttonClass('en')}>
                ENG
            </button>
        </div>
    )
}
