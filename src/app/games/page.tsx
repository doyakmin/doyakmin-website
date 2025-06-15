import Image from 'next/image'

export default function Games() {
    return (
        <main className="min-h-screen font-sans text-black bg-white">
            {/*Hero Section*/}
            <section className="relative py-20 bg-emerald-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            GAMES
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            게임을 통해 세상을 새롭게 만들어갑니다
                        </p>
                    </div>
                </div>
            </section>

            {/* 한국지 Game Section */}
            <section className="relative py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Game Image */}
                        <div className="order-1 lg:order-1 lg:col-span-2">
                            <div className="relative group">
                                <Image
                                    src="/image/game_introduce.jpg"
                                    alt="doyakmin enjoy"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover rounded-2xl transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Game Info */}
                        <div className="order-2 lg:order-2 lg:col-span-1">
                            <div className="relative">
                                {/* Game Title */}
                                <div className="mb-8">
                                    <h2 className="text-4xl md:text-6xl font-bold text-emerald-400 mb-4">
                                        한국지
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                                </div>

                                {/* Game Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-4">한줄 소개</h3>
                                    <p className="text-lg text-gray-900 leading-relaxed">
                                        지역 소멸 문제 해결을 위한 GPS 기반의 모바일 점령형 게임
                                    </p>
                                </div>

                                {/* Game Tags */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-600/30 hover:bg-emerald-600/30 transition-colors hover:cursor-default">
                                            # GPS
                                        </span>
                                        <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-600/30 hover:bg-emerald-600/30 transition-colors hover:cursor-default">
                                            # PVP
                                        </span>
                                        <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-600/30 hover:bg-emerald-600/30 transition-colors hover:cursor-default">
                                            # 점령전
                                        </span>
                                        <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-600/30 hover:bg-emerald-600/30 transition-colors hover:cursor-default">
                                            # 전략
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-30 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            게임 특징
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-300 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* GPS 기반 */}
                        <div className="group relative h-full">
                            <div className="relative h-full p-6 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
                                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center">
                                    GPS 기반
                                </h3>
                                <p className="text-gray-700 text-sm text-center flex-grow">
                                    실제 위치를 활용한 현실 연동 게임플레이
                                </p>
                            </div>
                        </div>

                        {/* PVP 전투 */}
                        <div className="group relative h-full">
                            <div className="relative h-full p-6 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
                                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">⚔️</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center">
                                    PVP 전투
                                </h3>
                                <p className="text-gray-700 text-sm text-center flex-grow">
                                    플레이어 간 실시간 대전과 경쟁
                                </p>
                            </div>
                        </div>

                        {/* 점령 시스템 */}
                        <div className="group relative h-full">
                            <div className="relative h-full p-6 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
                                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">🏰</span>
                                </div>
                                <h3 className="text-lg font-bold  mb-2 text-center">
                                    점령 시스템
                                </h3>
                                <p className="text-gray-700 text-sm text-center flex-grow">
                                    지역을 점령하고 영토를 확장하는 전략 게임
                                </p>
                            </div>
                        </div>

                        {/* 지역 활성화 */}
                        <div className="group relative h-full">
                            <div className="relative h-full p-6 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
                                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600/20 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center">
                                    지역 활성화
                                </h3>
                                <p className="text-gray-700 text-sm text-center flex-grow">
                                    게임을 통한 실제 지역 경제 기여
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}