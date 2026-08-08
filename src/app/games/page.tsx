import type { Metadata } from 'next'
import GameImageCarousel from '@/components/game_image_carousel'
import AppDownloadButtons from '@/components/app_download_buttons'
import TranslatedText from '@/components/translated_text'
import { createSeoMetadata } from '@/lib/seo'

export const metadata: Metadata = createSeoMetadata({
    title: '한국지 | GPS 기반 모바일 점령 게임',
    description: '한국지는 실제 위치와 건물을 기반으로 영토를 점령하고 플레이어와 경쟁하는 도약민의 GPS 기반 모바일 게임입니다.',
    path: '/games',
    image: '/image/hangukji/hero-conquer.png',
    keywords: ['한국지 다운로드', '모바일 점령 게임', '위치 기반 모바일 게임'],
})

const features = [
    {
        title: 'REAL MAP',
        ko: '실제 위치와 건물을 기반으로 플레이가 펼쳐집니다.',
        en: 'Play unfolds through real locations and buildings.',
        ja: '現実の場所や建物を舞台にプレイが展開します。',
    },
    {
        title: 'CAPTURE',
        ko: '내 주변 영토를 점령하고 확장하는 전략이 핵심입니다.',
        en: 'Capture and expand territory around you.',
        ja: '周辺の領土を占領し、拡大する戦略が鍵です。',
    },
    {
        title: 'BATTLE',
        ko: '플레이어와 경쟁하며 점령지를 지켜내세요.',
        en: 'Compete with players and defend what you own.',
        ja: 'プレイヤーと競い、占領地を守り抜きましょう。',
    },
    {
        title: 'LOCAL QUEST',
        ko: '지역을 방문하고 머무는 경험이 게임의 보상이 됩니다.',
        en: 'Visiting and staying in local places becomes part of the reward.',
        ja: '地域を訪れ、滞在する体験がゲームの報酬になります。',
    },
]

export default function Games() {
    return (
        <main className="bg-[#f4f7fb] text-[#111827]">
            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="game-eyebrow">First Title</p>
                        <h1 className="game-title mt-5">한국지</h1>
                        <p className="game-readable mt-6 text-xl font-semibold leading-relaxed text-white/78">
                            <TranslatedText
                                ko="지역 소멸 문제 해결을 위한 GPS 기반 모바일 점령형 게임입니다."
                                en="A GPS-based mobile capture game designed to help solve regional decline."
                                ja="地域衰退の課題解決を目指す、GPSベースのモバイル陣取りゲームです。"
                            />
                        </p>
                        <p className="game-readable mt-3 text-xl font-semibold leading-relaxed text-white/78">
                            <TranslatedText
                                ko="전국의 지도가 곧 플레이어의 전장이 됩니다."
                                en="The national map becomes the player’s battlefield."
                                ja="全国の地図が、そのままプレイヤーの戦場になります。"
                            />
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {['GPS', 'PVP', '점령전', '전략'].map((tag) => (
                                <span key={tag} className="game-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <GameImageCarousel />
                </div>
            </section>

            <section className="py-24">
                <div className="game-container">
                    <div className="max-w-3xl">
                        <p className="game-eyebrow text-[#0c7a90]">How it plays</p>
                        <h2 className="game-heading mt-4">
                            <TranslatedText ko="움직이고, 점령하고, 경쟁하세요." en="Move, capture, and compete." ja="移動し、占領し、競い合おう。" />
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <article key={feature.title} className="game-card p-6">
                                <p className="text-sm font-black tracking-[0.16em] text-[#0c7a90]">{feature.title}</p>
                                <p className="mt-8 text-lg font-black leading-tight">
                                    <TranslatedText ko={feature.ko} en={feature.en} ja={feature.ja} />
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#b7ff2a] py-20">
                <div className="game-container grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                        <h2 className="game-heading">
                            <TranslatedText ko="지금 바로 첫 영토를 차지하세요." en="Capture your first territory now." ja="今すぐ最初の領土を手に入れよう。" />
                        </h2>
                        <p className="game-readable mt-5 text-lg font-bold leading-relaxed text-[#111827]/78">
                            <TranslatedText
                                ko="한국지는 iOS와 Google Play에서 만날 수 있습니다."
                                en="Hangukji is available on iOS and Google Play."
                                ja="『韓国地』はiOSとGoogle Playでお楽しみいただけます。"
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
