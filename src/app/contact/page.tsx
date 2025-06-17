import Image from "next/image";
import Map from "@/components/map";

export default function ContactPage() {
    return (
        <main className="min-h-screen font-sans text-black bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-emerald-700/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            문의하기
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            도약민에 대한 문의사항이나 협업 제안이 있으시다면 언제든 연락해 주세요
                        </p>
                    </div>
                </div>
            </section>

            {/* 연락처 & 커뮤니티 */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            연락처 & 커뮤니티
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-300 rounded-full mx-auto"></div>
                    </div>

                    <div className="space-y-12 text-center">
                        {/* 연락처 */}
                        <div>
                            <h3 className="text-2xl font-bold text-emerald-600 mb-6">연락처</h3>
                            <div className="space-y-3 text-lg">
                                <p>
                                    <span className="font-semibold">✉️이메일:</span>{" "}
                                    doyakmin@gmail.com
                                </p>
                                <p>
                                    <span className="font-semibold">📞전화:</span>{" "}
                                    0507-1341-5455
                                </p>
                            </div>
                        </div>

                        {/* 커뮤니티 */}
                        <div>
                            <h3 className="text-2xl font-bold text-emerald-600 mb-6">한국지 커뮤니티</h3>
                            <p className="text-lg mb-4">게임 소식과 공략을 확인하고 다른 플레이어들과 소통해보세요</p>
                            <a
                                href="https://cafe.naver.com/hangukji"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white text-lg bg-[#00c73c] cursor-pointer space-x-2"
                            >
                                <Image src="/image/naver_cafe.png" alt="네이버카페 로고" width={24} height={24} />
                                <span>한국지 네이버 카페 방문하기</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 찾아오시는 길 */}
            <section className="py-20 bg-emerald-700/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            찾아오시는 길
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-300 rounded-full mx-auto"></div>
                    </div>

                    <div className="text-center mb-12">
                        <p className="text-xl font-semibold mb-4">부산광역시 강서구 명지오션시티9로 50, 103호</p>
                        <p className="text-gray-600 mt-2">방문 전 사전 연락 부탁드립니다</p>
                    </div>

                    {/* 지도 영역 */}
                    <div>
                        <Map />
                    </div>
                </div>
            </section>
        </main>
    )
}