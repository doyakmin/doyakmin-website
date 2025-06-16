import PrivacyModalTrigger from "@/components/privacy_modal_trigger";
import TermsModalTrigger from "@/components/temrs_modal_trigger";

export default function Footer() {
    return (
        <footer className="bg-gray-800 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">도약민</h3>
                        <p className="text-xl text-emerald-400 mb-4 font-medium">
                            &#34;GAMES MAKETH THE WORLD ANEW&#34;
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            더 나은 도약을 위한 선택<br />
                            게임을 통해 세상을 새롭게 만들어갑니다.
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                            <p>주식회사 도약민</p>
                            <p>대표이사: 정민영</p>
                            <p>사업자등록번호: 529-81-03507</p>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-white font-semibold mb-4">연락처</h4>
                        <div className="space-y-2 text-gray-400 text-sm mb-6">
                            <p>이메일: doyakmin@gmail.com</p>
                            <p>전화: 0507-1341-5455</p>
                            <p>주소: 부산광역시 강서구 명지오션시티9로 50, 103호</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 주식회사 도약민. All rights reserved.
                    </p>
                    <div className="flex space-x-8 mt-4 sm:mt-0">
                        <a
                            href="https://cafe.naver.com/hangukji/5?tc=shared_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-300 text-sm transition-colors cursor-pointer underline-offset-4 hover:underline"
                        >
                            운영정책
                        </a>
                        <PrivacyModalTrigger />
                        <TermsModalTrigger />
                    </div>
                </div>
            </div>
        </footer>
    )
}