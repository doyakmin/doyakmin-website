'use client'

import { useEffect } from 'react'

interface TermsModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
                    <h2 className="text-2xl font-bold text-gray-900">이용약관</h2>
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
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제1조. 목적</h3>
                            <p>
                                이 약관은 주식회사 도약민 (이하 &quot;회사&quot;)가 제공하는 &quot;게임 서비스&quot; 이용과 관련하여 &quot;회사&quot;와 &quot;회원&quot;과의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제2조. 정의</h3>
                            <div className="space-y-3">
                                <p>1. &quot;게임 서비스&quot;라 함은 &quot;회사&quot;가 제 3자의 &quot;플랫폼&quot;을 통해 배포하는 게임 및 기타 &quot;회사&quot;가 제공하는 일체의 제반 서비스를 의미합니다.</p>
                                <p>2. &quot;회원&quot;이란 &quot;게임 서비스&quot;에 접속하여 이 약관에 따라 &quot;회사&quot;와 이용계약을 체결하고, &quot;회사&quot;가 제공하는 &quot;게임 서비스&quot;를 이용하는 고객을 의미합니다.</p>
                                <p>3. &quot;계정정보&quot;란 &quot; 회원&quot;의 &quot;회원번호&quot;와 외부 계정정보, 기기정보, 별명, 프로필 사진, 친구목록 등 &quot;회원&quot;이 &quot;회사&quot;에 제공한 정보와 게임이용정보 (캐릭터 정보, 아이템, 레벨 등), 이용요금 결제 정보 등의 생성정보를 통칭합니다.</p>
                                <p>4. &quot;회원번호&quot;란 &quot;회사&quot;가 &quot;회원&quot;이 이용하는 게임 혹은 &quot;스마트기기&quot; 별로 임의적으로 부여하는 고유의 식별 정보를 의미합니다.</p>
                                <p>5. &quot;스마트기기&quot;란 &quot;회원&quot;이 &quot;게임 서비스&quot;를 이용할 수 있는 단말기 등(PC, 휴대폰, 태블릿, 게임기, 휴대용 멀티미디어 기기 등을 포함하여 향수 기술발전으로 출시되는 새로운 형태의 기기 또한 포함한다.)을 의미합니다.</p>
                                <p>6. &quot;사이버 포인트&quot;란 &quot;게임 서비스&quot;의 효율적 이용을 위해 &quot;회사&quot;가 임의로 책정, 지급, 조정, 회수 할 수 있는 재산적 가치가 없는 서비스 상의 가상 데이터를 의미합니다.</p>
                                <p>7. &quot;유료서비스&quot;란 &quot;회사&quot;가 &quot;회원&quot;에게 &quot;게임 서비스&quot; 이용의 대가로 요금을 과금하거나, 아이템이나 게임머니 등 유ㆍ무형의 상품을 판매하는 것을 의미합니다.</p>
                                <p>8. &quot;계정연결&quot;이란 &quot;회원번호&quot; 대신 &quot;회원&quot;이 입력한 외부 계정(한게임 등)의 아이디를 &quot;계정정보&quot; 저장 값으로 이용하는 것을 의미합니다.</p>
                                <p>9. &quot;정보저장게임&quot;이란 게임 진행 중 정보통신망을 통한 계속적 통신이 이루어지는 네트워크 기반 게임물로 해당 게임정보가 회사의 서버에 저장되는 게임을 의미합니다.</p>
                                <p>10. &quot;제휴 서비스&quot;란 &quot;회사&quot;가 카카오톡, 라인 등과 같은 메신저 서비스와 제휴 계약을 체결하여 &quot;회원&quot;이 제휴된 메신저 서비스에의 가입을 통해서도 게임을 이용할 수 있도록 하는 것을 의미합니다.</p>
                                <p>11. &quot;플랫폼&quot;이란 &quot;회원&quot;이 &quot;스마트기기&quot;에서 어플리케이션 다운로드 내지는 프로그램 설치 등을 통해 게임을 이용할 수 있는 기능을 제공하는 제반 프로그램과 서비스(구글 Play스토어, App Store, STEAM, EPIC GAMES STORE 등을 포함하나 이에 한정하지 않음)를 의미합니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제3조. 약관의 게시와 개정</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 이 약관의 내용을 &quot;회원&quot;이 쉽게 알 수 있도록 &quot;게임 서비스&quot; 내에 게시합니다.</p>
                                <p>2. &quot;회사&quot;는 &apos;약관의 규제에 관한 법률&apos;, &apos;정보통신망 이용촉진 및 정보보호 등에 관한 법률&apos; 등 관계법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                                <p>3. &quot;회사&quot;가 이 약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을 명시하여 그 적용일자로 부터 최소한 7일 이전(회원에게 불리하거나 중대한 사항의 변경은 30일 이전)부터 그 적용일자 경과 후 상당기간이 경과할 때까 지 &quot;게임 서비스&quot; 초기화면과의 연결화면 또는 전자우편, 쪽지, 로그인 시 동의 창 등 가능한 전자적 수단을 통해 공지합니다.</p>
                                <p>4. &quot;회사&quot;가 전항에 따라 개정 약관을 공지 또는 통지하면서 &quot;회원&quot;에게 적용일 전까지 동의 또는 거부의 의사표시를 하지 않으면 변경에 동의한 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도 &quot;회원&quot;이 명시적으로 거부의 의사표시를 하지 아니한 경우, &quot;회원&quot;이 개정약관에 동의한 것으로 봅니다.</p>
                                <p>5. &quot;회원&quot;이 개정 약관의 적용에 동의하지 않으면 &quot;회사&quot;는 해당 &quot;회원&quot;에 대해 개정 약관의 내용을 적용할 수 없으며, 이 경우 &quot;회사&quot; 또는 &quot;회원&quot;은 이용계약을 해지할 수 있습니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제4조. 이용계약의 체결 및 적용</h3>
                            <div className="space-y-3">
                                <p>1. 이용계약은 &quot;회원&quot;이 되고자 하는 이용자(이하 &quot;가입신청자&quot;)가 이 약관의 내용에 대하여 동의를 한 다음 &quot;게임 서비스&quot; 이용 신청을 하고, &quot;회사&quot;가 이러한 신청에 대해서 승낙함으로써 체결됩니다.</p>
                                <p>2. &quot;회사&quot;는 &quot;가입신청자&quot;의 신청에 대하여 &quot;게임 서비스&quot; 이용을 승낙함을 원칙으로 합니다. 다만, &quot;회사&quot;는 다음 각호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을 하지 않거나, 사후에 이용계약을 취소할 수 있습니다.</p>
                                <div className="ml-4 space-y-2">
                                    <p>① 제3자의 &quot;스마트기기&quot;, 유ㆍ무선전화, 은행계좌 등을 무단으로 이용 또는 도용하여 서비스 이용요금을 결제한 경우</p>
                                    <p>② &apos;게임산업진흥에 관한 법률&apos;, &apos;정보통신망 이용촉진 및 정보보호 등에 관한 법률&apos; 및 그 밖에 관계 법령에서 금지하는 위법행위를 할 목적으로 이용신청을 하는 경우</p>
                                    <p>③ &quot;회사&quot;에서 개발사와의 계약, 관계법령 및 회사에서 정한 정책적 이유로 &quot;게임 서비스&quot;를 제공하지 않는 국가에서 비정상적이거나 우회적인 방법을 통해 &quot;게임 서비스&quot;를 이용하는 경우</p>
                                    <p>④ 연령제한 게임에서 제공가능연령 미달자가 이용신청을 하는 경우</p>
                                    <p>⑤ 그밖에 제1호 내지 제3호에 준하는 사유나 관계법령, 정부 정책 상 승낙이 부적절하다고 판단되는 경우</p>
                                </div>
                                <p>3. 미성년자는 관계법령에 의하여 법정대리인의 동의를 받아 이용신청을 할 경우가 발생할 수 있습니다.</p>
                                <p>4. &quot;회사&quot;는 다음 각호의 어느 하나에 해당하는 경우 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.</p>
                                <div className="ml-4 space-y-2">
                                    <p>① &quot;회사&quot;의 설비에 여유가 없거나, 특정 &quot;스마트기기&quot; 지원이 어렵거나, 기술적 장애가 있는 경우</p>
                                    <p>② &quot;게임 서비스&quot; 상의 장애 또는 서비스 이용요금, 결제수단의 장애가 발생한 경우</p>
                                    <p>③ 그 밖의 사유로 이용신청의 승낙이 곤란한 경우</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제5조. 개인정보 등 정보보호</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 &quot;게임 서비스&quot;에 가입한 &quot;회원&quot;을 식별하기 위하여 스마트기기 정보를 수집할 수 있습니다. 단, &quot;회사&quot;에서 수집하는 스마트기기 정보는 수집 시점에서 즉시 일방향 암호화(해시)되어 본래 고유의 값을 확인 불가능한 형태로 저장됩니다.</p>
                                <p>2. &quot;회원&quot;의 상태정보, 별명, 사진은 &quot;회원&quot;이 다른 &quot;회원&quot;과의 소통과정에서 자신을 설명하기 위해 등록하는 정보로써, &quot;게임 서비스&quot;에서 타 &quot;회원&quot;들에게 공개될 수 있습니다.</p>
                                <p>3. &quot;회원&quot;은 &quot;제휴 서비스&quot;를 통하여 &quot;게임 서비스&quot;를 이용하는 경우 &quot;게임 서비스&quot;의 이용기록이 &quot;회원&quot;의 &quot;제휴 서비스&quot; 상의 프로필, 닉네임 등과 함께 제3자에게 노출될 수 있음에 동의합니다. 만약, 제3자에게 관련 정보가 노출되기를 원하지 않는 경우 &quot;게임 서비스&quot; 내 기능을 통해 노출 여부를 설정할 수 있습니다.</p>
                                <p>4. &quot;회원&quot;의 개인정보의 보호 및 사용에 대해서는 관계법령 및 &quot;회사&quot;의 개인정보처리방침이 적용됩니다. 단, &quot;회사&quot;의 공식 사이트 이외의 단순히 링크된 제3자의 사이트 및 서비스에서는 &quot;회사&quot;의 개인정보처리방침이 적용되지 않습니다.</p>
                                <p>5. &quot;회사&quot;는 객관적으로 &quot;계정정보&quot; 도용 피해가 우려되는 경우 또는 회원이 서비스를 1년 이상 이용하지 않은 경우에는 회원정보의 보호 및 운영의 효율성을 위해 임시조치, 이용제한, &quot;계정정보&quot; 삭제 등 필요한 조치를 취할 수 있습니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제6조. 회사의 의무</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 관계법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 &quot;게임 서비스&quot;를 제공하기 위하여 최선을 다하여 노력합니다.</p>
                                <p>2. &quot;회사&quot;는 &quot;회원&quot;이 안전하게 &quot;게임 서비스&quot;를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며, 개인정보처리방침을 공시하고 준수합니다. &quot;회사&quot;는 이 약관 및 개인정보처리방침에서 정한 경우를 제외하고는 &quot;회원&quot;의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.</p>
                                <p>3. &quot;회사&quot;는 &quot;게임 서비스&quot;이용과 관련하여 &quot;회원&quot;으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. &quot;회원&quot;이 제기한 의견이나 불만사항에 대해서는 전자우편 등을 통하여 &quot;회원&quot;에게 처리과정 및 결과를 전달합니다.</p>
                                <p>4. &quot;회사&quot;가 &quot;회원&quot;에 대해 통지 하는 경우 7일 이상 &quot;게임 서비스&quot; 내에 게시하거나 전자우편, 전자메모 등으로 알립니다.</p>
                                <p>5. &quot;회사&quot;는 &quot;게임 서비스&quot; 제공시 &quot;게임 서비스&quot;의 이용에 필요한 최소한의 기술사양에 관한 정보를 제공합니다.</p>
                                <p>6. &quot;회사&quot;는 &apos;게임산업진흥에 관한 법률&apos; 등 관련 법령에 따라 표시할 의무가 있는 확률형 아이템 관련 정보를 게임서비스 내 또는 그 연결화면 등에 표시합니다. 이 경우, 구체적인 표시 방법 등은 관련 법령에서 정하는 바에 따릅니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제7조. 회원의 의무</h3>
                            <div className="space-y-3">
                                <p>1. &quot;스마트기기&quot; 및 &quot;계정정보&quot;에 관한 관리책임은 &quot;회원&quot;에게 있습니다. &quot;회원&quot;이 본인의 &quot;계정정보&quot;를 소홀히 관리하거나, 제3자에게 이용을 승낙함으로써 발생하는 손해에 대하여는 &quot;회원&quot;에게 책임이 있습니다.</p>
                                <p>2. &quot;회원&quot;은 다음의 행위를 하여서는 안됩니다.</p>
                                <div className="ml-4 space-y-2">
                                    <p>① 신청 또는 변경 시 허위내용의 등록</p>
                                    <p>② 타인의 정보 및 결제수단, 외부 계정 도용</p>
                                    <p>③ &quot;회사&quot;가 게시한 정보의 변경</p>
                                    <p>④ 다른 &quot;회원&quot;의 개인정보 및 &quot;계정정보&quot;를 무단 수집하는 행위</p>
                                    <p>⑤ &quot;회사&quot;의 사전 동의 없이 영리 목적의 광고성 정보를 전송하기 위하여 이용하는 행위</p>
                                    <p>⑥ 리버스엔지니어링, 디컴파일, 디스어셈블 및 기타 일체의 가공행위를 통하여 &quot;게임 서비스&quot;를 복제, 분해 또는 모방 기타 변형하는 행위 또는 이를 유출, 공개하는 행위</p>
                                    <p>⑦ 자동 접속, 자동 입력 프로그램 등을 사용하는 등 정상적인 용법과 다른 방법으로 &quot;게임 서비스&quot;를 이용하여 &quot;회사&quot;의 서버에 부하를 일으켜 &quot;회사&quot;의 정상적인 활동을 방해하는 행위</p>
                                    <p>⑧ 금전 등의 대가를 지불하고 타인에게 게임 진행을 요청하는 등(대리 육성 등)의 행위</p>
                                    <p>⑨ 프로그램의 버그, 오동작을 고의로 반복 이용하거나 유포하는 행위</p>
                                    <p>⑩ 본인 아닌 제3자에게 접속권한을 부여하는 행위</p>
                                    <p>⑪ &quot;회사&quot;와 기타 제3자의 지적재산권을 침해하는 행위</p>
                                    <p>⑫ &quot;회사&quot; 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
                                    <p>⑬ 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 &quot;게임 서비스&quot;에 공개 또는 게시하는 행위</p>
                                    <p>⑭ &quot;회사&quot;의 동의 없이 영리를 목적으로 &quot;게임 서비스&quot;를 사용하는 행위</p>
                                    <p>⑮ 기타 불법적이거나 부당한 행위</p>
                                </div>
                                <p>3. &quot;회원&quot;은 &quot;회사&quot;가 제공하는 &quot;게임 서비스&quot;를 이 약관, 운영정책 및 &quot;회사&quot;가 설정한 규칙에 따라 이용할 수 있습니다. &quot;회원&quot;은 관계법령, 이 약관의 규정, 이용안내 및 &quot;게임 서비스&quot;와 관련하여 공지한 주의사항, &quot;회사&quot;가 통지하는 사항 등을 준수하여야 하며, 기타 &quot;회사&quot;의 업무에 방해되는 행위를 하여서는 안 됩니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제8조. &quot;게임 서비스&quot;의 제공 및 변경</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 단독으로 또는 다른 회사와 제휴하여 &quot;회원&quot;에게 아래와 같은 &quot;게임 서비스&quot;를 제공합니다.</p>
                                <div className="ml-4">
                                    <p>(1)게임서비스</p>
                                    <p>(2)커뮤니티 서비스</p>
                                    <p>(3)보안서비스</p>
                                    <p>(4)고객보호 서비스</p>
                                    <p>(5)&quot;회원&quot;의 성향, 관심, 이용기록 분석 등을 통한 개인 맞춤형 상품 추천 서비스</p>
                                    <p>(6) 기타 추가 개발하여 &quot;회원&quot;에게 제공하는 일체의 서비스</p>
                                </div>
                                <p>2. &quot;게임 서비스&quot;는 1일 24시간 제공을 원칙으로 합니다. 단, &quot;회사&quot;의 운영정책 및 관계법령에 따라 서비스 및 &quot; 회원&quot; 별로 제공시간, 횟수, 내용 등이 제한될 수 있습니다.</p>
                                <p>3. &quot;회사&quot;는 정기점검, 설비 점검, 고장, 운영상 상당한 이유가 있는 경우 &quot;게임 서비스&quot;의 제공을 일시 중단할 수 있으며 이 경우 제6조 제4항에 정한 방법으로 &quot;회원&quot;에게 공지합니다. 다만, 사전에 공지할 수 없는 부득이한 사유가 있는 경우 사후에 공지할 수 있습니다.</p>
                                <p>4. &quot;회사&quot;는 &quot;게임 서비스&quot; 내용의 결정, 변경, 유지, 보수, 종료에 관한 포괄적인 권한을 가집니다. &quot;회사&quot;는 영업의 폐지, 합병, 분할, 당해 서비스의 수익 악화, 게임성 유지 등 상당한 이유가 있는 경우, 제공하고 있는 전부 또는 일부 게임이나 &quot;게임 서비스&quot;를 변경하거나 종료할 수 있으며, 이 경우 제6조 제4항에 정한 방법으로 변경 전 7일 이상, 종료 전 30일 이상 사전 공지합니다. 다만, 사전에 공지할 수 없는 부득이한 사정이 있는 경우 사후에 공지할 수 있습니다.</p>
                                <p>5. &quot;회사&quot;는 &quot;게임 서비스&quot;의 효율적 이용 및 운영을 위해 게임 아이템, 게임머니, &quot;사이버포인트&quot; 등의 이용내역을 확인하거나 일부 또는 전부를 조정 및 회수, 종료할 수 있으며, 제 6조 제4항에 정한 방법으로 변경 전 7일 이상, 종료 전 30일 이상 사전 공지합니다. 다만, 사전에 공지할 수 없는 부득이한 사정이 있는 경우 사후에 공지할 수 있습니다.</p>
                                <p>6. &quot;회사&quot;가 제4항에 따라 &quot;게임서비스&quot;를 종료하거나, 제5항에 따라 게임 아이템, 게임머니, &quot;사이버포인트&quot; 등을 소멸시키는 경우, &quot; 회원&quot;은 무료서비스 및 사용기간이 남아있지 않은 &quot;유료서비스&quot;에 대하여 손해배상을 청구할 수 없습니다.</p>
                                <p>7. &quot;게임 서비스&quot;의 지적재산권은 &quot;회사&quot;에 있으며, &quot;회사&quot;는 &quot;회원&quot;에게 &quot;회사&quot;가 정한 이용조건에 따라 &quot;게임 서비스&quot;, 게임캐릭터, 아이템, 게임머니 및 &quot;사이버포인트&quot; 등을 이용할 수 있는 이용권한만을 부여합니다. &quot;회사&quot;가 별도로 허락하지 않는 한 &quot;회원&quot;은 제3자에게 양도나 대여, 판매, 담보제공 등을 할 수 없습니다.</p>
                                <p>8. &quot;회사&quot;의 &quot;게임 서비스&quot;는 &quot;계정연결&quot;을 설정할 경우에 한하여 타 &quot;스마트기기&quot;에서도 연결 계정으로 접속하여 &quot;계정정보&quot;의 일부 또는 전부를 이전하거나 공유하여 사용할 수 있습니다. &quot;정보저장게임&quot; 해당 여부 및 &quot;계정연결&quot;시 이전, 공유 가능한 &quot;계정정보&quot;는 기술적 사항과 운영정책 등을 고려하여 개별 게임앱 별로 정해지며, 운영상 필요 및 외부 계정 제공 업체의 정책에 따라 변경되거나 중단될 수 있습니다.</p>
                                <p>9. &quot;계정연결&quot;에 이용된 외부 계정은 다른 외부 계정으로 변경할 수 없으며, &quot;회원&quot;이 &quot;계정연결&quot;에 이용된 외부 계정을 정상적으로 이용할 수 없는 경우 &quot;게임 서비스&quot; 이용이 제한될 수 있습니다.</p>
                                <p>10. &quot;회사&quot;는 &quot;게임 서비스&quot; 내에 광고를 게재할 수 있습니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제9조. 저작권 등의 귀속</h3>
                            <div className="space-y-3">
                                <p>1. &quot;게임 서비스&quot; 내 &quot;회사&quot;가 제작한 콘텐츠 등에 대한 저작권 및 기타 지식재산권은 &quot;회사&quot;의 소유입니다. &quot;회사&quot;는 &quot;게임 서비스&quot;와 관련하여 &quot;회원&quot;에게 &quot;회사&quot;가 정한 이용조건에 따라 게임이나 캐릭터, 게임아이템, 게임머니, 사이버포인트 등을 이용할 수 있는 이용권한 만을 부여하며, &quot;회원&quot;은 이를 유상 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.</p>
                                <p>2. &quot;회원&quot;은 &quot;회사&quot;가 제공하는 &quot;게임 서비스&quot;를 이용함으로써 얻은 정보 중 &quot;회사&quot; 또는 제3자에게 지식재산권이 귀속된 정보를 &quot;회사&quot; 또는 제3자의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>
                                <p>3. &quot;회원&quot;은 게임 내에서 보여지거나 &quot;게임 서비스&quot;와 관련하여 &quot;회원&quot; 또는 다른 이용자가 게임 또는 &quot;게임 서비스&quot;를 통해 업로드 또는 전송하는 대화 텍스트를 포함한 커뮤니케이션, 이미지, 사운드 및 모든 자료 및 정보(이하, &quot;회원 콘텐츠&quot;라 합니다)에 대하여 &quot;회사&quot;가 다음과 같은 방법과 조건으로 이용하는 것을 허락합니다.</p>
                                <div className="ml-4 space-y-2">
                                    <p>가) 해당 &quot;회원 콘텐츠&quot;를 이용, 편집, 형식의 변경 및 기타 변형하는 것(공표, 복제, 공연, 전송, 배포, 방송, 2차적저작물 작성 등 어떠한 형태로든 이용 가능하며, 이용 기간과 지역에는 제한이 없음)</p>
                                    <p>나) &quot;회원 콘텐츠&quot;를 제작한 자의 사전 동의 없이 거래를 목적으로 &quot;회원 콘텐츠&quot;를 판매, 대여, 양도행위를 하지 않음</p>
                                </div>
                                <p>4. 게임 내에서 보여지지 않고 &quot;게임 서비스&quot;와 일체화되지 않은 &quot;회원&quot;의 &quot;회원 콘텐츠&quot; (예컨대, 일반게시판 등에서의 게시물)에 대하여 &quot;회사&quot;는 검색 결과 내지 &quot;게임 서비스&quot; 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집하여 게시할 수 있습니다. 이 경우 &quot;회사&quot;는 저작권법을 준수하며, &quot;회원&quot;은 언제든지 고객센터 또는 &quot;게임 서비스&quot; 내 관리기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.</p>
                                <p>5. &quot;회사&quot;는 본 조 제3항 및 제4항 이외의 방법으로 &quot;회원&quot;의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 &quot;회원&quot;의 동의를 얻어야 합니다.</p>
                                <p>6. &quot;회사&quot;는 &quot;회원&quot;이 게시하거나 등록하는 &quot;게임 서비스&quot; 내의 게시물, 게시 내용에 대해 제7조에서 규정하는 금지행위에 해당된다고 판단되는 경우, 사전 통지 없이 이를 삭제하거나 이동 또는 등록을 거부할 수 있습니다.</p>
                                <p>7. 본 조 제3항 및 제4항은 &quot;회사&quot;가 &quot;게임 서비스&quot;를 운영하는 동안 유효하며, 회원 탈퇴 후에도 계속적으로 적용됩니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제10조. 계약해지 등</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회원&quot;은 언제든지 &quot;게임 서비스&quot; 초기화면의 고객센터 또는 내 정보 관리 메뉴 등을 통하여 이용계약 해지 신청(회원탈퇴)을 할 수 있습니다. &quot;회원&quot;이 회원탈퇴를 신청한 경우 &quot;회사&quot;는 &quot;회원&quot; 본인 여부를 확인할 수 있으며, 관계법령 등이 정하는 바에 따라 이를 즉시 처리합니다. 단, &quot;회사&quot;는 이용자의 회원가입 후 일정시간 동안 서비스 부정이용 방지 등의 사유로 즉시 탈퇴를 제한할 수 있습니다.</p>
                                <p>2. &quot;회원&quot;이 이용계약을 해지할 경우, 관계법령 및 개인정보처리방침에 따라 &quot;회사&quot;가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 &quot;회원&quot;의 계정정보를 포함한 모든 데이터는 소멸됩니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제11조. 회사의 이용제한 조치 및 계약해지</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 &quot;회원&quot;이 이 약관의 의무를 위반하거나 &quot;게임 서비스&quot;의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 &quot;게임 서비스&quot; 이용을 단계적으로 제한하거나 이용계약을 해지 할 수 있습니다.</p>
                                <p>2. &quot;회사&quot;는 전항에도 불구하고, &apos;저작권법&apos; 및 &apos;컴퓨터프로그램 보호법&apos;을 위반한 불법프로그램의 제공 및 운영방해, &apos;정보통신망 이용촉진 및 정보보호 등에 관한 법률&apos;을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위, &apos;게임산업진흥에 관한 법률&apos;을 위반한 게임머니 중개, 알선, 매입, 제3자의 개인정보ㆍ결제정보 도용 등과 같이 관계법령을 위반한 경우 또는 게임운영에 악영향을 미치는 경우(운영자 사칭, 게임 내 사기, 반복적 버그 악용 등)에는 즉시 영구이용정지, 계약해지를 할 수 있습니다.</p>
                                <p>3. &quot;회사&quot;는 최근의 서비스 이용일로부터 연속하여 1년 이상 &quot;회사&quot;의 서비스를 이용하지 않은 &quot;회원&quot;에 대하여 이용계약을 해지할 수 있습니다.</p>
                                <p>4. &quot;회사&quot;는 본 조의 이용제한 범위 내에서 다음 각호의 어느 하나에 해당하는 행위의 구체적인 유형, 제한의 조건 및 세부내용을 별도 운영원칙으로 정할 수 있으며 &quot;회원&quot;은 해당 운영원칙을 준수하여 &quot;게임 서비스&quot;를 이용할 의무가 있습니다.</p>
                                <div className="ml-4 space-y-2">
                                    <p>① &quot;회원&quot;의 계정, 캐릭터명 등 명칭 사용과 관련한 제한</p>
                                    <p>② 게시판 이용에 대한 제한</p>
                                    <p>③ 게임이용방법에 대한 제한</p>
                                    <p>④ 기타 &quot;회원&quot;의 의무와 관련된 사항으로 회사가 &quot;게임 서비스&quot; 운영상 필요한 제한</p>
                                </div>
                                <p>5. &quot;회사&quot;의 이용제한이 정당한 경우, &quot;회사&quot;는 이용제한 및 계약해지로 인하여 &quot; 회원&quot;이 입은 손해를 배상하지 않으며, &quot;유료서비스&quot; 이용과 관련된 잔여 정보의 환불이 불가합니다.</p>
                                <p>6. &quot;회원&quot;이 &quot;회사&quot;의 이용제한에 불복하고자 할 때에는 제한이 있은 날로부터 1주일 이내에 &quot;회사&quot;의 이용제한에 불복하는 이유를 기재한 이의신청서를 서면, 전자우편 또는 이에 준하는 방법으로 &quot;회사&quot;에 제출하여야 합니다. &quot;회원&quot;의 이의가 정당하다고 &quot;회사&quot;가 인정하는 경우 &quot;회사&quot;는 즉시 &quot;게임 서비스&quot;의 이용을 재개합니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제12조. 대금결제</h3>
                            <div className="space-y-3">
                                <p>1. &quot;유료서비스&quot;에 대한 구매 대금의 부과와 납부는 원칙적으로 &quot;플랫폼&quot; 사업자가 정하는 정책이나 방법을 따릅니다. 또한 각 결제수단 별 한도는 &quot;회사&quot;, &quot;플랫폼&quot; 사업자가 정하는 정책 또는 정부의 방침에 따라 부여되거나 조정될 수 있습니다.</p>
                                <p>2. &quot;유료서비스&quot;의 구매대금을 외화로 결제하는 경우 환율의 변동이나, 신용카드사 등의 결제수단 제공자가 &quot;회원&quot;에게 부과하는 수수료 등으로 인하여 실제 결제 금액이 서비스의 상점 등에서 표시된 가격과 달라질 수 있습니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제13조. 청약철회</h3>
                            <div className="space-y-3">
                                <p>1. &quot;유료서비스&quot;는 청약철회가 가능한 &quot;게임 서비스&quot;와 청약철회가 제한되는 &quot;게임 서비스&quot;로 구분되어 제공되며, 이러한 내용은 &quot; 회원&quot;이 &quot;유료서비스&quot;를 구매할 시 고지 합니다. &quot;회원&quot;이 청약철회가 가능한 &quot;유료서비스&quot;를 구매한 경우 구매일 또는 이용가능일로부터 7일 이내에 청약철회(구매취소)를 할 수 있습니다. 단, 시용상품을 제공한 경우와 한시적 또는 일부 이용 등의 방법을 제공한 경우는 청약철회 대상에서 제외되며, 청약철회가 불가능한 서비스에 대하여는 운영정책을 통하여 별도 고지할 수 있습니다.</p>
                                <p>2. 선물 및 이벤트 등 &quot;회사&quot;나 제3자로부터 무상으로 제공받은 아이템, 캐릭터, 게임머니 등의 상품 및 청약철회 요청 당시 이미 사용하였거나 사용한 것으로 간주되는 &quot;유료서비스&quot; 등 이에 준하는 특성을 가진 일부 &quot;유료서비스&quot;에 대하여는 &apos;전자상거래 등에서의 소비자 보호에 관한 법률&apos; 및 &quot;콘텐츠산업 진흥법&quot;에 따라 청약철회(구매취소)가 제한될 수 있습니다.</p>
                                <p>3. &quot;회원&quot;은 제1항 및 제2항에도 불구하고 &quot;게임 서비스&quot;의 내용이 표시∙광고의 내용과 다르거나 계약내용과 다르게 이행된 경우에는 해당 &quot;게임 서비스&quot;를 이용할 수 있는 날로부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 청약철회를 할 수 있습니다.</p>
                                <p>4. 청약철회를 한 경우 &quot;회원&quot;은 &quot;유료서비스&quot;를 반환 또는 삭제합니다. &quot;회사&quot;는 &quot;유료서비스&quot;를 반환 받은 날로부터 3 영업일 이내(단, 수납확인이 필요한 결제 수단의 경우 수납확인일로부터 3영업일 이내)에 결제와 동일한 수단으로 환급하거나, 동일한 방법으로 환불이 불가능한 경우 &quot;회사&quot;가 사전에 고지한 방법으로 환불하며, &quot;회원&quot;이 신용카드 또는 전자화폐 등의 결제수단으로 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 대금의 청구를 정지 또는 취소하도록 요청합니다.</p>
                                <p>5. &quot;회사&quot;는 본 조의 절차에 따른 환급이 지연된 경우, &apos;전자상거래 등에서의 소비자 보호에 관한 법률&apos;에 따른 지연 배상금을 환불금 지급 시 합산하여 지급합니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제14조. 피해보상, 환불 등</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 &quot;게임 서비스&quot;의 하자, 이용중지 또는 장애 등에 의하여 발생한 &quot;회원&quot;의 손해에 대하여 보상 또는 배상합니다.</p>
                                <p>2. &quot;회사&quot;가 제8조 제4항에 따라 &quot;회사&quot;가 제공하고 있는 게임 또는 &quot;게임 서비스&quot;를 종료하여 &quot;회원&quot;이 &quot;유료서비스&quot;를 이용할 수 없게 된 경우, 아래와 같은 기준에 따라 환불절차를 진행합니다.</p>
                                <div className="ml-4 space-y-2">
                                    <p>① 환불은 &quot;유료서비스&quot; 중 &quot;회원&quot;이 플랫폼 사업자가 제공하는 결제서비스를 통하여 직접 구매한 부분에 한하여 진행됩니다.</p>
                                    <p>② 무상으로 지급되거나 &quot;회원&quot;이 플랫폼 사업자가 제공하는 결제서비스를 통하여 직접 구매하지 않은 게임 애플리케이션, 게임머니, 코인류 상품, 아바타, 아이템 등의 상품 및 이용기간이 만료된 &quot;유료서비스&quot;는 환불대상에서 제외됩니다.</p>
                                    <p>③ &quot;유료서비스&quot;의 사용기간은 판매 시 별도 고지가 없는 한 코인류 상품의 경우 마지막 사용일로부터 1년, 코인류 상품을 제외한 &quot;유료서비스&quot;는 구매 후 1년으로 합니다.</p>
                                </div>
                                <p>3. &quot;회사&quot;는 제2항의 경우 &quot;게임 서비스&quot; 중단 이후 30일 이상의 기간을 정하여 그 기간 동안 환불 절차 이행을 위한 전담 창구 등 고객 대응 수단을 마련하여 운영합니다.</p>
                                <p>4. 제2항에도 불구하고 &quot;플랫폼&quot; 사업자 정책에 따라 환불이 제한되는 경우 &quot;회사&quot;는 &quot;회원&quot;에게 환불을 진행하지 않을 수 있습니다. 이 경우 &quot;회사&quot;는 &quot;회원&quot;에게 환불이 제한된다는 사실을 안내합니다.</p>
                                <p>5. 환불은 납부 확인이 된 경우에 한해 신청일로부터 3영업일 이내 구매한 결제 수단으로 함을 원칙으로 하며, 수납확인이 필요한 결제 수단의 경우 수납확인일로부터 3영업일 이내에 환급합니다. 동일한 방법으로 환불이 불가한 경우 &quot;회사&quot;가 사전에 고지한 방법으로 환불 처리합니다.</p>
                                <p>6. &quot;회사&quot;의 책임 있는 사유로 과오금이 발생한 경우 &quot;회사&quot;는 계약비용, 수수료 등에 관계없이 과오금 전액을 환급합니다. 구매한 결제수단과 동일한 방법으로 환급이 불가능한 경우 &quot;회사&quot;가 사전에 고지한 방법으로 환급 처리합니다. 다만, &quot;회원&quot;의 책임 있는 사유로 과오금이 발생한 경우, 과오금의 환급에 소요되는 비용은 합리적인 범위 내에서 &quot;회원&quot;이 부담합니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제15조. 책임제한</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 정보통신망의 사용불가 및 장애, 천재지변 또는 국가비상사태, 정전 및 이에 준하는 불가항력 상황이 발생함으로 인하여 &quot;게임 서비스&quot;를 제공할 수 없는 경우에는 &quot;게임 서비스&quot; 제공에 관한 책임이 면제됩니다.</p>
                                <p>2. &quot;회사&quot;는 &quot;회원&quot;의 귀책사유로 인한 &quot;게임 서비스&quot; 이용의 중지, 사용제한, 데이터 삭제, 장애, 불이익에 대하여는 책임을 지지 않습니다.</p>
                                <p>3. &quot;회사&quot;는 &quot;계정연결&quot;에 사용된 외부 계정을 발급하는 업체가 제공, 관리하는 영역 (발급, 인증, 사용, 외부 연결 정책, 제한 정책 등)으로 인한 &quot;게임 서비스&quot;의 사용제한, 장애, 불이익, 중지에 대해 &quot;회사&quot;는 책임지지 않습니다.</p>
                                <p>4. &quot;회사&quot;는 &quot;회사&quot;의 고의 또는 중대한 과실이 없는 정보통신망 이용 환경으로 인하여 발생하는 문제 또는 &quot;회원&quot;의 &quot;스마트기기&quot;, PC 등의 각종 유무선 장치의 사용 환경으로 인하여 발생하는 제반 문제에 대해서는 책임이 면제됩니다.</p>
                                <p>5. &quot;회사&quot;는 &quot;회원&quot;이 &quot;게임 서비스&quot;와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.</p>
                                <p>6. &quot;회사&quot;는 &quot;회원&quot; 간 또는 &quot;회원&quot;과 제3자 상호간에 &quot;게임 서비스&quot;을 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.</p>
                                <p>7. &quot;회사&quot;는 무료로 제공되는 &quot;게임 서비스&quot; 이용 및 변경, 중단과 관련하여 관계법령에 특별한 규정이 없는 한 책임을 지지 않습니다.</p>
                                <p>8. &quot;회사&quot;는 &apos;청소년보호법&apos;, &apos;게임산업진흥에 관한 법률&apos; 등 관계 법령, 정부 정책 및 본인 또는 법정대리인의 선택 또는 이용자 보호프로그램 정책에 따라 &quot;게임 서비스&quot;의 이용시간을 제한하거나 &quot;회원&quot;에 따라 &quot;게임 서비스&quot;의 이용시간 등을 제한할 수 있으며, 이러한 제한사항 및 제한에 따라 발생하는 &quot;게임 서비스&quot; 이용관련 제반 사항에 대해서는 책임이 면제됩니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제16조. (약관 외 준칙)</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;는 개별 게임서비스 등에 대하여 별도의 이용약관 및 운영정책(이하 &quot;개별 서비스약관 등&quot;)을 둘 수 있으며, 해당 내용이 이 약관과 상충할 경우에는 개별 서비스약관 등이 우선하여 적용됩니다.</p>
                                <p>2. 이 약관에 정하지 아니한 사항이나 해석에 대해서는 개별 서비스약관 등 및 &apos;전자상거래 등에서의 소비자보호에 관한 법률&apos;, &apos;약관의 규제에 관한 법률&apos;, &apos;게임산업진흥에 관한 법률&apos;, &apos;정보통신망이용촉진 및 정보보호 등에 관한 법률&apos;, &apos;콘텐츠산업 진흥법&apos; 등 관계법령에 따릅니다.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">제17조. (준거법 및 재판관할)</h3>
                            <div className="space-y-3">
                                <p>1. &quot;회사&quot;와 &quot;회원&quot;간 제기된 소송은 대한민국법을 준거법으로 합니다.</p>
                                <p>2. &quot;회사&quot;와 &quot;회원&quot;간 발생한 분쟁에 관한 소송은 제소 당시의 &quot;회원&quot;의 주소에 의하고, 주소가 없는 경우 거소를 관할하는 지방 법원의 전속관할로 합니다. 단, 제소 당시 &quot;회원&quot;의 주소 또는 거소가 명확하지 아니한 경우의 관할법원은 민사소송법에 따라 정합니다.</p>
                                <p>3. 해외에 주소나 거소가 있는 &quot;회원&quot;의 경우 &quot;회사&quot;와 &quot;회원&quot;간 발생한 분쟁에 관한 소송은 전항에도 불구하고 대한민국 서울중앙지방법원을 관할법원으로 합니다.</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
                            <p className="mb-2 font-semibold">&lt;부칙&gt;</p>
                            <p>1. 이 약관은 2025년 4월 1일부터 시행됩니다.</p>
                            <p className="mt-4">doyakmin Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}