import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f7] text-[#333333]">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    <div>
                        <h2 className="text-[21px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                            도약민
                        </h2>
                        <p className="mt-3 max-w-md text-[17px] leading-[1.47] tracking-[-0.01em]">
                            GAMES MAKETH THE WORLD ANEW
                        </p>
                        <div className="mt-6 space-y-2 text-[12px] leading-[1.5] tracking-[-0.01em] text-[#7a7a7a]">
                            <p>주식회사 도약민</p>
                            <p>대표이사: 정민영</p>
                            <p>사업자등록번호: 529-81-03507</p>
                            <p>통신판매업신고번호: 2025-부산강서구-0420</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                            바로가기
                        </h3>
                        <div className="mt-3 flex flex-col gap-2 text-[14px] leading-[1.5] tracking-[-0.01em]">
                            <Link href="/games" className="hover:text-[#0066cc]">게임</Link>
                            <Link href="/team" className="hover:text-[#0066cc]">회사</Link>
                            <Link href="/news" className="hover:text-[#0066cc]">소식</Link>
                            <Link href="/contact" className="hover:text-[#0066cc]">문의</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                            연락처
                        </h3>
                        <div className="mt-3 space-y-2 text-[14px] leading-[1.5] tracking-[-0.01em]">
                            <p>jmy@doyakmin.com</p>
                            <p>0507-1341-5455</p>
                            <p>부산광역시 강서구 명지오션시티9로 50, 103호</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-[#e0e0e0] pt-6 text-[12px] tracking-[-0.01em] text-[#7a7a7a] sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} (주)도약민. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <a href="/policy/operation" className="hover:text-[#0066cc]">
                            운영정책
                        </a>
                        <Link href="/news/privacy-policy" className="hover:text-[#0066cc]">
                            개인정보처리방침
                        </Link>
                        <Link href="/news/terms-of-service" className="hover:text-[#0066cc]">
                            이용약관
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
