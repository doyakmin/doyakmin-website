import type { Metadata } from "next";
import GlobalNavigation from '@/components/gnb'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata: Metadata = {
    title: '도약민 | DOYAKMIN',
    description: 'GAMES MAKETH THE WORLD ANEW, 한국지 제작사',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <GlobalNavigation />
                    <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    )
}