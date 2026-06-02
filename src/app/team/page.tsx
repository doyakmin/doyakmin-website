import Image from 'next/image'

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
        title: '2025 관광이음주간 도약민, 혁신 기술 선보여',
        href: 'https://m.newsprime.co.kr/section_view.html?no=705537',
    },
    {
        title: "부산 지역 대학생 스타트업 개발 모바일 게임 '한국지' 주목",
        href: 'https://www.pknu.ac.kr/main/51?action=view&no=721366',
    },
    {
        title: '국립부경대, 창업 아이디어 경진대회 대상 수상',
        href: 'https://naver.me/xOd6Eh3o',
    },
    {
        title: "국립부경대-경상국립대 연합팀, '2024 부산다움 트래블톤' 우수상",
        href: 'https://naver.me/xnrlgB9Q',
    },
]

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white text-[#1d1d1f]">
            <section className="flex min-h-[60vh] items-center justify-center bg-[#f5f5f7] px-6 py-20 text-center">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-[#0066cc]">
                        DOYAKMIN Inc.
                    </p>
                    <h1 className="text-[44px] font-semibold leading-[1.07] tracking-[-0.02em] sm:text-[64px]">
                        회사 소개
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[21px] leading-[1.47] tracking-[-0.01em] text-[#333333]">
                        게임을 통해 세상을 새롭게 만들어가는 도약민을 소개합니다.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[56px]">
                        대표이사
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-[21px] leading-[1.47] tracking-[-0.01em] text-[#333333]">
                        도약민을 이끌어가는 대표이사를 소개합니다.
                    </p>

                    <article className="mx-auto mt-12 max-w-sm">
                        <div className="mx-auto h-56 w-56 overflow-hidden rounded-full bg-[#f5f5f7]">
                            <Image
                                src="/image/profile/person_ceo.png"
                                alt="대표이사 정민영 프로필"
                                width={320}
                                height={320}
                                className="h-full w-full object-cover object-top"
                                priority
                            />
                        </div>
                        <h3 className="mt-6 text-[28px] font-semibold leading-[1.14] tracking-[-0.01em]">
                            <a
                                href="https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=2&acq=%EC%A0%95%EB%AF%BC%EC%98%81&qdt=0&ie=utf8&query=%EC%A0%95%EB%AF%BC%EC%98%81&ackey=xb8uh409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-[#0066cc]"
                            >
                                정민영
                            </a>
                        </h3>
                        <p className="mt-2 text-[17px] leading-[1.47] tracking-[-0.01em] text-[#333333]">
                            대표이사
                        </p>
                        <p className="mt-2 break-all text-[14px] leading-[1.43] tracking-[-0.01em] text-[#7a7a7a]">
                            minyoung5454@naver.com
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-[#272729] px-6 py-20 text-white">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <p className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-[#2997ff]">
                            History
                        </p>
                        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[56px]">
                            도약민의 여정
                        </h2>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {historyItems.map((group) => (
                            <article key={group.year} className="rounded-[18px] border border-white/10 p-6">
                                <h3 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.02em]">
                                    {group.year}
                                </h3>
                                <ul className="mt-5 space-y-3 text-left text-[17px] leading-[1.47] tracking-[-0.01em] text-[#cccccc]">
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f5f7] px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <p className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-[#0066cc]">
                            Press
                        </p>
                        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[56px]">
                            보도자료
                        </h2>
                    </div>

                    <div className="mt-12 divide-y divide-[#e0e0e0] rounded-[18px] bg-white">
                        {pressLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-6 py-5 text-[17px] leading-[1.47] tracking-[-0.01em] transition-colors hover:text-[#0066cc]"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
