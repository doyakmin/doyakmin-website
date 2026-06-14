import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalNavigation from "@/components/gnb";
import Footer from "@/components/footer";
import EventPopupModal from "@/components/event_popup_modal";
import { absoluteUrl, createSeoMetadata, defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "도약민 | GAMES MAKETH THE WORLD ANEW",
    description: "위치 기반 게임 '한국지' 제작사 (주)도약민. 게임으로 세상을 바꾸다.",
    openGraphDescription:
      "위치 기반 게임 '한국지'로 전국을 점령! 게임으로 세상을 새롭게 만드는 (주)도약민.",
    path: "/",
    keywords: ["모바일 게임", "게임 스타트업", "부산 게임사", "관광 게임"],
  }),
  metadataBase: new URL(siteUrl),
  authors: [{ name: "DOYAKMIN Inc." }],
  creator: "DOYAKMIN Inc.",
  publisher: "DOYAKMIN Inc.",
  category: "Games",
  icons: {
    icon: "/image/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    other: {
      "naver-site-verification": "aec2d0fc84541c932b9130bcaca82f377eeb4562",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isEventPopupEnabled =
    process.env.NEXT_PUBLIC_EVENT_POPUP_ENABLED === "true";
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    alternateName: ["DOYAKMIN", "주식회사 도약민", "(주)도약민"],
    url: siteUrl,
    logo: absoluteUrl("/image/mark.png"),
    image: absoluteUrl(defaultOgImage),
    email: "jmy@doyakmin.com",
    telephone: "0507-1341-5455",
    address: {
      "@type": "PostalAddress",
      streetAddress: "명지오션시티9로 50, 103호",
      addressLocality: "강서구",
      addressRegion: "부산광역시",
      addressCountry: "KR",
    },
    sameAs: ["https://cafe.naver.com/hangukji"],
  };
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "ko-KR",
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, webSiteJsonLd]),
          }}
        />
      </head>
      <body className={inter.className}>
        <GlobalNavigation />
        <div className="pb-24 pt-14 md:pb-0">{children}</div>
        <Footer />
        <EventPopupModal isEnabled={isEventPopupEnabled} />
      </body>
    </html>
  );
}
