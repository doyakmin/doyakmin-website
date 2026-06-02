import GameImageCarousel from '@/components/game_image_carousel'
import AppDownloadButtons from '@/components/app_download_buttons'

const features = [
    {
        title: 'REAL MAP',
        body: '실제 위치와 건물을 기반으로 플레이가 펼쳐집니다.',
    },
    {
        title: 'CAPTURE',
        body: '내 주변 영토를 점령하고 확장하는 전략이 핵심입니다.',
    },
    {
        title: 'BATTLE',
        body: '플레이어와 경쟁하며 점령지를 지켜내세요.',
    },
    {
        title: 'LOCAL QUEST',
        body: '지역을 방문하고 머무는 경험이 게임의 보상이 됩니다.',
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
                            지역 소멸 문제 해결을 위한 GPS 기반 모바일 점령형 게임입니다.
                        </p>
                        <p className="game-readable mt-3 text-xl font-semibold leading-relaxed text-white/78">
                            전국의 지도가 곧 플레이어의 전장이 됩니다.
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
                        <h2 className="game-heading mt-4">움직이고, 점령하고, 경쟁하세요.</h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <article key={feature.title} className="game-card p-6">
                                <p className="text-sm font-black tracking-[0.16em] text-[#0c7a90]">{feature.title}</p>
                                <p className="mt-8 text-lg font-black leading-tight">{feature.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#b7ff2a] py-20">
                <div className="game-container grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                        <h2 className="game-heading">지금 바로 첫 영토를 차지하세요.</h2>
                        <p className="game-readable mt-5 text-lg font-bold leading-relaxed text-[#111827]/78">
                            한국지는 iOS와 Google Play에서 만날 수 있습니다.
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
