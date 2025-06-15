import Image from 'next/image'

export default function TeamPage() {
    return (
        <main className="min-h-screen font-sans text-white bg-black">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            팀 소개
                        </h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            게임을 통해 세상을 새롭게 만들어가는 도약민 팀을 소개합니다
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            팀원 소개
                        </h2>
                        <p className="text-lg text-gray-400">
                            함께 꿈을 실현해나가는 도약민의 멤버들
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 정민영 - 대표 */}
                        <div className="group relative">
                            <div className="relative p-7 bg-white rounded-2xl">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <div className="w-full h-full bg-emerald-600/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-emerald-400">정</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 text-center">
                                    정민영
                                </h3>
                                <p className="text-emerald-400 font-semibold text-center mb-3">
                                    대표이사
                                </p>
                                <p className="text-gray-400 text-sm text-center break-all">
                                    minyoung5454@naver.com
                                </p>
                            </div>
                        </div>

                        {/* 김민서 - 개발자 */}
                        <div className="group relative">
                            <div className="relative p-7 bg-white rounded-2xl">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <div className="w-full h-full bg-emerald-600/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-emerald-400">김</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 text-center">
                                    김민서
                                </h3>
                                <p className="text-emerald-400 font-semibold text-center mb-3">
                                    개발자
                                </p>
                                <p className="text-gray-400 text-sm text-center break-all">
                                    mikoesnimi02@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* 박상현 - 개발자 */}
                        <div className="group relative">
                            <div className="relative p-7 bg-white rounded-2xl">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <div className="w-full h-full bg-emerald-600/10 rounded-2xl flex items-center justify-center">
                                        <span className="text-2xl font-bold text-emerald-400">박</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 text-center">
                                    박상현
                                </h3>
                                <p className="text-emerald-400 font-semibold text-center mb-3">
                                    개발자
                                </p>
                                <p className="text-gray-400 text-sm text-center">
                                    이메일 준비중
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team History Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            팀 연혁
                        </h2>
                        <p className="text-lg text-gray-400">
                            도약민의 성장 과정과 주요 성과들
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* 2025년 */}
                        <div className="relative">
                            <div className="flex items-center mb-8">
                                <div className="bg-emerald-600 text-white px-6 py-3 rounded-full text-2xl font-bold">
                                    2025
                                </div>
                                <div className="ml-6 h-px bg-emerald-600/30 flex-1"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-20">
                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        부산권 창업공유대학 IR 피칭 대회
                                    </h3>
                                    <p className="text-gray-300">최우수상 수상</p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        한국관광공사
                                    </h3>
                                    <p className="text-gray-300">예비관광벤처 선정</p>
                                </div>
                            </div>
                        </div>

                        {/* 2024년 */}
                        <div className="relative">
                            <div className="flex items-center mb-8">
                                <div className="bg-emerald-600 text-white px-6 py-3 rounded-full text-2xl font-bold">
                                    2024
                                </div>
                                <div className="ml-6 h-px bg-emerald-600/30 flex-1"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-20">
                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        창업 경진대회
                                    </h3>
                                    <p className="text-gray-300">한국연구재단 이사장상 수상</p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        K7U-Belt 창업경진대회
                                    </h3>
                                    <p className="text-gray-300">한밭대 총장상 수상</p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        동남권 창업경진대회
                                    </h3>
                                    <p className="text-gray-300">우수상 선정</p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        부산관광공사 트래블톤
                                    </h3>
                                    <p className="text-gray-300">우수상 선정</p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                        경북 턴키형 창업 지원 사업
                                    </h3>
                                    <p className="text-gray-300">선정</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Press Release Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            보도자료
                        </h2>
                        <p className="text-lg text-gray-400">
                            도약민의 소식과 보도자료를 확인하세요
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {/* 준비중 카드들 */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group relative">
                                <div className="relative p-8 bg-gray-800 border border-gray-600/30 rounded-2xl hover:border-gray-400/50 transition-all duration-500">
                                    <h3 className="text-xl font-bold text-gray-400 mb-4">
                                        곧 업데이트됩니다
                                    </h3>

                                    <p className="text-gray-500 mb-4">
                                        도약민의 다양한 소식과 보도자료를 준비하고 있습니다.
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>Coming Soon</span>
                                        <span>2025</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    )
}