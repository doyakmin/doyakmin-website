import Image from 'next/image'
import Link from 'next/link'
import AppDownloadButtons from '@/components/app_download_buttons'
import TranslatedText from '@/components/translated_text'

const stats = [
    { value: 'GPS', ko: '현실 위치 기반 플레이', en: 'Real location-based play', ja: '現実の位置情報を活用したプレイ' },
    { value: 'PVP', ko: '플레이어 경쟁과 점령전', en: 'Player battles and capture', ja: 'プレイヤー同士の対戦と占領戦' },
    { value: 'LOCAL', ko: '지역 방문을 만드는 게임', en: 'A game that drives local visits', ja: '地域への訪問を生み出すゲーム' },
]

const values = [
    {
        titleKo: '재미',
        titleEn: 'FUN',
        titleJa: '楽しさ',
        ko: '계속 접속하고 싶은 명확한 재미를 만듭니다.',
        en: 'We build clear fun that players want to return to.',
        ja: '何度でも遊びたくなる、分かりやすい楽しさをつくります。',
        image: '/image/enjoy.png',
    },
    {
        titleKo: '상생',
        titleEn: 'CO-PROSPERITY',
        titleJa: '共生',
        ko: '플레이어와 지역, 상권과 관광을 자연스럽게 연결합니다.',
        en: 'We connect players, places, local businesses, and tourism.',
        ja: 'プレイヤーと地域、商圏、観光を自然につなぎます。',
        image: '/image/coprosperity.png',
    },
    {
        titleKo: '지속',
        titleEn: 'SUSTAIN',
        titleJa: '持続',
        ko: '재미와 상생이 오래 이어지는 서비스로 성장합니다.',
        en: 'We grow into a service where fun and co-prosperity last.',
        ja: '楽しさと共生が長く続くサービスへ成長します。',
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

                <div className="game-container relative z-10 grid min-h-[calc(100svh-56px)] items-center gap-8 py-12 md:gap-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <p className="game-eyebrow">Doyakmin Game Studio</p>
                        <h1 className="game-title mt-5 max-w-3xl">
                            Play the map.
                            <br />
                            Own the city.
                        </h1>
                        <p className="game-readable mt-5 text-lg font-semibold leading-relaxed text-white/82 md:mt-6 md:text-xl">
                            <TranslatedText
                                ko="한국지는 현실의 위치를 게임판으로 바꾸는 모바일 점령형 게임입니다."
                                en="Hangukji is a mobile capture game that turns real-world locations into a game board."
                                ja="『韓国地（Hangukji）』は、現実の場所をゲーム盤に変えるモバイル陣取りゲームです。"
                            />
                        </p>
                        <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap md:mt-8 md:gap-4">
                            <Link
                                href="/games"
                                className="game-button border-white bg-white text-[#111827] shadow-[0_6px_0_rgba(183,255,42,0.8)] hover:bg-white hover:shadow-[0_8px_0_rgba(183,255,42,0.85)]"
                            >
                                <TranslatedText ko="play" en="Play" ja="プレイ" />
                            </Link>
                            <Link
                                href="/contact"
                                className="game-button border-white bg-white text-[#111827] shadow-[0_6px_0_rgba(183,255,42,0.8)] hover:bg-white hover:shadow-[0_8px_0_rgba(183,255,42,0.85)]"
                            >
                                <TranslatedText ko="제휴 문의" en="Partner with us" ja="提携のお問い合わせ" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center py-4 md:py-0">
                        <Image
                            src="/image/hangukji/logo.png"
                            alt="한국지 로고"
                            width={1000}
                            height={260}
                            sizes="(max-width: 1024px) 92vw, 620px"
                            className="h-auto w-[92%] max-w-[620px] object-contain drop-shadow-[0_14px_0_rgba(0,0,0,0.24)] md:w-full md:drop-shadow-[0_18px_0_rgba(0,0,0,0.28)]"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#b7ff2a] py-4 md:py-6">
                <div className="game-container grid grid-cols-1 gap-3 md:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.value} className="rounded-2xl border-2 border-[#111827] bg-white px-4 py-3 md:px-5 md:py-4">
                            <p className="text-2xl font-black tracking-tighter text-[#111827] md:text-3xl">{item.value}</p>
                            <p className="mt-1 text-sm font-bold text-[#526071]">
                                <TranslatedText ko={item.ko} en={item.en} ja={item.ja} />
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#f4f7fb] py-14 md:py-24">
                <div className="game-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="game-eyebrow text-[#0c7a90]">Hangukji</p>
                        <h2 className="game-heading mt-4 text-[#111827]">
                            <TranslatedText
                                ko="전국이 전장이 되고, 산책이 전략이 됩니다."
                                en="The whole country becomes the arena. Every walk becomes strategy."
                                ja="全国が戦場になり、散歩が戦略になる。"
                            />
                        </h2>
                        <p className="game-copy game-readable mt-6">
                            <TranslatedText
                                ko="건물을 점령하고, 주변 플레이어와 경쟁하고, 지역을 방문하는 이유를 게임 안에서 만들어냅니다."
                                en="Capture buildings, compete with nearby players, and find a reason to visit real places through the game."
                                ja="建物を占領し、近くのプレイヤーと競い、現実の場所を訪れる理由をゲームの中につくります。"
                            />
                        </p>
                        <p className="game-copy game-readable mt-3">
                            <TranslatedText
                                ko="도약민은 이동이 곧 플레이가 되는 경험을 설계합니다."
                                en="Doyakmin designs experiences where movement itself becomes play."
                                ja="DOYAKMINは、移動そのものが遊びになる体験をデザインします。"
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

                    <div className="game-card overflow-hidden p-3 md:p-4">
                        <Image
                            src="/image/hangukji/phone-tutorial.png"
                            alt="한국지 튜토리얼 화면"
                            width={960}
                            height={720}
                            sizes="(max-width: 1024px) calc(100vw - 24px), 55vw"
                            className="aspect-[4/3] w-full rounded-[22px] object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#07111f] py-14 text-white md:py-24">
                <div className="game-container">
                    <div className="max-w-3xl">
                        <p className="game-eyebrow">Our Rule</p>
                        <h2 className="game-heading mt-4">
                            <TranslatedText
                                ko="게임은 재밌어야하고, 연결되어야하며, 지속되어야 합니다."
                                en="Games should be fun, connected, and sustainable."
                                ja="ゲームは楽しく、つながり、持続するものであるべきです。"
                            />
                        </h2>
                    </div>

                    <div className="mobile-value-strip mt-8 flex snap-x gap-4 overflow-x-auto pb-3 md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
                        {values.map((value) => (
                            <article key={value.titleKo} className="game-card-dark min-w-[72%] snap-start overflow-hidden p-4 sm:min-w-[46%] md:min-w-0 md:p-5">
                                <Image
                                    src={value.image}
                                    alt={`${value.titleKo} 이미지`}
                                    width={360}
                                    height={260}
                                    sizes="(max-width: 640px) 72vw, (max-width: 768px) 46vw, 357px"
                                    className="aspect-[4/3] w-full rounded-[16px] object-cover md:rounded-[20px]"
                                />
                                <h3 className="mt-4 text-2xl font-black tracking-tighter text-[#b7ff2a] md:mt-5 md:text-3xl">
                                    <TranslatedText ko={value.titleKo} en={value.titleEn} ja={value.titleJa} />
                                </h3>
                                <p className="mt-2 text-sm font-semibold leading-relaxed text-white/72 md:mt-3 md:text-base">
                                    <TranslatedText ko={value.ko} en={value.en} ja={value.ja} />
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#ffb02e] py-14 md:py-24">
                <div className="game-container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#111827]/70">
                            Download
                        </p>
                        <h2 className="game-heading mt-4 text-[#111827]">
                            <TranslatedText ko="한국지를 지금 플레이하세요." en="Play Hangukji now." ja="今すぐ『韓国地』をプレイしよう。" />
                        </h2>
                        <p className="game-readable mt-5 text-lg font-bold leading-relaxed text-[#111827]/78">
                            <TranslatedText
                                ko="내 주변의 건물과 지역이 게임 속 영토가 됩니다. 앱을 다운로드하고 첫 점령을 시작해보세요."
                                en="Buildings and places around you become territory in the game. Download the app and start your first capture."
                                ja="身近な建物や地域がゲーム内の領土になります。アプリをダウンロードして、最初の占領を始めましょう。"
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
