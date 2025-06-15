import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '도약민',
    description: '더 나은 도약을 위한 선택',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
