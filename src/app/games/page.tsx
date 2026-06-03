import GameImageCarousel from '@/components/game_image_carousel'
import AppDownloadButtons from '@/components/app_download_buttons'
import TranslatedText from '@/components/translated_text'
import Image from 'next/image'

const features = [
    {
        title: 'REAL MAP',
        ko: '실제 위치와 건물을 기반으로 플레이가 펼쳐집니다.',
        en: 'Play unfolds through real locations and buildings.',
    },
    {
        title: 'CAPTURE',
        ko: '내 주변 영토를 점령하고 확장하는 전략이 핵심입니다.',
        en: 'Capture and expand territory around you.',
    },
    {
        title: 'BATTLE',
        ko: '플레이어와 경쟁하며 점령지를 지켜내세요.',
        en: 'Compete with players and defend what you own.',
    },
    {
        title: 'LOCAL QUEST',
        ko: '지역을 방문하고 머무는 경험이 게임의 보상이 됩니다.',
        en: 'Visiting and staying in local places becomes part of the reward.',
    },
]

const mediaHighlights = [
    {
        src: '/image/hangukji/hero-conquer.png',
        titleKo: '실제 지도 위에서 펼쳐지는 점령전',
        titleEn: 'Capture battles on a real map',
        bodyKo: '주변 건물과 장소가 플레이어의 영토가 되고, 이동이 곧 전략이 됩니다.',
        bodyEn: 'Nearby buildings and places become territory, turning movement into strategy.',
    },
    {
        src: '/image/hangukji/phone-tutorial.png',
        titleKo: '처음 보는 사람도 바로 이해하는 모바일 화면',
        titleEn: 'A mobile screen players can understand fast',
        bodyKo: '캐릭터, 튜토리얼, 지도 화면을 한눈에 보여주어 한국지의 첫인상을 선명하게 만듭니다.',
        bodyEn: 'Characters, tutorials, and map screens make the first impression of Hangukji clear.',
    },
    {
        src: '/image/hangukji/gameplay-map.png',
        titleKo: '지역 상권과 이어지는 제휴 보상',
        titleEn: 'Partner rewards connected to local businesses',
        bodyKo: '게임 안의 방문과 활동이 실제 지역 혜택으로 이어지는 구조를 보여줍니다.',
        bodyEn: 'In-game visits and activity can lead to real local benefits.',
    },
    {
        src: '/image/hangukji/feature-coupon.png',
        titleKo: '한국 전통놀이로 즐기는 훈련',
        titleEn: 'Training through Korean traditional games',
        bodyKo: '짧고 직관적인 미니게임으로 한국지의 플레이 리듬을 더합니다.',
        bodyEn: 'Short, intuitive mini-games add rhythm to Hangukji play.',
    },
    {
        src: '/image/hangukji/feature-ranking.png',
        titleKo: '점령 기록이 쌓이는 랭킹',
        titleEn: 'Rankings built from capture records',
        bodyKo: '주요 점령지와 점령지 수를 비교하며 플레이어의 성취를 보여줍니다.',
        bodyEn: 'Players can compare key territories and capture counts as visible achievements.',
    },
    {
        src: '/image/hangukji/feature-training.png',
        titleKo: '한 장으로 전하는 한국지의 재미',
        titleEn: 'Hangukji fun in one bold visual',
        bodyKo: '점령, 캐릭터, 지도 화면을 강한 홍보 이미지로 전달합니다.',
        bodyEn: 'Capture, characters, and map play are presented in one bold promotional image.',
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
                            />
                        </p>
                        <p className="game-readable mt-3 text-xl font-semibold leading-relaxed text-white/78">
                            <TranslatedText
                                ko="전국의 지도가 곧 플레이어의 전장이 됩니다."
                                en="The national map becomes the player’s battlefield."
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
                            <TranslatedText ko="움직이고, 점령하고, 경쟁하세요." en="Move, capture, and compete." />
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <article key={feature.title} className="game-card p-6">
                                <p className="text-sm font-black tracking-[0.16em] text-[#0c7a90]">{feature.title}</p>
                                <p className="mt-8 text-lg font-black leading-tight">
                                    <TranslatedText ko={feature.ko} en={feature.en} />
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-24">
                <div className="game-container">
                    <div className="max-w-3xl">
                        <p className="game-eyebrow text-[#0c7a90]">Game Screens</p>
                        <h2 className="game-heading mt-4">
                            <TranslatedText ko="플레이 장면과 지역 경험을 함께 보여줍니다." en="Gameplay and local experiences, shown together." />
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mediaHighlights.map((item) => (
                            <article key={item.src} className="game-card overflow-hidden p-4">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#f4f7fb]">
                                    <Image
                                        src={item.src}
                                        alt={item.titleKo}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                </div>
                                <h3 className="mt-5 text-2xl font-black leading-tight tracking-tighter">
                                    <TranslatedText ko={item.titleKo} en={item.titleEn} />
                                </h3>
                                <p className="game-readable mt-3 text-base font-bold leading-relaxed text-[#526071]">
                                    <TranslatedText ko={item.bodyKo} en={item.bodyEn} />
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
                            <TranslatedText ko="지금 바로 첫 영토를 차지하세요." en="Capture your first territory now." />
                        </h2>
                        <p className="game-readable mt-5 text-lg font-bold leading-relaxed text-[#111827]/78">
                            <TranslatedText
                                ko="한국지는 iOS와 Google Play에서 만날 수 있습니다."
                                en="Hangukji is available on iOS and Google Play."
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
