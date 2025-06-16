'use client'

import { useEffect } from 'react'

interface PrivacyModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEsc)
            // 모달이 열릴 때 body 스크롤 방지
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose}></div>

            {/* 모달 컨텐츠 */}
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] flex flex-col">
                {/* 모달 헤더 */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">개인정보처리방침</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* 모달 바디 (스크롤 가능) */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="text-gray-800 space-y-6 leading-relaxed">
                        <p>
                            주식회사 도약민 (이하 &#34;회사&#34;)는 회사의 서비스를 이용하시는 고객님(이하 &#34;이용자&#34;)의 소중한 개인정보를 보호하기 위하여 「개인정보 보호법」 등 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.
                        </p>

                        <p>
                            회사는 개인정보처리방침을 통하여 이용자께서 제공하는 개인정보가 어떠한 목적으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치를 하는지 알려드립니다.
                        </p>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">본 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.</h3>
                            <ol className="list-decimal list-inside space-y-1 text-sm">
                                <li>수집하는 개인정보의 항목</li>
                                <li>개인정보의 수집 및 이용목적</li>
                                <li>개인정보의 처리 및 보유기간</li>
                                <li>개인정보 제공 (처리위탁, 제3자 제공, 국외이전)</li>
                                <li>개인정보의 파기절차 및 방법</li>
                                <li>이용자의 권리·의무 및 그 행사방법</li>
                                <li>개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항</li>
                                <li>개인정보의 안정성 확보 조치</li>
                                <li>개인정보 보호책임자 안내</li>
                                <li>기타 부가방침</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. 수집하는 개인정보의 항목</h3>
                            <p className="mb-2">* 회사는 서비스 제공에 필요한 최소한의 개인정보를 수집하고 있습니다.</p>

                            <div className="mb-4">
                                <h4 className="font-medium text-gray-900 mb-2">(1) 게임</h4>
                                <div className="ml-4 space-y-3">
                                    <div>
                                        <p className="font-medium">- 필수항목</p>
                                        <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                            <li>닉네임</li>
                                            <li>Google : 이용 계정 식별 번호</li>
                                            <li>Apple : 이용 계정 식별 번호</li>
                                            <li>게스트 : 이용 계정 식별 번호</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-medium">- 서비스 이용과정에서 자동으로 생성되어 수집되는 항목</p>
                                        <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                            <li>PID, UUID, 서비스이용기록(날짜, 시간), 위치</li>
                                            <li>이용자의 서비스 이용 기록 및 관련 로그파일(타임스탬프, 채팅 로그(이용자간 주고받은 채팅 메시지의 텍스트, 이미지, 동영상, 음성 등의 콘텐츠 및 해당 채팅의 상대방, 데이터 송수신의 시점, 형태, 방식정보를 포함함)를 포함하여 게임 서비스 내 활동 및 교류 등)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-medium">- 개인정보는 아니지만 서비스 이용과정에서 자동으로 생성되어 수집되는 항목</p>
                                        <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                            <li>광고식별자, 기기 정보(OS 버전, APP 버전, 언어 및 국가)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-medium">- 수집방법</p>
                                        <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                            <li>회사는 이용자의 모바일 앱 설치 및 서비스 이용 과정에서 이용자의 개인정보를 수집합니다.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-medium">- 동의를 거부할 권리 및 동의 거부에 따른 불이익</p>
                                        <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                            <li>이용자는 수집항목에 대한 동의를 거부할 권리가 있습니다.</li>
                                            <li>이용자가 선택항목에 대한 동의를 거부하여도 서비스 이용을 제한하지 않습니다.</li>
                                            <li>다만, 필수항목에 대한 동의를 거부할 경우 서비스를 제공받을 수 없습니다.</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-sm mt-2">* 위 항목에는 개인정보와 비개인정보가 모두 포함될 수 있습니다.</p>
                            </div>

                            <div className="mb-4">
                                <h4 className="font-medium text-gray-900 mb-2">(2) 고객센터 문의하기</h4>
                                <div className="ml-4 space-y-2">
                                    <p>- 필수항목 : 이메일 주소</p>
                                    <p>- 선택항목 : 이름</p>

                                    <div>
                                        <p className="font-medium">- 수집방법</p>
                                        <ul className="ml-4 list-disc list-inside text-sm">
                                            <li>회사는 이용자의 서비스 이용 과정에서 이용자의 개인정보를 수집합니다.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-medium">- 동의를 거부할 권리 및 동의 거부에 따른 불이익</p>
                                        <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                            <li>이용자는 수집항목에 대한 동의를 거부할 권리가 있습니다.</li>
                                            <li>이용자가 선택항목에 대한 동의를 거부하여도 서비스 이용을 제한하지 않습니다.</li>
                                            <li>다만, 필수항목에 대한 동의를 거부할 경우 서비스를 제공받을 수 없습니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. 개인정보의 수집 및 이용목적</h3>
                            <p className="mb-2">회사는 이용자의 개인정보를 다음의 목적을 위해 활용합니다.</p>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                <li>회사가 제공하는 서비스를 위한 본인 식별 및 본인 여부 확인</li>
                                <li>SNS 간 크로스 플랫폼 계정 연동</li>
                                <li>문의 접수 시 불만처리 등 민원처리 및 처리결과 고지</li>
                                <li>부정 이용 확인 및 방지</li>
                                <li>회사의 운영 분석 및 이용자의 경험 개선</li>
                                <li>서비스 내에서 다른 이용자에 대한 콘텐츠 전송, 법률 및 이용약관 위반 여부에 관한 모니터링</li>
                                <li>기타 회사와 이용자 사이의 관계 관리 및 서비스 약관에 따른 회사의 서비스 제공</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. 개인정보의 처리 및 보유기간</h3>
                            <p className="mb-2">회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 이유로 일정 기간 동안 해당 정보를 보유할 수도 있습니다.</p>

                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium">- 회사 정책에 따른 정보 보유</p>
                                    <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                        <li>1항의 수집항목 : 이용자의 서비스 탈퇴시까지 (단, 이용자의 서비스 이용 기록 및 관련 로그파일의 경우, 탈퇴일로부터 최대 1개월까지 보관)</li>
                                        <li>부정행위자 정보 : 부정행위별 제재조치 만료일까지</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium">- 관계법령 규정에 의하여 수집 및 이용목적 달성 후에도 보존할 필요가 있는 경우 회사는 다음과 같이 관계법령에서 정한 일정한 기간 동안 이용자의 정보를 보관합니다.</p>
                                    <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                        <li>표시 · 광고에 관한 기록 : 6개월 (전자상거래법)</li>
                                        <li>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래법)</li>
                                        <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래법)</li>
                                        <li>매출 성립 및 취소, 환불 등 전자장부 거래 기록 : 5년 (국세기본법)</li>
                                        <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래법)</li>
                                        <li>서비스 이용기록 : 3개월 (통신비밀보호법)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. 개인정보의 제공</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">(1) 개인정보 처리위탁</h4>
                                    <p className="text-sm">회사는 이용자에게 제공하는 서비스의 안전한 운영과 품질의 향상을 위하여 다음과 같이 개인정보의 처리를 위탁하고 있으며, 업무 위탁계약 시 개인정보의 안전한 관리를 위하여 개인정보 보호 협정서를 체결하고 있습니다.</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">(2) 개인정보 제3자 제공</h4>
                                    <p className="text-sm mb-2">회사는 이용자의 개인정보를 동의 받은 목적과 다른 용도로 이용하거나, 제3자에게 제공하지 않습니다. 단, 아래 사항에 대해서는 이용자의 동의없이 목적 외로 이용하거나, 제3자에게 제공할 수 있습니다.</p>
                                    <ul className="ml-4 list-none text-sm space-y-1">
                                        <li>① 이용자로부터 별도의 동의를 받은 경우</li>
                                        <li>② 관계 법령의 특별한 규정에 근거한 경우 및 법원 및 수사기관 등이 법령에 정해진 절차와 방법에 따라 개인정보의 제공을 요청한 경우</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">(3) 개인정보 국외이전</h4>
                                    <p className="text-sm mb-3">회사는 서비스의 원활한 제공을 위하여 다음과 같이 국외에 개인정보의 처리를 위탁하고 있으며, 그 이외의 이용자의 개인정보를 국외로 이전하고 있지 않습니다. 다만, 서비스 과정에서 안전한 개인정보의 처리를 위하여 개인정보 항목을 국외로 이전할 수 있으며, 이러한 경우 이용자에게 사전 안내 후 별도 동의를 받고 있습니다.</p>

                                    <div className="space-y-3 text-sm">
                                        <div className="border border-gray-200 p-3 rounded">
                                            <p><span className="font-medium">개인정보를 이전받는 자 :</span></p>
                                            <p><span className="font-medium">정보관리책임자의 연락처 :</span></p>
                                            <p><span className="font-medium">이전되는 개인정보 항목 :</span> PID, UUID, 서비스이용기록(날짜, 시간), 위치(대략적인)</p>
                                            <p><span className="font-medium">개인정보가 이전되는 국가 :</span></p>
                                            <p><span className="font-medium">이전일시 및 이전방법 :</span> 데이터 업데이트 때마다 네트워크를 통해서 전송</p>
                                            <p><span className="font-medium">이용목적 :</span> 고객문의 대응 및 관리</p>
                                            <p><span className="font-medium">보유 및 이용 기간 :</span> 회원탈퇴시까지</p>
                                        </div>

                                        <div className="border border-gray-200 p-3 rounded">
                                            <p><span className="font-medium">개인정보를 이전받는 자 :</span> Google Inc. (Firebase)</p>
                                            <p><span className="font-medium">정보관리책임자의 연락처 :</span> 02-2109-2500(회사 담당 한국 MSP)</p>
                                            <p><span className="font-medium">이전되는 개인정보 항목 :</span> PID, UUID, 서비스이용기록(날짜, 시간), 위치(대략적인)</p>
                                            <p><span className="font-medium">개인정보가 이전되는 국가 :</span> 미국</p>
                                            <p><span className="font-medium">이전일시 및 이전방법 :</span> 데이터 업데이트 때마다 네트워크를 통해서 전송</p>
                                            <p><span className="font-medium">이용목적 :</span> 클라우드 서버 운영 및 관리</p>
                                            <p><span className="font-medium">보유 및 이용 기간 :</span> 회원탈퇴시까지</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. 개인정보의 파기절차 및 방법</h3>
                            <p className="mb-2">개인정보 파기절차 및 방법은 다음과 같습니다.</p>
                            <div className="space-y-2">
                                <p><span className="font-medium">- 파기절차</span> : 이용자의 개인정보는 수집 이용 목적이 달성된 후 지체없이 파기합니다. 만약 3항에 따라 별도의 보유기간에 대해 동의 받았거나 관계법령에 의해 보관이 필요한 경우, 동의 받은 보유 및 이용기간에 따라 일정 기간 저장된 후 파기됩니다.</p>
                                <p><span className="font-medium">- 파기방법</span> : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이, CD 등에 기록된 개인정보는 분쇄나 소각을 통한 물리적 방법을 사용합니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">6. 이용자의 권리·의무 및 그 행사방법</h3>
                            <div className="text-sm space-y-2">
                                <p>- 이용자는 개인정보 처리를 스스로 결정하는 정보주체로, 자신의 개인정보를 언제든지 열람하거나 정정, 삭제하도록 요구할 수 있습니다. 이를 위하여 개인정보 보호책임자에게 전화 또는 이메일로 연락하시면 본인 확인 절차를 거친 후 지체없이 조치하겠습니다.</p>
                                <p>- 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
                                <p>- 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 &#39;3. 개인정보의 처리 및 보유기간&#39;에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">7. 개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">(1) 광고 식별자 사용</h4>
                                    <p className="text-sm mb-2">회사는 이용자들에게 적합하고 보다 유용한 서비스와 광고 서비스(맞춤형 광고 포함)를 제공하기 위해서 이용자의 광고 식별자를 사용하고 있습니다.</p>

                                    <p className="text-sm mb-3">광고 식별자는 이용자가 소유한 스마트폰 및 태블릿 PC의 OS 설정에서 광고에 관한 기능을 활성화한 경우 자동으로 수집되며, 기기의 설정을 변경하거나 광고 플랫폼 사업자의 Opt-Out 기능을 활용함으로써 광고 식별자가 관심 사항에 기반하는 광고에 사용되지 못하도록 거부할 수 있습니다.</p>

                                    <p className="text-sm mb-3">Opt-Out 기능을 설정하더라도 일방형 광고는 전송될 수 있습니다.</p>

                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-medium text-sm">① 마케팅 분석툴 / 광고 플랫폼 사업자</p>
                                            <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                                <li>마케팅 분석툴 : AppsFlyer</li>
                                                <li>광고 플랫폼 사업자 : Unity Ads, Google AdMob, Facebook, MoPub, Vungle, AppLovin, Adcolony, Twitter, Tiktok</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-medium text-sm">② 마케팅 정보 수신 차단</p>
                                            <ul className="ml-4 list-disc list-inside text-sm">
                                                <li>Android : [설정→Google{'>'}개인정보 보호{'>'}마케팅 정보 수신] 선택 해제</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-medium text-sm">③ 개인 맞춤형 광고 차단</p>
                                            <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                                <li>Android : [설정→Google{'>'}광고] 또는 [설정→Google{'>'}개인정보 보호{'>'}광고] 에서 &#39;광고 개인 최적화 선택 해제&#39; 선택</li>
                                                <li>iOS : [설정→개인정보 보호→Apple 광고]에서 &#39;맞춤형 광고&#39; 선택 해제</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-medium text-sm">④ 마케팅 분석툴 / 광고 플랫폼 사업자 Opt-Out 기능 활용</p>
                                            <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                                <li>AppsFlyer : <a href="https://www.appsflyer.com/optout" className="text-blue-600 hover:underline ">https://www.appsflyer.com/optout</a></li>
                                                <li>Unity Ads : <a href="https://unity3d.com/legal/privacy-policy" className="text-blue-600 hover:underline ">https://unity3d.com/legal/privacy-policy</a></li>
                                                <li>Google AdMob : <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ">https://policies.google.com/privacy</a></li>
                                                <li>Facebook : <a href="https://www.facebook.com/policies/cookies/" className="text-blue-600 hover:underline ">https://www.facebook.com/policies/cookies/</a></li>
                                                <li>Vungle : <a href="https://vungle.com/privacy/#section-3-3" className="text-blue-600 hover:underline ">https://vungle.com/privacy/#section-3-3</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">(2) 분석 소프트웨어</h4>
                                    <p className="text-sm mb-2">분석 소프트웨어는 이용자가 웹 사이트를 방문하거나 모바일 서비스를 이용할 때 자동으로 생성되는 정보를 분석하기 위해 사용되며, 이용자는 이를 거부할 수 있습니다.</p>

                                    <ul className="ml-4 list-disc list-inside text-sm space-y-1">
                                        <li>Android : [설정→인터넷 설정{'>'}개인정보 보호 및 보안] 에서 &#39;스마트 추적 방지&#39; 또는&#39;사이트에서 추적하지 못하도록 요청&#39; 선택</li>
                                        <li>iOS : [설정→개인정보 보호→ 추적]에서 &#39;앱이 추척을 요청하도록 허용&#39; 선택 해제</li>
                                        <li>Internet Explorer : 웹브라우저 상단 &#39;도구&#39; 메뉴 {'>'} &#39;안전&#39; 메뉴 {'>'} &#39;Do Not Track 요청 켜기&#39; 선택</li>
                                        <li>Chrome : [설정{'>'}개인정보 및 보안{'>'}쿠키 및 기타 사이트 데이터{'>'}일반 설정]에서 탐색 트래픽과 함께 &apos;추적 안함&apos; 요청 선택</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">8. 개인정보의 안정성 확보 조치</h3>
                            <p className="mb-3">회사는 개인정보의 안정성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">(1) 관리적 조치</h4>
                                    <div className="ml-4 space-y-2">
                                        <div>
                                            <p className="font-medium text-sm">- 내부관리계획 수립 및 이행</p>
                                            <p className="text-sm ml-4">개인정보 보호책임자의 지정 등 개인정보 보호 조직의 구성 및 운영에 관한 사항 등을 포함하여 개인정보 내부관리계획을 수립하고, 매 년 내부관리계획을 잘 시행하고 있는지를 점검하고 있습니다.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">- 정기적 직원 교육</p>
                                            <p className="text-sm ml-4">개인정보를 취급하는 직원은 필요한 인원에 한하여 최소한으로 지정, 관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을 실시하고 있습니다.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">(2) 기술적 조치</h4>
                                    <div className="ml-4 space-y-2">
                                        <div>
                                            <p className="font-medium text-sm">- 개인정보처리시스템 등의 접근권한 관리</p>
                                            <p className="text-sm ml-4">개인정보를 처리하는 데이터베이스시스템에 대한 적절한 접근권한 관리를 통하여 개인정보에 대한 접근통제를 하고 있으며, 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">- 보안프로그램 설치</p>
                                            <p className="text-sm ml-4">회사는 해킹이나 컴퓨터 바이러스 등에 대한 개인정보 유출 및 훼손을 막기 위하여 보안 프로그램을 설치하고 주기적인 갱심, 점검을 통해 기술적으로 차단하고 있습니다.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">(3) 물리적 조치</h4>
                                    <div className="ml-4">
                                        <div>
                                            <p className="font-medium text-sm">- 문서보안을 위한 잠금장치 사용</p>
                                            <p className="text-sm ml-4">개인정보가 포함된 서류, USB 등을 잠금장치가 있는 장소에 보관하고 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">9. 개인정보 보호책임자 안내</h3>
                            <p className="text-sm mb-3">회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>

                            <div className="space-y-2 text-sm mb-4">
                                <p className="font-medium">- 개인정보 보호책임자</p>
                                <div className="ml-4 space-y-1">
                                    <p><span className="font-medium">이름</span> : 정민영</p>
                                    <p><span className="font-medium">소속</span> : 정보보안실</p>
                                    <p><span className="font-medium">이메일</span> : doyakmin@gmail.com</p>
                                </div>
                            </div>

                            <p className="text-sm mb-3">이용자는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보 보호책임자에게 신고할 수 있습니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래기관에 문의하시기 바랍니다.</p>

                            <div className="text-sm space-y-1">
                                <p>- 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</p>
                                <p>- 개인정보분쟁조정위원회 : 1833-6972 (<a href="http://www.kopico.go.kr" className="text-blue-600 hover:underline ">www.kopico.go.kr</a>)</p>
                                <p>- 대검찰청 사이버수사과 : (국번없이) 1301 (cybercid.spo.go.kr)</p>
                                <p>- 경찰청 사이버안전지킴이 : (국번없이) 182 (<a href="http://www.police.go.kr/www/security/cyber.jsp" className="text-blue-600 hover:underline ">www.police.go.kr/www/security/cyber.jsp</a>)</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">10. 기타 부가방침</h3>
                            <p className="text-sm">현 내용에 대한 변경이 있을 경우에는 시행하는 날로부터 최소 7일전에 홈페이지 게시판 또는 게임 내 공지 기능을 통해 이용자에게 설명 드리겠습니다. 다만 이용자의 소중한 권리 또는 의무에 중요한 내용 변경은 최소 30일 전에 알려 드리겠습니다.</p>
                        </div>

                        <div className="pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
                            <p>개인정보처리방침 버전번호 : 2025. 4. 1</p>
                            <p>개인정보처리방침 시행일자 : 2025. 4. 1</p>
                            <p className="mt-2">doyakmin Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}