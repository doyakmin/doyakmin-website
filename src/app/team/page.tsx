import Image from "next/image";
import PopIn from "@/components/PopInAnimation";

export default function TeamPage() {
    return (
        <main className="min-h-screen font-sans text-black bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-emerald-700/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            회사 소개
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            게임을 통해 세상을 새롭게 만들어가는 도약민 팀을 소개합니다
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            팀원 소개
                        </h2>
                        <p className="text-lg text-gray-700">
                            함께 꿈을 실현해나가는 도약민의 멤버들
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 정민영 - 대표 */}
                        <div className="group relative">
                            <div className="relative p-10 bg-emerald-100 rounded-2xl">
                                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <Image
                                        src='/image/profile/person_ceo.png'
                                        alt="대표이사 프로필"
                                        width="256"
                                        height="256"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 text-center">
                                    <a
                                        href="https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=2&acq=%EC%A0%95%EB%AF%BC%EC%98%81&qdt=0&ie=utf8&query=%EC%A0%95%EB%AF%BC%EC%98%81&ackey=xb8uh409"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                                    >
                                        정민영
                                        <svg
                                            className="w-3 h-3 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </h3>
                                <p className="text-emerald-500 font-semibold text-center mb-3">
                                    대표이사
                                </p>
                                <p className="text-gray-700 text-sm text-center break-all">
                                    minyoung5454@naver.com
                                </p>
                            </div>
                        </div>

                        {/* 김민서 - 개발자 */}
                        <div className="group relative">
                            <div className="relative p-10 bg-emerald-100 rounded-2xl">
                                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <Image
                                        src='/image/profile/person_dev_kim.jpg'
                                        alt="개발자 김민서 프로필"
                                        width="256"
                                        height="256"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 text-center">
                                    김민서
                                </h3>
                                <p className="text-emerald-500 font-semibold text-center mb-3">
                                    개발자
                                </p>
                                <p className="text-gray-700 text-sm text-center break-all">
                                    kms@doyakmin.com
                                </p>
                            </div>
                        </div>

                        {/* 박상현 - 개발자 */}
                        <div className="group relative">
                            <div className="relative p-10 bg-emerald-100 rounded-2xl">
                                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <Image
                                        src="/image/profile/person_dev_park.jpg"
                                        alt="개발자 박상현 프로필"
                                        width="256"
                                        height="256"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 text-center">
                                    박상현
                                </h3>
                                <p className="text-emerald-500 font-semibold text-center mb-3">
                                    개발자
                                </p>
                                <p className="text-gray-700 text-sm text-center">
                                    teiwoong@naver.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            파트너사
                        </h2>
                        <p className="text-lg text-gray-700">
                            함께 성장해나가는 소중한 파트너
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="group relative max-w-md">
                            <div className="relative p-10">
                                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 flex items-center justify-center">
                                    <Image
                                        src="/image/profile/brandia.jpg"
                                        alt="브랜디아 로고"
                                        width="256"
                                        height="256"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                                    브랜디아
                                </h3>
                                <p className="text-gray-700 text-sm text-center break-all">
                                    brandia.shj@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team History Section */}
            <section className="py-20" style={{ backgroundColor: '#d6f2ec' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            연혁
                        </h2>
                        <p className="text-lg text-gray-700">
                            도약민의 성장 과정과 주요 성과들
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* 2025년 */}
                        <div className="relative">
                            <PopIn delay={0}>
                                <div className="flex items-center mb-8">
                                    <div className="bg-emerald-600 text-white px-6 py-3 rounded-full text-2xl font-bold">
                                        2025
                                    </div>
                                    <div className="ml-6 h-px bg-emerald-600 flex-1"></div>
                                </div>
                            </PopIn>

                            <PopIn delay={0}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-20">
                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            부산권 창업공유대학 IR 피칭 대회
                                        </h3>
                                        <p className="text-gray-300">최우수상 수상</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            한국관광공사
                                        </h3>
                                        <p className="text-gray-300">예비관광벤처 선정</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            꿈터플러스 창업경진대회
                                        </h3>
                                        <p className="text-gray-300">대상 수상</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            주식회사 도약민 법인 설립
                                        </h3>
                                    </div>
                                </div>
                            </PopIn>

                        </div>

                        {/* 2024년 */}
                        <div className="relative">
                            <PopIn delay={0}>
                                <div className="flex items-center mb-8">
                                    <div className="bg-emerald-600 text-white px-6 py-3 rounded-full text-2xl font-bold">
                                        2024
                                    </div>
                                    <div className="ml-6 h-px bg-emerald-600 flex-1"></div>
                                </div>
                            </PopIn>

                            <PopIn delay={0}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-20">
                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            창업 경진대회
                                        </h3>
                                        <p className="text-gray-300">한국연구재단 이사장상 수상</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            K7U-Belt 창업경진대회
                                        </h3>
                                        <p className="text-gray-300">한밭대 총장상 수상</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            동남권 창업경진대회
                                        </h3>
                                        <p className="text-gray-300">우수상 선정</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            부산관광공사 트래블톤
                                        </h3>
                                        <p className="text-gray-300">우수상 선정</p>
                                    </div>

                                    <div className="p-6 bg-gray-900 rounded-xl hover:border-emerald-400/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                                            경북 턴키형 창업 지원 사업
                                        </h3>
                                        <p className="text-gray-300">사업 선정</p>
                                    </div>
                                </div>
                            </PopIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Press Release Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            보도자료
                        </h2>
                        <p className="text-lg text-gray-700">
                            도약민의 성과와 활동을 다룬 언론 보도
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* 보도자료 1 */}
                        <a
                            href="https://naver.me/GxL2nZQd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block"
                        >
                            <div className="relative p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg cursor-pointer flex items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-emerald-500 mb-3">
                                        국립부경대생 스타트업 개발 모바일 게임 &apos;주목&apos;
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                                        부산 지역 대학생 스타트업이 지역 관광을 접목한 모바일 게임 &apos;한국지&apos;를 개발했다. 국립부경대학교 창업동아리 &apos;도약민&apos;팀은 &apos;한국지&apos;를 개발해 창업에 성공한 데 이어, 
                                        오는 9월 8일 &apos;한국지&apos; 베타 서비스를 시작한다.
                                    </p>
                                </div>
                                <div className="w-30 h-30 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src="/image/news/news1.jpg"
                                        alt="보도자료 이미지1"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </a>

                        {/* 보도자료 2 */}
                        <a
                            href="https://naver.me/xOd6Eh3o"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block"
                        >
                            <div className="relative p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg cursor-pointer flex items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-emerald-500 mb-3">
                                        국립부경대, 창업 아이디어 경진대회 대상·우수상 동시 수상
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                                        국립부경대 경영학부 정민영 학생과 경상국립대 의예과 김민서 학생이 함께한 연합 창업동아리 &apos;도약민&apos; 팀(지도교수 한재호)은 지역 소멸 문제 해결을 위한 GPS 기반 모바일 점령형 게임 &apos;한국지&apos;를 제안해 대상과 함께 상금 100만 원을 수상했다.
                                    </p>
                                </div>
                                <div className="w-30 h-30 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src="/image/news/news2.png"
                                        alt="보도자료 이미지2"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </a>

                        {/* 보도자료 3 */}
                        <a
                            href="https://naver.me/xnrlgB9Q"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block"
                        >
                            <div className="relative p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg cursor-pointer flex items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-emerald-500 mb-3">
                                        국립부경대-경상국립대 연합팀, &apos;2024 부산다움 트래블톤&apos; 우수상 수상
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                                        지역소멸 문제를 온 가족이 즐기는 모바일 게임으로 해결한다는 차별적이면서도 현실적인 아이디어를 제시해 이번 대회 주제인 &apos;부산다움을 드러내는 창의적인 부산 관광&apos;에 적합하다는 평가를 받았다.
                                    </p>
                                </div>
                                <div className="w-30 h-30 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src="/image/news/news3.jpg"
                                        alt="보도자료 이미지3"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </a>

                        {/* 보도자료 4 */}
                        <a
                            href="https://naver.me/55PpQgxz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block"
                        >
                            <div className="relative p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg cursor-pointer flex items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-emerald-500 mb-3">
                                        K7U-Belt 창업 아이디어 경진대회 성료
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                                        국립한밭대학교 3단계산학연협력선도대학육성사업단(LINC 3.0)은 지난 21일 교내 산학연협동관에서 국립한밭대, 국립군산대, 국립금오공대, 국립부경대, 국립창원대, 국립한국교통대, 서울과학기술대 7개 대학 학생들이 참여한 &apos;2024 K7U-Belt 창업 아이디어 경진대회&apos;를 개최했다고 26일 밝혔다.
                                    </p>
                                </div>
                                <div className="w-30 h-30 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src="/image/news/news4.jpg"
                                        alt="보도자료 이미지4"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
