import Link from 'next/link'
import TranslatedText from './translated_text'

export default function Footer() {
    return (
        <footer className="border-t-2 border-[#111827] bg-[#07111f] text-white">
            <div className="game-container py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    <div>
                        <p className="game-eyebrow">Doyakmin</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tighter">Games Maketh The World Anew</h2>
                        <div className="mt-6 space-y-2 text-sm font-semibold leading-relaxed text-white/58">
                            <p><TranslatedText ko="주식회사 도약민" en="Doyakmin Inc." /></p>
                            <p><TranslatedText ko="대표이사: 정민영" en="CEO: Minyoung Jung" /></p>
                            <p><TranslatedText ko="사업자등록번호: 529-81-03507" en="Business Registration No. 529-81-03507" /></p>
                            <p><TranslatedText ko="통신판매업신고번호: 2025-부산강서구-0420" en="E-commerce Registration No. 2025-Busan Gangseo-0420" /></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-[#b7ff2a]"><TranslatedText ko="바로가기" en="Links" /></h3>
                        <div className="mt-4 flex flex-col gap-3 text-sm font-bold text-white/72">
                            <Link href="/games" className="hover:text-[#b7ff2a]"><TranslatedText ko="게임" en="Games" /></Link>
                            <Link href="/team" className="hover:text-[#b7ff2a]"><TranslatedText ko="회사" en="Studio" /></Link>
                            <Link href="/news" className="hover:text-[#b7ff2a]"><TranslatedText ko="소식" en="News" /></Link>
                            <Link href="/contact" className="hover:text-[#b7ff2a]"><TranslatedText ko="문의" en="Contact" /></Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-black text-[#b7ff2a]"><TranslatedText ko="연락처" en="Contact" /></h3>
                        <div className="mt-4 space-y-3 text-sm font-semibold leading-relaxed text-white/72">
                            <p>jmy@doyakmin.com</p>
                            <p>0507-1341-5455</p>
                            <p><TranslatedText ko="부산광역시 강서구 명지오션시티9로 50, 103호" en="103, 50 Myeongji Ocean City 9-ro, Gangseo-gu, Busan, Korea" /></p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs font-semibold text-white/48 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} (주)도약민. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <a href="/policy/operation" className="hover:text-[#b7ff2a]"><TranslatedText ko="운영정책" en="Operation Policy" /></a>
                        <Link href="/news/privacy-policy" className="hover:text-[#b7ff2a]"><TranslatedText ko="개인정보처리방침" en="Privacy Policy" /></Link>
                        <Link href="/news/terms-of-service" className="hover:text-[#b7ff2a]"><TranslatedText ko="이용약관" en="Terms" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
