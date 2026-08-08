import type { Metadata } from 'next'
import Image from 'next/image'
import TranslatedText from '@/components/translated_text'
import { createSeoMetadata } from '@/lib/seo'

export const metadata: Metadata = createSeoMetadata({
    title: '회사소개 | 도약민',
    description: '도약민은 현실의 이동과 지역 경험을 게임으로 바꾸는 부산 기반 게임 스타트업입니다. 한국관광공사 예비관광벤처 선정 등 주요 이력을 확인하세요.',
    path: '/team',
    image: '/og-doyakmin-card-v3.jpg',
    keywords: ['도약민 회사소개', '게임 스타트업', '부산 게임사', '한국관광공사 예비관광벤처'],
})

const historyItems = [
    {
        year: '2025',
        items: [
            { ko: '부산권 창업공유대학 IR 피칭 대회 최우수상', en: 'Grand Prize, Busan Startup Shared University IR Pitching Competition', ja: '釜山圏創業共有大学 IRピッチング大会 最優秀賞' },
            { ko: '한국관광공사 예비관광벤처 선정', en: 'Selected as a Preliminary Tourism Venture by the Korea Tourism Organization', ja: '韓国観光公社「予備観光ベンチャー」に選定' },
            { ko: '꿈터플러스 창업경진대회 대상', en: 'Grand Prize, Kkumteo Plus Startup Competition', ja: 'クムトプラス創業コンテスト 大賞' },
            { ko: '주식회사 도약민 법인 설립', en: 'Doyakmin Inc. established', ja: '株式会社DOYAKMIN 設立' },
        ],
    },
    {
        year: '2024',
        items: [
            { ko: '창업 경진대회 국립부경대학교 이사장상', en: 'Chairperson’s Award, Pukyong National University Startup Competition', ja: '国立釜慶大学校 創業コンテスト 理事長賞' },
            { ko: 'K7U-Belt 창업경진대회 총장상', en: 'President’s Award, K7U-Belt Startup Competition', ja: 'K7U-Belt 創業コンテスト 総長賞' },
            { ko: '동남권 창업경진대회 우수팀 선정', en: 'Selected as an Outstanding Team, Southeast Startup Competition', ja: '東南圏創業コンテスト 優秀チーム選定' },
            { ko: '부산다움 트래블톤 우수상', en: 'Excellence Award, Busan-daum Travelthon', ja: '釜山らしさトラベルトン 優秀賞' },
            { ko: '경남 메이커 창업 지원사업 선정', en: 'Selected for the Gyeongnam Maker Startup Support Program', ja: '慶南メイカー創業支援事業に選定' },
        ],
    },
]

const pressLinks = [
    {
        title: "KBS 부산 뉴스, GPS 기반 관광 게임 '한국지' 소개",
        titleEn: "KBS Busan News features GPS-based tourism game 'Hankookji'",
        titleJa: "KBS釜山ニュース、GPS観光ゲーム「ハングクジ」を紹介",
        href: 'https://youtu.be/UHrwMiI9XXo?si=MtpjOsWFEuAAISMq',
        image: '/image/hangukji/press-kbs.png',
    },
    {
        title: '2025 관광이음주간 도약민, 혁신 기술 선보여',
        titleEn: 'Doyakmin showcases innovative technology at 2025 Tourism Connection Week',
        titleJa: 'DOYAKMIN、2025観光つながり週間で革新技術を披露',
        href: 'https://m.newsprime.co.kr/section_view.html?no=705537',
        image: '/image/news/giweek-2025-prime.jpg',
    },
    {
        title: "부산 지역 대학생 스타트업 개발 모바일 게임 '한국지' 주목",
        titleEn: "Busan student startup's mobile game 'Hankookji' draws attention",
        titleJa: '釜山の大学生スタートアップ開発「ハングクジ」に注目',
        href: 'https://www.pknu.ac.kr/main/51?action=view&no=721366',
        image: '/image/news/news1.jpg',
    },
    {
        title: '국립부경대, 창업 아이디어 경진대회 대상 수상',
        titleEn: 'Pukyong National University team wins startup idea competition grand prize',
        titleJa: '国立釜慶大学校、創業アイデアコンテストで大賞受賞',
        href: 'https://naver.me/xOd6Eh3o',
        image: '/image/news/news2.png',
    },
    {
        title: "국립부경대-경상국립대 연합팀, '2024 부산다움 트래블톤' 우수상",
        titleEn: "Pukyong–Gyeongsang National University team wins Excellence Award at 2024 Busan-daum Travelthon",
        titleJa: '国立釜慶大・慶尚国立大連合チーム、2024釜山らしさトラベルトン優秀賞',
        href: 'https://naver.me/xnrlgB9Q',
        image: '/image/news/news3.jpg',
    },
]

export default function TeamPage() {
    return (
        <main className="bg-[#f4f7fb] text-[#111827]">
            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                        <p className="game-eyebrow">Studio</p>
                        <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
                            Games Maketh The World Anew
                        </h1>
                        <p className="game-readable mt-6 text-xl font-semibold leading-relaxed text-white/78">
                            <TranslatedText
                                ko="도약민은 현실의 이동과 지역 경험을 게임으로 바꾸는 스튜디오입니다."
                                en="Doyakmin is a studio that turns movement and local experiences into games."
                                ja="DOYAKMINは、現実の移動や地域での体験をゲームに変えるスタジオです。"
                            />
                        </p>
                    </div>

                    <article className="game-card bg-white p-7 text-center text-[#111827]">
                        <div className="mx-auto h-[248px] w-[248px] overflow-hidden rounded-[28px] border-2 border-[#111827] bg-[#f4f7fb]">
                            <Image
                                src="/image/profile/person_ceo.png"
                                alt="정민영 대표이사 프로필"
                                width={360}
                                height={360}
                                className="h-full w-full object-cover object-top"
                                priority
                            />
                        </div>
                        <h2 className="mt-6 text-4xl font-black tracking-tighter">
                            <a
                                href="https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=2&acq=%EC%A0%95%EB%AF%BC%EC%98%81&qdt=0&ie=utf8&query=%EC%A0%95%EB%AF%BC%EC%98%81&ackey=xb8uh409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0c7a90]"
                            >
                                정민영
                            </a>
                        </h2>
                        <p className="mt-2 text-base font-black text-[#0c7a90]">
                            <TranslatedText ko="대표이사" en="CEO" ja="代表取締役" />
                        </p>
                        <p className="mt-2 break-all text-sm font-bold text-[#526071]">minyoung5454@naver.com</p>
                    </article>
                </div>
            </section>

            <section className="py-24">
                <div className="game-container">
                    <p className="game-eyebrow text-[#0c7a90]">History</p>
                    <h2 className="game-heading mt-4">
                        <TranslatedText ko="도약민의 플레이 로그" en="Doyakmin play log" ja="DOYAKMINのプレイログ" />
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {historyItems.map((group) => (
                            <article key={group.year} className="game-card p-7">
                                <h3 className="text-5xl font-black tracking-tighter">{group.year}</h3>
                                <ul className="mt-6 space-y-3 text-base font-bold leading-relaxed text-[#526071]">
                                    {group.items.map((item) => (
                                        <li key={item.ko}><TranslatedText ko={item.ko} en={item.en} ja={item.ja} /></li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#ffb02e] py-24">
                <div className="game-container">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#111827]/70">Press</p>
                    <h2 className="game-heading mt-4">
                        <TranslatedText ko="보도자료" en="Press" ja="プレス" />
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {pressLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="game-card block overflow-hidden p-4 transition-transform hover:-translate-y-1"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-white">
                                    <Image
                                        src={link.image}
                                        alt={link.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <p className="balanced-copy mt-4 text-lg font-black leading-tight">
                                    <TranslatedText ko={link.title} en={link.titleEn} ja={link.titleJa} />
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
