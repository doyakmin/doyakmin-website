export const privacyPolicy = {
  slug: 'privacy-policy',
  title: '개인정보처리방침',
  date: '2025-04-01', // 문서의 시행일자로 업데이트
  author: '(주)도약민',
  summary: '주식회사 도약민이 이용자의 개인정보를 어떤 목적으로 수집·이용하고, 어떻게 안전하게 관리·파기하는지에 대한 방침을 안내합니다.',
  content: `
    <div class="prose lg:prose-xl max-w-none">
      <p>주식회사 도약민(이하 “회사”)는 이용자의 개인정보를 소중히 여기며 「개인정보 보호법」 등 대한민국 관계 법령과 가이드라인을 준수합니다. 본 개인정보처리방침은 회사가 어떤 정보를 어떤 목적으로 수집·이용하고, 어떻게 안전하게 관리·파기하는지 알리기 위한 것입니다.</p>
      
      <h3>목차</h3>
      <ol class="list-decimal list-inside space-y-1">
        <li>수집하는 개인정보의 항목</li>
        <li>개인정보의 수집 및 이용목적</li>
        <li>개인정보의 처리 및 보유기간</li>
        <li>개인정보 제공(처리위탁, 제3자 제공, 국외이전)</li>
        <li>개인정보의 파기절차 및 방법</li>
        <li>이용자의 권리·의무 및 행사방법</li>
        <li>개인정보 자동 수집 장치(광고ID/쿠키/SDK)와 거부 방법</li>
        <li>개인정보의 안전성 확보조치</li>
        <li>아동의 개인정보 보호</li>
        <li>민감정보 처리에 관한 사항</li>
        <li>권한(접근권한) 이용에 관한 안내</li>
        <li>개인정보 보호책임자 및 담당부서</li>
        <li>권익침해 구제방법</li>
        <li>고지 의무(변경 이력)</li>
      </ol>

      <h4 class="mt-8">1. 수집하는 개인정보의 항목</h4>
      <p>회사는 서비스 제공에 필요한 최소한의 개인정보만 수집합니다.</p>
      <p><strong>(1) 게임 서비스 이용 시</strong></p>
      <ul class="list-disc list-inside space-y-1">
          <li>필수: 닉네임, 계정 식별 번호(Google/Apple/게스트 중 택1)</li>
          <li>서비스 이용 중 자동 생성: PID, UUID, 서비스 이용기록(날짜·시간), 위치정보(GPS 좌표, 네트워크 기반 대략 위치), 접속IP, 디바이스/앱 정보(OS/APP 버전, 언어·국가), 오류/충돌 로그, 채팅 로그(텍스트·이미지·동영상·음성 포함, 상대방 ID, 전송 시점·형태·방식 정보)</li>
          <li>광고/분석용 식별자(개인정보가 아닌 정보): 광고식별자(ADID/IDFA) 등</li>
          <li>*채팅 로그에는 개인정보와 비개인정보가 혼재될 수 있습니다.</li>
      </ul>

      <p><strong>(2) 고객센터 문의</strong></p>
      <ul class="list-disc list-inside space-y-1">
          <li>필수: 이메일 주소</li>
          <li>선택: 이름, 연락처, 문의 내용 및 첨부파일(스크린샷, 로그 등)</li>
      </ul>

      <p><strong>(3) 이벤트/경품(오프라인 포함) 운영 시</strong></p>
      <ul class="list-disc list-inside space-y-1">
          <li>필수: 이름, 연락처, 계정ID, 배송지, 본인확인 정보(필요 시)</li>
          <li>세무처리 필요 시: 주민등록번호(소득세법상 필요 범위에 한함, 분리보관)</li>
          <li>현장 촬영물: 사진·영상·음성·닉네임·게임기록(사전 고지·동의 범위 내)</li>
          <li>*이용자는 선택항목 동의를 거부할 수 있으며, 필수항목 거부 시 해당 서비스 제공이 제한될 수 있습니다.</li>
      </ul>
      
      <h4 class="mt-8">2. 개인정보의 수집 및 이용목적</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>본인 식별/인증, 계정 생성·연동(플랫폼 계정 포함)</li>
        <li>문의 응대, 민원 처리 및 결과 통지</li>
        <li>위치기반 게임 기능 제공(주변 오브젝트/이벤트/랭킹), 부정 이용 방지(GPS 스푸핑 탐지 등)</li>
        <li>서비스 운영 분석, 성능·UX 개선, 결제/환불 처리</li>
        <li>커뮤니티·채팅 운영 및 약관·법령 위반 모니터링</li>
        <li>이벤트/경품 운영(본인확인·배송·세무 처리)</li>
        <li>법령 준수 및 분쟁 대응, 기록 보존</li>
      </ul>

      <h4 class="mt-8">3. 개인정보의 처리 및 보유기간</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>원칙: 수집·이용 목적 달성 시 지체 없이 파기</li>
        <li>회사 정책에 따른 보관
          <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>수집항목(게임 계정·로그 등): 탈퇴 시까지</li>
            <li>이용기록·관련 로그파일: 탈퇴일로부터 최대 1개월</li>
            <li>부정행위자 정보: 제재 만료일까지</li>
          </ul>
        </li>
        <li>법정 보관(조문 명시)
          <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>표시·광고 기록: 6개월(전자상거래법 제6조)</li>
            <li>계약/청약철회 기록: 5년(전자상거래법 제6조)</li>
            <li>대금결제/재화공급 기록: 5년(전자상거래법 제6조)</li>
            <li>전자장부(매출·취소·환불 등) 기록: 5년(국세기본법 제85조의3)</li>
            <li>소비자 불만/분쟁처리 기록: 3년(전자상거래법 제6조)</li>
            <li>서비스 접속 로그(통신사실 확인자료): 3개월(통신비밀보호법 제15조의2)</li>
          </ul>
        </li>
        <li>위치정보 이용·제공 사실 확인자료: 최소 6개월(위치정보법 제16조제2항)</li>
      </ul>

      <h4 class="mt-8">4. 개인정보 제공</h4>
      <p><strong>(1) 처리위탁</strong></p>
      <p>안전하고 효율적인 서비스 제공을 위해 아래 업무를 위탁합니다. 위탁계약 시 개인정보 보호에 관한 의무를 규정합니다.</p>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse border border-gray-300 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-300 p-2 font-semibold">수탁업체</th>
              <th class="border border-gray-300 p-2 font-semibold">위탁업무</th>
              <th class="border border-gray-300 p-2 font-semibold">보유·이용기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2">Google LLC(Firebase)</td>
              <td class="border border-gray-300 p-2">클라우드 서버/DB 운영·모니터링</td>
              <td class="border border-gray-300 p-2" rowspan="2">회원탈퇴 또는 위탁계약 종료 시까지</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">AppsFlyer</td>
              <td class="border border-gray-300 p-2">마케팅 성과 분석</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>(2) 제3자 제공</strong></p>
      <p>회사는 이용자 동의 없이 제3자에게 제공하지 않습니다. 다만, 다음은 예외입니다.</p>
      <ul class="list-disc list-inside space-y-1">
        <li>이용자의 별도 동의가 있는 경우</li>
        <li>법령에 근거하거나 수사기관/법원의 정당한 요청이 있는 경우</li>
      </ul>
      <p><strong>(3) 국외이전</strong></p>
      <p>서비스 제공에 필요하여 아래와 같이 국외로 이전할 수 있습니다. *국외 이전이 추가/변경될 경우, 사전 고지 및 동의를 받습니다.</p>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse border border-gray-300 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-300 p-2 font-semibold">이전받는 자</th>
              <th class="border border-gray-300 p-2 font-semibold">국가</th>
              <th class="border border-gray-300 p-2 font-semibold">이전 항목</th>
              <th class="border border-gray-300 p-2 font-semibold">이전 시점·방법</th>
              <th class="border border-gray-300 p-2 font-semibold">이용 목적</th>
              <th class="border border-gray-300 p-2 font-semibold">보유·이용기간</th>
              <th class="border border-gray-300 p-2 font-semibold">보안조치</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2">Google LLC(Firebase)</td>
              <td class="border border-gray-300 p-2">미국</td>
              <td class="border border-gray-300 p-2">PID, UUID, 이용기록(날짜·시간), 대략 위치, 오류로그 등</td>
              <td class="border border-gray-300 p-2">데이터 업데이트 시 네트워크로 전송</td>
              <td class="border border-gray-300 p-2">클라우드 서버 운영·관리</td>
              <td class="border border-gray-300 p-2">회원탈퇴 시까지</td>
              <td class="border border-gray-300 p-2">전송구간 암호화, 접근통제</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 class="mt-8">5. 개인정보의 파기절차 및 방법</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>절차: 목적 달성 즉시 파기. 법정 보관 사유가 있는 경우 별도 DB/분리보관 후 기한 만료 즉시 파기.</li>
        <li>방법:
          <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>전자파일: 복구 불가능한 방식으로 영구 삭제</li>
            <li>종이/매체: 파쇄 또는 소각</li>
          </ul>
        </li>
      </ul>

      <h4 class="mt-8">6. 이용자의 권리·의무 및 행사방법</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>열람·정정·삭제·처리정지 요구 가능.</li>
        <li>신청 방법: 앱 내 고객센터/설정, 이메일, 서면 등</li>
        <li>처리 기한: 요청일로부터 10일 이내 결과 통지</li>
        <li>오류 정정 완료 전까지 해당 정보 이용/제공 중단. 제3자 제공 이력이 있는 경우 정정 결과를 지체 없이 통지.</li>
        <li>탈퇴 또는 삭제 요청한 정보는 본 방침 제3조 및 법정 보관 규정에 따라 처리합니다.</li>
      </ul>

      <h4 class="mt-8">7. 개인정보 자동 수집 장치(광고ID/쿠키/SDK)와 거부 방법</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>회사는 맞춤형 광고/분석을 위해 광고식별자(ADID/IDFA) 및 SDK를 사용할 수 있습니다.</li>
        <li>거부 방법(모바일)
          <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Android: 설정 → Google → 광고(또는 개인정보 보호→광고) → 광고 개인 최적화 해제</li>
            <li>iOS: 설정 → 개인정보 보호 → 추적 → 앱 추적 허용 끔 / 설정 → 개인정보 보호 → Apple 광고 → 맞춤형 광고 해제</li>
          </ul>
        </li>
        <li>웹 브라우저(쿠키)
          <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터 → ‘서드파티 쿠키 차단’ 등</li>
            <li>Safari: 환경설정 → 개인정보 보호 → ‘사이트 간 추적 방지’</li>
          </ul>
        </li>
        <li>주요 파트너 Opt-out
          <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>AppsFlyer: https://www.appsflyer.com/optout</li>
            <li>Google: https://policies.google.com/privacy</li>
            <li>Unity Ads: https://unity3d.com/legal/privacy-policy</li>
            <li>Facebook: https://www.facebook.com/policies/cookies/</li>
            <li>Vungle: https://vungle.com/privacy/#section-3-3</li>
          </ul>
        </li>
        <li>Opt-out 시 일부 맞춤 기능/광고 노출이 제한될 수 있으나, 비개인화 광고는 제공될 수 있습니다.</li>
      </ul>
      
      <h4 class="mt-8">8. 개인정보의 안전성 확보조치</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>관리적: 내부관리계획 수립·연 1회 이상 점검, 최소권한 원칙, 정기 보안/개인정보 교육</li>
        <li>기술적: 접근권한 통제, 침입차단/탐지, 중요정보 암호화 저장·전송, 접속기록 보관 및 위변조 방지, 보안패치 정기 갱신</li>
        <li>물리적: 자료 보관구역 출입통제, 잠금장치 보관, 백업/재해복구 체계 운영</li>
      </ul>

      <h4 class="mt-8">9. 아동의 개인정보 보호</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>회사는 원칙적으로 만 14세 미만 아동의 개인정보를 법정대리인 동의 없이 수집하지 않습니다.</li>
        <li>만 14세 미만 아동 서비스 제공이 필요한 경우, 법정대리인의 동의를 받고 본인확인 절차를 거칩니다. 동의가 없으면 수집·이용하지 않습니다.</li>
      </ul>
      
      <h4 class="mt-8">10. 민감정보 처리에 관한 사항</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>회사는 민감정보(사상·신념·건강·생체정보 등)를 수집하지 않습니다.</li>
        <li>이용자가 채팅/이미지/음성 등으로 민감정보를 업로드하는 경우, 노출 최소화를 위해 자동/수동 필터링 또는 삭제 조치를 취할 수 있습니다.</li>
      </ul>

      <h4 class="mt-8">11. 권한(접근권한) 이용에 관한 안내</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>위치(필수): 위치기반 게임 기능 제공(GPS/네트워크)</li>
        <li>카메라/마이크/사진·미디어(선택): AR 캡처·업로드, 고객센터 첨부</li>
        <li>알림(선택): 푸시 알림(이벤트/안내/보상 등)</li>
        <li>*각 권한은 단말 설정에서 변경 가능하며, 거부 시 일부 기능 사용이 제한될 수 있습니다</li>
      </ul>

      <h4 class="mt-8">12. 개인정보 보호책임자 및 담당부서</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>개인정보 보호책임자: 정민영 / 정보보안실 / 이메일: jmy@doyakmin.com</li>
        <li>접수 채널: 앱 내 고객센터 또는 이메일로 요청(열람·정정·삭제·처리정지 등)</li>
      </ul>
      
      <h4 class="mt-8">13. 권익침해 구제방법</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>개인정보침해신고센터: 국번없이 118 / privacy.kisa.or.kr</li>
        <li>개인정보분쟁조정위원회: 1833-6972 / www.kopico.go.kr</li>
        <li>대검찰청 사이버수사과: 국번없이 1301 / cybercid.spo.go.kr</li>
        <li>경찰청 사이버범죄 신고: 국번없이 182 / ecrm.police.go.kr</li>
      </ul>

      <h4 class="mt-8">14. 고지 의무(변경 이력)</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>본 방침의 중요한 변경(권리 또는 의무에 중대한 영향)은 최소 30일 전, 그 외 변경은 최소 7일 전 공지합니다.</li>
        <li>이전 버전 열람 경로: 홈페이지/앱 내 ‘개인정보처리방침’ 메뉴에서 열람 가능하도록 제공합니다.</li>
      </ul>

      <h4 class="mt-8">부칙</h4>
      <ul class="list-disc list-inside">
        <li>개인정보처리방침 버전: 2025.04.01-Rev.2</li>
        <li>시행일자: 2025.04.01</li>
        <li>최초 제정: 2025.04.01</li>
      </ul>
      <br/>
      <p>© doyakmin Inc. All rights reserved.</p>
    </div>
  `,
}; 