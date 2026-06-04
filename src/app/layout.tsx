import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalNavigation from "@/components/gnb";
import Footer from "@/components/footer";
import EventPopupModal from "@/components/event_popup_modal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://doyakmin.com";
const previewImage = "/og-doyakmin-card-v3.jpg";
const previewImageUrl = `${siteUrl}${previewImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "도약민 | GAMES MAKETH THE WORLD ANEW",
  description:
    "위치 기반 게임 '한국지' 제작사 (주)도약민. 게임으로 세상을 새롭게, 지역을 여행처럼!",
  keywords: [
    "도약민",
    "(주)도약민",
    "주식회사 도약민",
    "한국지",
    "travel game",
    "DOYAKMIN",
    "doyakmin inc",
    "Hangukji",
    "위치 기반 게임",
    "지역 활성화 게임",
  ],
  authors: [{ name: "DOYAKMIN Inc." }],
  icons: {
    icon: "/image/favicon.png",
  },
  verification: {
    other: {
      "naver-site-verification": "aec2d0fc84541c932b9130bcaca82f377eeb4562",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "도약민 | 한국지 제작사",
    description:
      "위치 기반 게임 '한국지'로 전국을 점령! 게임으로 세상을 새롭게 만드는 도약민.",
    url: siteUrl,
    siteName: "도약민",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: previewImageUrl,
        secureUrl: previewImageUrl,
        width: 1200,
        height: 630,
        alt: "DOYAKMIN Inc. 로고",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "도약민 | 한국지 제작사",
    description:
      "위치 기반 게임 '한국지'로 전국을 점령! 게임으로 세상을 새롭게 만드는 도약민.",
    images: [previewImageUrl],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isEventPopupEnabled =
    process.env.NEXT_PUBLIC_EVENT_POPUP_ENABLED === "true";

  return (
    <html lang="ko">
      <body className={inter.className}>
        <GlobalNavigation />
        <div className="pb-24 pt-14 md:pb-0">{children}</div>
        <Footer />
        <EventPopupModal isEnabled={isEventPopupEnabled} />
      </body>
    </html>
  );
}
