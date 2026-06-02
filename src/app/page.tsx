import Image from 'next/image'
import Link from 'next/link'
import AppDownloadButtons from '@/components/app_download_buttons'

const values = [
    {
        title: '유희',
        description: '게임은 먼저 즐거워야 합니다. 도약민은 플레이어가 다시 접속하고 싶은 경험을 만듭니다.',
        image: '/image/enjoy.png',
        alt: '도약민 유희 가치 이미지',
    },
    {
        title: '상생',
        description: '게임과 지역이 서로를 살리는 구조를 설계합니다. 방문과 체류가 자연스러운 놀이가 됩니다.',
        image: '/image/coprosperity.png',
        alt: '도약민 상생 가치 이미지',
    },
    {
        title: '지속',
        description: '재미와 사회적 가치를 오래 이어갈 수 있도록 서비스와 커뮤니티를 함께 다듬습니다.',
        image: '/image/continuing.jpg',
        alt: '도약민 지속 가치 이미지',
    },
]

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-[#1d1d1f]">
            <section className="relative flex min-h-[calc(100vh-44px)] items-center justify-center overflow-hidden bg-black text-white">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-[53%_center] opacity-70"
                >
                    <source src="/video/hero_video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/25" />

                <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
                    <p className="mb-4 text-[17px] font-semibold tracking-[-0.01em] text-white/85">
                        DOYAKMIN Inc.
                    </p>
                    <h1 className="max-w-4xl text-[44px] font-semibold leading-[1.07] tracking-[-0.02em] sm:text-[56px] lg:text-[68px]">
                        게임으로 세상을 새롭게.
                    </h1>
                    <p className="mt-5 max-w-2xl text-[21px] font-normal leading-[1.35] tracking-[-0.01em] text-white/90 sm:text-[28px]">
                        위치 기반 게임 한국지로 지역의 이야기를 플레이합니다.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/games" className="apple-button-primary">
                            한국지 보기
                        </Link>
                        <Link href="/team" className="apple-button-secondary apple-button-secondary-dark">
                            회사 소개
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen items-center bg-[#f5f5f7] px-6 py-20">
                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="text-center lg:text-left">
                        <p className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-[#0066cc]">
                            Hangukji
                        </p>
                        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[56px]">
                            전국이 게임판이 되는 순간.
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-[21px] leading-[1.47] tracking-[-0.01em] text-[#333333] lg:mx-0">
                            한국지는 실제 위치를 기반으로 지역을 점령하고 경쟁하는 모바일 게임입니다. 걷고, 방문하고, 머무는 시간이 플레이가 됩니다.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <Link href="/games" className="apple-button-primary">
                                자세히 보기
                            </Link>
                            <Link href="/contact" className="apple-button-secondary">
                                제휴 문의
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-2xl">
                        <Image
                            src="/image/hangukji-banner.jpg"
                            alt="한국지 게임 배너"
                            width={960}
                            height={640}
                            className="aspect-[4/3] w-full object-cover shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0]"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen items-center bg-[#272729] px-6 py-20 text-white">
                <div className="mx-auto w-full max-w-6xl text-center">
                    <p className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-[#2997ff]">
                        GAMES MAKETH THE WORLD ANEW
                    </p>
                    <h2 className="mx-auto max-w-4xl text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[56px]">
                        재미가 지역을 움직이게 합니다.
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-[21px] leading-[1.47] tracking-[-0.01em] text-[#cccccc]">
                        도약민은 게임의 즐거움과 지역 상권, 관광, 커뮤니티를 연결해 새로운 체류 경험을 만듭니다.
                    </p>

                    <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {values.map((value) => (
                            <article key={value.title} className="text-center">
                                <div className="mx-auto mb-6 h-52 w-52 overflow-hidden rounded-[18px] bg-[#2a2a2c]">
                                    <Image
                                        src={value.image}
                                        alt={value.alt}
                                        width={240}
                                        height={240}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-[28px] font-semibold leading-[1.14] tracking-[-0.01em]">
                                    {value.title}
                                </h3>
                                <p className="mx-auto mt-3 max-w-xs text-[17px] leading-[1.47] tracking-[-0.01em] text-[#cccccc]">
                                    {value.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen items-center bg-white px-6 py-20">
                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="order-2 lg:order-1">
                        <Image
                            src="/image/game_introduce.jpg"
                            alt="한국지 게임 소개 이미지"
                            width={960}
                            height={720}
                            className="aspect-[4/3] w-full object-cover shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0]"
                        />
                    </div>

                    <div className="order-1 text-center lg:order-2 lg:text-left">
                        <p className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-[#0066cc]">
                            Now available
                        </p>
                        <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[56px]">
                            한국지를 지금 만나보세요.
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-[21px] leading-[1.47] tracking-[-0.01em] text-[#333333] lg:mx-0">
                            iOS와 Google Play에서 한국지를 다운로드하고, 내 주변의 땅을 차지하는 새로운 플레이를 시작하세요.
                        </p>
                        <AppDownloadButtons className="mt-8 justify-center lg:justify-start" />
                    </div>
                </div>
            </section>
        </main>
    )
}
