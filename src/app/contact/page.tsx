import Image from 'next/image'
import Map from '@/components/map'
import GoogleSheetContactForm from '@/components/google_sheet_contact_form'

export default function ContactPage() {
    return (
        <main className="bg-[#f4f7fb] text-[#111827]">
            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                        <p className="game-eyebrow">Contact</p>
                        <h1 className="game-title mt-5">함께 더 큰 게임판을 만들까요?</h1>
                        <p className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-white/78">
                            제휴, 협업, 앱 문의를 남겨주시면 도약민 팀이 확인 후 안내드립니다.
                        </p>
                    </div>

                    <div className="game-card bg-white p-6 text-[#111827]">
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0c7a90]">Community</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tighter">한국지 네이버 카페</h2>
                        <p className="mt-3 text-base font-bold leading-relaxed text-[#526071]">
                            게임 소식과 공략을 확인하고 다른 플레이어들과 소통해보세요.
                        </p>
                        <a
                            href="https://cafe.naver.com/hangukji"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="game-button mt-6"
                        >
                            <Image src="/image/naver_cafe.png" alt="네이버카페 로고" width={22} height={22} />
                            <span className="ml-2">카페 방문하기</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="game-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                        <p className="game-eyebrow text-[#0c7a90]">Message</p>
                        <h2 className="game-heading mt-4">문의 접수</h2>
                        <div className="mt-8 space-y-4 text-lg font-bold leading-relaxed text-[#526071]">
                            <p>이메일: jmy@doyakmin.com</p>
                            <p>전화: 0507-1341-5455</p>
                            <p>주소: 부산광역시 강서구 명지오션시티9로 50, 103호</p>
                        </div>
                    </div>

                    <div className="game-card p-6 md:p-8">
                        <GoogleSheetContactForm service="website-contact" />
                    </div>
                </div>
            </section>

            <section className="bg-[#b7ff2a] py-20">
                <div className="game-container">
                    <h2 className="game-heading">찾아오시는 길</h2>
                    <p className="mt-4 text-lg font-bold text-[#111827]/72">방문 전 사전 연락 부탁드립니다.</p>
                    <div className="game-card mt-8 overflow-hidden p-3">
                        <Map />
                    </div>
                </div>
            </section>
        </main>
    )
}
