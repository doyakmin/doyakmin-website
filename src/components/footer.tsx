import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="border-t-2 border-[#111827] bg-[#07111f] text-white">
            <div className="game-container py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    <div>
                        <p className="game-eyebrow">Doyakmin</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tighter">Games Maketh The World Anew</h2>
                        <div className="mt-6 space-y-2 text-sm font-semibold leading-relaxed text-white/58">
                            <p>주식회사 도약민</p>
                            <p>대표이사: 정민영</p>
                            <p>사업자등록번호: 529-81-03507</p>
                            <p>통신판매업신고번호: 2025-부산강서구-0420</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-[#b7ff2a]">바로가기</h3>
                        <div className="mt-4 flex flex-col gap-3 text-sm font-bold text-white/72">
                            <Link href="/games" className="hover:text-[#b7ff2a]">게임</Link>
                            <Link href="/team" className="hover:text-[#b7ff2a]">회사</Link>
                            <Link href="/news" className="hover:text-[#b7ff2a]">소식</Link>
                            <Link href="/contact" className="hover:text-[#b7ff2a]">문의</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-[#b7ff2a]">연락처</h3>
                        <div className="mt-4 space-y-3 text-sm font-semibold leading-relaxed text-white/72">
                            <p>jmy@doyakmin.com</p>
                            <p>0507-1341-5455</p>
                            <p>부산광역시 강서구 명지오션시티9로 50, 103호</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs font-semibold text-white/48 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} (주)도약민. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <a href="/policy/operation" className="hover:text-[#b7ff2a]">운영정책</a>
                        <Link href="/news/privacy-policy" className="hover:text-[#b7ff2a]">개인정보처리방침</Link>
                        <Link href="/news/terms-of-service" className="hover:text-[#b7ff2a]">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
