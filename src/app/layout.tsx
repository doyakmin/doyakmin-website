import GlobalNavigation from '@/components/gnb'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
    title: '도약민',
    description: '더 나은 도약을 위한 선택',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <GlobalNavigation />
                    <main className="pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    )
}