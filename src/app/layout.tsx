import type { Metadata } from "next";
import GlobalNavigation from '@/components/gnb'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import EventPopupModal from '@/components/event_popup_modal'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata: Metadata = {
    title: '도약민 | GAMES MAKETH THE WORLD ANEW',
    description: '위치 기반 게임 \'한국지\' 제작사 (주)도약민. 게임으로 세상을 새롭게, 지역을 여행처럼!',
    icons: {
        icon: "/image/favicon.png",
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            {/* Naver Site Verification */}
            <meta name="naver-site-verification" content="aec2d0fc84541c932b9130bcaca82f377eeb4562"/>

            {/* SEO */}
            <meta name="keywords"
                  content="도약민, (주)도약민, 주식회사 도약민, 한국지, travel game, DOYAKMIN, doyakmin inc, Hangukji, 위치 기반 게임, 지역 활성화 게임"/>
            <meta name="author" content="DOYAKMIN Inc."/>

            {/* Open Graph */}
            <meta property="og:title" content="도약민 | 한국지 제작사"/>
            <meta property="og:description" content="위치 기반 게임 '한국지'로 전국을 점령! 게임으로 세상을 새롭게 만드는 도약민."/>
            <meta property="og:image" content="https://doyakmin.com/og-image.jpg"/>
            <meta property="og:url" content="https://doyakmin.com"/>
            <meta property="og:type" content="website"/>

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="도약민 | 한국지 제작사"/>
            <meta name="twitter:description" content="위치 기반 게임 '한국지'로 전국을 점령! 게임으로 세상을 새롭게 만드는 도약민."/>
            <meta name="twitter:image" content="https://doyakmin.com/og-image.jpg"/>
        </head>
        <body className={inter.className}>
            <GlobalNavigation/>
            <main className="pt-20">
                {children}
            </main>
            <Footer/>
            <EventPopupModal />
        </body>
        </html>
    );
}