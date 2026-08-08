type TranslatedTextProps = {
    ko: string
    en: string
    ja: string
    className?: string
}

export default function TranslatedText({ ko, en, ja, className = '' }: TranslatedTextProps) {
    return (
        <>
            <span className={`i18n-ko ${className}`}>{ko}</span>
            <span className={`i18n-en ${className}`}>{en}</span>
            <span className={`i18n-ja ${className}`}>{ja}</span>
        </>
    )
}
