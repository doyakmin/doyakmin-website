'use client'

import { useEffect, useState } from 'react'
import { formatLegalHtml } from '@/lib/format_legal_html'

type Language = 'ko' | 'en' | 'ja'

export default function LocalizedHtml({ ko, en, ja }: { ko: string; en: string; ja: string }) {
    const [language, setLanguage] = useState<Language>('ko')

    useEffect(() => {
        const saved = localStorage.getItem('doyakmin-language')
        setLanguage(saved === 'en' || saved === 'ja' ? saved : 'ko')

        const handleLanguageChange = (event: Event) => {
            const next = (event as CustomEvent<Language>).detail
            if (next === 'ko' || next === 'en' || next === 'ja') setLanguage(next)
        }
        window.addEventListener('doyakmin-language-change', handleLanguageChange)
        return () => window.removeEventListener('doyakmin-language-change', handleLanguageChange)
    }, [])

    const html = formatLegalHtml(language === 'en' ? en : language === 'ja' ? ja : ko)
    return <div lang={language} dangerouslySetInnerHTML={{ __html: html }} />
}
