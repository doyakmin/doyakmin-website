type TranslatedTextProps = {
    ko: string
    en: string
    className?: string
}

export default function TranslatedText({ ko, en, className = '' }: TranslatedTextProps) {
    return (
        <>
            <span className={`i18n-ko ${className}`}>{ko}</span>
            <span className={`i18n-en ${className}`}>{en}</span>
        </>
    )
}
