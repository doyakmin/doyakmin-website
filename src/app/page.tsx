import Image from 'next/image'
import Link from 'next/link'
import AppDownloadButtons from '@/components/app_download_buttons'

const stats = [
    { value: 'GPS', label: '현실 위치 기반 플레이' },
    { value: 'PVP', label: '플레이어 경쟁과 점령전' },
    { value: 'LOCAL', label: '지역 방문을 만드는 게임' },
]

const values = [
    {
        title: 'PLAY',
        description: '계속 접속하고 싶은 명확한 재미를 만듭니다.',
        image: '/image/enjoy.png',
    },
    {
        title: 'CONNECT',
        description: '플레이어와 지역, 상권과 관광을 자연스럽게 연결합니다.',
        image: '/image/coprosperity.png',
    },
    {
        title: 'GROW',
        description: '재미가 오래 이어지는 서비스와 커뮤니티를 키웁니다.',
        image: '/image/continuing.jpg',
    },
]

export default function Home() {
    return (
        <main className="game-shell min-h-screen">
            <section className="relative overflow-hidden text-white">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-[53%_center] opacity-45"
                >
                    <source src="/video/hero_video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#07111f]/70" />

                <div className="game-container relative z-10 grid min-h-[calc(100vh-44px)] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <p className="game-eyebrow">Doyakmin Game Studio</p>
                        <h1 className="game-title mt-5 max-w-3xl">
                            Play the map.
                            <br />
                            Own the city.
                        </h1>
                        <p className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-white/82">
                            한국지는 현실의 위치를 게임판으로 바꾸는 모바일 점령형 게임입니다.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/games" className="game-button">
                                한국지 보기
                            </Link>
                            <Link href="/contact" className="game-button game-button-dark">
                                제휴 문의
                            </Link>
                        </div>
                    </div>

                    <div className="game-card-dark relative overflow-hidden p-4">
                        <Image
                            src="/image/hangukji-banner.jpg"
                            alt="한국지 게임 배너"
                            width={900}
                            height={700}
                            className="aspect-[4/3] w-full rounded-[22px] object-cover"
                            priority
                        />
                        <div className="absolute bottom-7 left-7 rounded-2xl border-2 border-white/30 bg-[#07111f]/78 px-5 py-4 backdrop-blur">
                            <p className="text-xs font-black tracking-[0.16em] text-[#b7ff2a]">NOW LIVE</p>
                            <p className="mt-1 text-2xl font-black tracking-tight">한국지</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#b7ff2a] py-6">
                <div className="game-container grid grid-cols-1 gap-3 md:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.value} className="rounded-2xl border-2 border-[#111827] bg-white px-5 py-4">
                            <p className="text-3xl font-black tracking-tighter text-[#111827]">{item.value}</p>
                            <p className="mt-1 text-sm font-bold text-[#526071]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#f4f7fb] py-24">
                <div className="game-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="game-eyebrow text-[#0c7a90]">Hangukji</p>
                        <h2 className="game-heading mt-4 text-[#111827]">
                            전국이 전장이 되고, 산책이 전략이 됩니다.
                        </h2>
                        <p className="game-copy mt-6">
                            건물을 점령하고, 주변 플레이어와 경쟁하고, 지역을 방문하는 이유를 게임 안에서 만들어냅니다.
                            도약민은 이동이 곧 플레이가 되는 경험을 설계합니다.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            {['GPS', '점령전', 'PVP', '지역 활성화'].map((tag) => (
                                <span key={tag} className="game-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="game-card overflow-hidden p-4">
                        <Image
                            src="/image/game_introduce.jpg"
                            alt="한국지 게임 소개 이미지"
                            width={960}
                            height={720}
                            className="aspect-[4/3] w-full rounded-[22px] object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container">
                    <div className="max-w-3xl">
                        <p className="game-eyebrow">Our Rule</p>
                        <h2 className="game-heading mt-4">게임은 재미있고, 연결되고, 계속 커져야 합니다.</h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {values.map((value) => (
                            <article key={value.title} className="game-card-dark overflow-hidden p-5">
                                <Image
                                    src={value.image}
                                    alt={`${value.title} 이미지`}
                                    width={360}
                                    height={260}
                                    className="aspect-[4/3] w-full rounded-[20px] object-cover"
                                />
                                <h3 className="mt-5 text-3xl font-black tracking-tighter text-[#b7ff2a]">
                                    {value.title}
                                </h3>
                                <p className="mt-3 text-base font-semibold leading-relaxed text-white/72">
                                    {value.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#ffb02e] py-24">
                <div className="game-container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#111827]/70">
                            Download
                        </p>
                        <h2 className="game-heading mt-4 text-[#111827]">한국지를 지금 플레이하세요.</h2>
                        <p className="mt-5 max-w-xl text-lg font-bold leading-relaxed text-[#111827]/78">
                            내 주변의 건물과 지역이 게임 속 영토가 됩니다. 앱을 다운로드하고 첫 점령을 시작해보세요.
                        </p>
                    </div>
                    <div className="game-card bg-white p-8">
                        <AppDownloadButtons />
                    </div>
                </div>
            </section>
        </main>
    )
}
