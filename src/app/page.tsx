import Image from 'next/image'
import Link from 'next/link'
import AppDownloadButtons from '@/components/app_download_buttons'
import TranslatedText from '@/components/translated_text'

const stats = [
    { value: 'GPS', ko: '현실 위치 기반 플레이', en: 'Real location-based play' },
    { value: 'PVP', ko: '플레이어 경쟁과 점령전', en: 'Player battles and capture' },
    { value: 'LOCAL', ko: '지역 방문을 만드는 게임', en: 'A game that drives local visits' },
]

const values = [
    {
        titleKo: '재미',
        titleEn: 'FUN',
        ko: '계속 접속하고 싶은 명확한 재미를 만듭니다.',
        en: 'We build clear fun that players want to return to.',
        image: '/image/enjoy.png',
    },
    {
        titleKo: '상생',
        titleEn: 'CO-PROSPERITY',
        ko: '플레이어와 지역, 상권과 관광을 자연스럽게 연결합니다.',
        en: 'We connect players, places, local businesses, and tourism.',
        image: '/image/coprosperity.png',
    },
    {
        titleKo: '지속',
        titleEn: 'SUSTAIN',
        ko: '재미와 상생이 오래 이어지는 서비스로 성장합니다.',
        en: 'We grow into a service where fun and co-prosperity last.',
        image: '/image/continuing.jpg',
    },
]

const hangukjiShowcaseImages = [
    { src: '/image/hangukji/feature-coupon.png', alt: '한국지 전통놀이 훈련 화면' },
    { src: '/image/hangukji/feature-ranking.png', alt: '한국지 랭킹 순위 화면' },
    { src: '/image/hangukji/feature-training.png', alt: '한국지 이 고을을 차지하라 홍보 이미지' },
    { src: '/image/hangukji/gameplay-map.png', alt: '한국지 실제 상점 쿠폰 발급 화면' },
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
                        <p className="game-readable mt-6 text-xl font-semibold leading-relaxed text-white/82">
                            <TranslatedText
                                ko="한국지는 현실의 위치를 게임판으로 바꾸는 모바일 점령형 게임입니다."
                                en="Hangukji is a mobile capture game that turns real-world locations into a game board."
                            />
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/games"
                                className="game-button border-white bg-white text-[#111827] shadow-[0_6px_0_rgba(183,255,42,0.8)] hover:bg-white hover:shadow-[0_8px_0_rgba(183,255,42,0.85)]"
                            >
                                <TranslatedText ko="play" en="Play" />
                            </Link>
                            <Link
                                href="/contact"
                                className="game-button border-white bg-white text-[#111827] shadow-[0_6px_0_rgba(183,255,42,0.8)] hover:bg-white hover:shadow-[0_8px_0_rgba(183,255,42,0.85)]"
                            >
                                <TranslatedText ko="제휴 문의" en="Partner with us" />
                            </Link>
                        </div>
                    </div>

                    <div className="game-card-dark relative overflow-hidden p-4">
                        <Image
                            src="/image/hangukji/phone-tutorial.png"
                            alt="한국지 게임 배너"
                            width={488}
                            height={682}
                            className="mx-auto max-h-[70vh] w-auto max-w-full rounded-[22px] object-contain"
                            priority
                        />
                        <div className="absolute bottom-7 left-7 rounded-2xl border-2 border-white/30 bg-[#07111f]/78 px-5 py-4 backdrop-blur">
                            <p className="text-xs font-black tracking-[0.16em] text-[#b7ff2a]">coming soon</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#b7ff2a] py-6">
                <div className="game-container grid grid-cols-1 gap-3 md:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.value} className="rounded-2xl border-2 border-[#111827] bg-white px-5 py-4">
                            <p className="text-3xl font-black tracking-tighter text-[#111827]">{item.value}</p>
                            <p className="mt-1 text-sm font-bold text-[#526071]">
                                <TranslatedText ko={item.ko} en={item.en} />
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#f4f7fb] py-24">
                <div className="game-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="game-eyebrow text-[#0c7a90]">Hangukji</p>
                        <h2 className="game-heading mt-4 text-[#111827]">
                            <TranslatedText
                                ko="전국이 전장이 되고, 산책이 전략이 됩니다."
                                en="The whole country becomes the arena. Every walk becomes strategy."
                            />
                        </h2>
                        <p className="game-copy game-readable mt-6">
                            <TranslatedText
                                ko="건물을 점령하고, 주변 플레이어와 경쟁하고, 지역을 방문하는 이유를 게임 안에서 만들어냅니다."
                                en="Capture buildings, compete with nearby players, and find a reason to visit real places through the game."
                            />
                        </p>
                        <p className="game-copy game-readable mt-3">
                            <TranslatedText
                                ko="도약민은 이동이 곧 플레이가 되는 경험을 설계합니다."
                                en="Doyakmin designs experiences where movement itself becomes play."
                            />
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
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                            {hangukjiShowcaseImages.map((image) => (
                                <div key={image.src} className="relative aspect-[9/16] overflow-hidden rounded-[18px] bg-[#f4f7fb]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 50vw, 16vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container">
                    <div className="max-w-3xl">
                        <p className="game-eyebrow">Our Rule</p>
                        <h2 className="game-heading mt-4">
                            <TranslatedText
                                ko="게임은 재밌어야하고, 연결되어야하며, 지속되어야 합니다."
                                en="Games should be fun, connected, and sustainable."
                            />
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {values.map((value) => (
                            <article key={value.titleKo} className="game-card-dark overflow-hidden p-5">
                                <Image
                                    src={value.image}
                                    alt={`${value.titleKo} 이미지`}
                                    width={360}
                                    height={260}
                                    className="aspect-[4/3] w-full rounded-[20px] object-cover"
                                />
                                <h3 className="mt-5 text-3xl font-black tracking-tighter text-[#b7ff2a]">
                                    <TranslatedText ko={value.titleKo} en={value.titleEn} />
                                </h3>
                                <p className="mt-3 text-base font-semibold leading-relaxed text-white/72">
                                    <TranslatedText ko={value.ko} en={value.en} />
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
                        <h2 className="game-heading mt-4 text-[#111827]">
                            <TranslatedText ko="한국지를 지금 플레이하세요." en="Play Hangukji now." />
                        </h2>
                        <p className="game-readable mt-5 text-lg font-bold leading-relaxed text-[#111827]/78">
                            <TranslatedText
                                ko="내 주변의 건물과 지역이 게임 속 영토가 됩니다. 앱을 다운로드하고 첫 점령을 시작해보세요."
                                en="Buildings and places around you become territory in the game. Download the app and start your first capture."
                            />
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
