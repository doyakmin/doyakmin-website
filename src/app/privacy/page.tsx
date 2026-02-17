import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Walker홀릭 개인정보처리방침 | 도약민',
  description: 'Walker홀릭 서비스의 개인정보처리방침입니다. 주식회사 도약민은 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리합니다.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold md:text-4xl">Walker홀릭 개인정보처리방침</h1>
            <p className="mt-4 text-sm text-gray-500">시행일: 2026년 2월 16일</p>
          </div>

          {/* Intro */}
          <div className="mt-10 text-sm leading-relaxed text-gray-700 md:text-base">
            <p>
              주식회사 도약민(이하 &quot;회사&quot;)은 「개인정보 보호법」 및 관련 법령에 따라 이용자의 개인정보를 보호하고
              이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>
          </div>

          {/* 제1조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제1조 (수집하는 개인정보 항목 및 수집 방법)</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              회사는 Walker홀릭 서비스 제공을 위해 아래와 같이 개인정보를 수집합니다.
            </p>

            <h3 className="mt-6 text-base font-semibold text-gray-800">1) 회원가입 시 수집 항목</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">수집 항목</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">수집 방법</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">목적</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">이메일 주소, 이름, 프로필 사진</td>
                    <td className="border border-gray-200 px-3 py-2">Google 로그인</td>
                    <td className="border border-gray-200 px-3 py-2">회원 식별 및 서비스 제공</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">이메일 주소, 이름, 프로필 사진</td>
                    <td className="border border-gray-200 px-3 py-2">Apple 로그인</td>
                    <td className="border border-gray-200 px-3 py-2">회원 식별 및 서비스 제공</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">이메일 주소, 닉네임, 프로필 사진</td>
                    <td className="border border-gray-200 px-3 py-2">카카오 로그인</td>
                    <td className="border border-gray-200 px-3 py-2">회원 식별 및 서비스 제공</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">이메일 주소, 비밀번호</td>
                    <td className="border border-gray-200 px-3 py-2">이메일 직접 가입</td>
                    <td className="border border-gray-200 px-3 py-2">회원 식별 및 서비스 제공</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-6 text-base font-semibold text-gray-800">2) 서비스 이용 중 수집 항목</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">수집 항목</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">수집 방법</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">목적</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">닉네임, 성별, 연령대</td>
                    <td className="border border-gray-200 px-3 py-2">앱 내 직접 입력</td>
                    <td className="border border-gray-200 px-3 py-2">프로필 관리 및 서비스 개인화</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">걸음수 (신체 활동 데이터)</td>
                    <td className="border border-gray-200 px-3 py-2">스마트폰 센서 / Health Connect</td>
                    <td className="border border-gray-200 px-3 py-2">미션 달성 측정 및 쿠폰 발급</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">현재 위치 정보 (GPS)</td>
                    <td className="border border-gray-200 px-3 py-2">기기 GPS 센서 (이용 중에만)</td>
                    <td className="border border-gray-200 px-3 py-2">주변 제휴 상점 안내</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">기기 알림 토큰 (FCM Token)</td>
                    <td className="border border-gray-200 px-3 py-2">Firebase Cloud Messaging</td>
                    <td className="border border-gray-200 px-3 py-2">미션 달성·쿠폰 발급 푸시 알림</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-6 text-base font-semibold text-gray-800">3) 구독 결제 관련</h3>
            <div className="mt-3 space-y-1 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>구독 결제 처리는 <strong className="font-semibold">Google Play 스토어</strong> 및 <strong className="font-semibold">Apple App Store</strong>에서 직접 처리됩니다.</p>
              <p>회사는 카드번호, 계좌번호 등 결제 수단 정보를 직접 수집·저장하지 않습니다.</p>
              <p>구독 상태(구독 여부, 만료일)만 서비스 제공 목적으로 저장됩니다.</p>
            </div>
          </article>

          {/* 제2조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제2조 (개인정보의 수집 및 이용 목적)</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              회사는 수집한 개인정보를 다음 목적에 한하여 이용합니다.
            </p>
            <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
              <li><strong className="font-semibold">서비스 제공</strong>: 회원 가입, 로그인, 미션 관리, 쿠폰 발급 및 사용</li>
              <li><strong className="font-semibold">걸음수 측정 및 미션 달성</strong>: 일일 걸음수 측정을 통한 미션 완료 여부 확인</li>
              <li><strong className="font-semibold">위치 기반 서비스</strong>: 현재 위치 기준 주변 제휴 상점 안내</li>
              <li><strong className="font-semibold">알림 서비스</strong>: 미션 달성, 쿠폰 발급, 이벤트 정보 푸시 알림</li>
              <li><strong className="font-semibold">구독 서비스 관리</strong>: 프리미엄 구독 상태 확인 및 혜택 제공</li>
              <li><strong className="font-semibold">서비스 개선</strong>: 오류 분석 및 서비스 품질 개선</li>
            </ol>
          </article>

          {/* 제3조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제3조 (개인정보의 보유 및 이용 기간)</h2>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>회사는 회원 탈퇴 시 또는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
              <p>단, 관련 법령에 따라 아래 정보는 일정 기간 보관합니다.</p>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">보관 정보</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">보관 기간</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">근거 법령</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">계약 또는 청약철회 등에 관한 기록</td>
                    <td className="border border-gray-200 px-3 py-2">5년</td>
                    <td className="border border-gray-200 px-3 py-2">전자상거래법</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">대금결제 및 재화 공급에 관한 기록</td>
                    <td className="border border-gray-200 px-3 py-2">5년</td>
                    <td className="border border-gray-200 px-3 py-2">전자상거래법</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">소비자 불만 또는 분쟁처리에 관한 기록</td>
                    <td className="border border-gray-200 px-3 py-2">3년</td>
                    <td className="border border-gray-200 px-3 py-2">전자상거래법</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">접속에 관한 기록</td>
                    <td className="border border-gray-200 px-3 py-2">3개월</td>
                    <td className="border border-gray-200 px-3 py-2">통신비밀보호법</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* 제4조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제4조 (개인정보의 제3자 제공)</h2>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
              <p>다음의 경우에 한해 예외적으로 제공할 수 있습니다.</p>
            </div>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-700 md:text-base">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </article>

          {/* 제5조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제5조 (개인정보 처리 위탁)</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              회사는 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁합니다.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">수탁업체</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">위탁 업무</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">보유 및 이용 기간</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Google LLC (Firebase)</td>
                    <td className="border border-gray-200 px-3 py-2">인증, 데이터베이스, 푸시 알림, 서버 운영</td>
                    <td className="border border-gray-200 px-3 py-2">회원 탈퇴 시 또는 위탁 계약 종료 시</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Google LLC (Google Play)</td>
                    <td className="border border-gray-200 px-3 py-2">구독 결제 처리</td>
                    <td className="border border-gray-200 px-3 py-2">결제 관련 법령 보관 기간</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* 제6조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제6조 (개인정보의 파기 절차 및 방법)</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              개인정보는 수집 및 이용 목적이 달성된 후 아래와 같은 방법으로 지체 없이 파기합니다.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-700 md:text-base">
              <li><strong className="font-semibold">전자적 형태</strong>: 복구 불가능한 방법으로 영구 삭제</li>
              <li><strong className="font-semibold">종이 문서</strong>: 분쇄기로 분쇄하거나 소각</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              회원 탈퇴를 원하실 경우 앱 내 <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-medium text-gray-800">설정 &gt; 계정 탈퇴</code> 또는 아래 링크를 이용하세요.
            </p>
            <p className="mt-2">
              <Link
                href="/delete-account/namgu"
                className="text-sm font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700 md:text-base"
              >
                https://doyakmin.com/delete-account/namgu
              </Link>
            </p>
          </article>

          {/* 제7조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제7조 (이용자의 권리 및 행사 방법)</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <ol className="mt-3 list-inside list-decimal space-y-1 text-sm leading-relaxed text-gray-700 md:text-base">
              <li>개인정보 열람 요청</li>
              <li>개인정보 정정·삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
              <li>개인정보 동의 철회 (서비스 탈퇴)</li>
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              권리 행사는 아래 개인정보 보호책임자에게 서면, 이메일로 요청할 수 있으며, 지체 없이 조치하겠습니다.
            </p>
          </article>

          {/* 제8조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제8조 (위치정보 관련)</h2>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>위치 정보는 앱 사용 중에만 수집되며, 백그라운드에서는 수집되지 않습니다.</p>
              <p>위치 정보 제공에 동의하지 않으셔도 걸음수 측정, 미션, 쿠폰 기능은 정상 이용 가능합니다.</p>
              <p>위치 정보 동의는 스마트폰 설정에서 언제든지 철회할 수 있습니다.</p>
            </div>
          </article>

          {/* 제9조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제9조 (건강 데이터 관련)</h2>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>걸음수 데이터는 오직 미션 달성 측정 목적으로만 사용됩니다.</p>
              <p>Android 기기에서는 신체 활동 권한(ACTIVITY_RECOGNITION), Health Connect 연동을 통해 수집합니다.</p>
              <p>걸음수 데이터는 제3자에게 제공되지 않으며, 회원 탈퇴 시 삭제됩니다.</p>
            </div>
          </article>

          {/* 제10조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제10조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</h2>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>회사는 서비스 개선을 위해 Firebase Analytics, Crashlytics를 통해 앱 사용 패턴 및 오류 정보를 수집합니다.</p>
              <p>이는 개인을 식별하는 정보를 포함하지 않으며, 스마트폰 설정 &gt; 앱 &gt; 광고 ID 재설정을 통해 거부할 수 있습니다.</p>
            </div>
          </article>

          {/* 제11조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제11조 (개인정보 보호책임자)</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 bg-gray-50 px-3 py-2 font-semibold text-gray-700">성명</td>
                    <td className="border border-gray-200 px-3 py-2">정민영</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 bg-gray-50 px-3 py-2 font-semibold text-gray-700">직책</td>
                    <td className="border border-gray-200 px-3 py-2">대표</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 bg-gray-50 px-3 py-2 font-semibold text-gray-700">이메일</td>
                    <td className="border border-gray-200 px-3 py-2">
                      <a href="mailto:doyakmin@gmail.com" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700">
                        doyakmin@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 bg-gray-50 px-3 py-2 font-semibold text-gray-700">문의</td>
                    <td className="border border-gray-200 px-3 py-2">앱 내 설정 &gt; 고객지원 또는 위 이메일로 문의</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-gray-700 md:text-base">
              개인정보 관련 불만 처리 및 피해구제는 아래 기관에 문의하실 수 있습니다.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-700 md:text-base">
              <li>
                <strong className="font-semibold">개인정보 침해신고센터</strong>:{' '}
                <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700">
                  privacy.kisa.or.kr
                </a>{' '}
                / 118
              </li>
              <li>
                <strong className="font-semibold">개인정보 분쟁조정위원회</strong>:{' '}
                <a href="https://www.kopico.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700">
                  www.kopico.go.kr
                </a>{' '}
                / 1833-6972
              </li>
            </ul>
          </article>

          {/* 제12조 */}
          <article className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">제12조 (개정 이력)</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">버전</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">시행일</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">주요 변경 사항</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">v1.0</td>
                    <td className="border border-gray-200 px-3 py-2">2026.02.16</td>
                    <td className="border border-gray-200 px-3 py-2">최초 제정</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Footer */}
          <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            <p>본 방침은 2026년 2월 16일부터 시행됩니다.</p>
            <p className="mt-1">주식회사 도약민 | doyakmin@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
