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
            '부산권 창업공유대학 IR 피칭 대회 최우수상',
            '한국관광공사 예비관광벤처 선정',
            '꿈터플러스 창업경진대회 대상',
            '주식회사 도약민 법인 설립',
        ],
    },
    {
        year: '2024',
        items: [
            '창업 경진대회 국립부경대학교 이사장상',
            'K7U-Belt 창업경진대회 총장상',
            '동남권 창업경진대회 우수팀 선정',
            '부산다움 트래블톤 우수상',
            '경남 메이커 창업 지원사업 선정',
        ],
    },
]

const pressLinks = [
    {
        title: "KBS 부산 뉴스, GPS 기반 관광 게임 '한국지' 소개",
        href: 'https://youtu.be/UHrwMiI9XXo?si=MtpjOsWFEuAAISMq',
        image: '/image/hangukji/press-kbs.png',
    },
    {
        title: '2025 관광이음주간 도약민, 혁신 기술 선보여',
        href: 'https://m.newsprime.co.kr/section_view.html?no=705537',
        image: '/image/news/giweek-2025-prime.jpg',
    },
    {
        title: "부산 지역 대학생 스타트업 개발 모바일 게임 '한국지' 주목",
        href: 'https://www.pknu.ac.kr/main/51?action=view&no=721366',
        image: '/image/news/news1.jpg',
    },
    {
        title: '국립부경대, 창업 아이디어 경진대회 대상 수상',
        href: 'https://naver.me/xOd6Eh3o',
        image: '/image/news/news2.png',
    },
    {
        title: "국립부경대-경상국립대 연합팀, '2024 부산다움 트래블톤' 우수상",
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
                            <TranslatedText ko="대표이사" en="CEO" />
                        </p>
                        <p className="mt-2 break-all text-sm font-bold text-[#526071]">minyoung5454@naver.com</p>
                    </article>
                </div>
            </section>

            <section className="py-24">
                <div className="game-container">
                    <p className="game-eyebrow text-[#0c7a90]">History</p>
                    <h2 className="game-heading mt-4">
                        <TranslatedText ko="도약민의 플레이 로그" en="Doyakmin play log" />
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {historyItems.map((group) => (
                            <article key={group.year} className="game-card p-7">
                                <h3 className="text-5xl font-black tracking-tighter">{group.year}</h3>
                                <ul className="mt-6 space-y-3 text-base font-bold leading-relaxed text-[#526071]">
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
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
                        <TranslatedText ko="보도자료" en="Press" />
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
                                <p className="mt-4 text-lg font-black leading-tight">{link.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
