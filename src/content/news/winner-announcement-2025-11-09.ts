export const winnerAnnouncement20251109 = {
    slug: 'winner-announcement-2025-11-09',
    title: '🎉 한국지 베타 이벤트 당첨자 발표',
    date: '2025-11-09',
    author: '(주)도약민',
    summary: '경성대·부경대 베타 이벤트 당첨자가 발표되었습니다! 당첨 여부를 확인하시고 11월 16일까지 정보를 제출해주세요.',
    content: `
        <div class="mb-8">
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 md:p-8 rounded-r-2xl">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3 flex items-center">
                    <span class="text-4xl mr-3">🎊</span>
                    축하합니다!
                </h2>
                <p class="text-gray-700 text-lg leading-relaxed">
                    2개월간의 열정적인 점령 전쟁이 끝났습니다!<br/>
                    총 <strong class="text-emerald-600">27명</strong>의 탐험가님들께 경품을 드립니다.<br/>
                    당첨자 분들은 <strong class="text-red-600">11월 14일 (금) 23:59까지</strong> 정보를 제출해주세요! 🎁
                </p>
            </div>
        </div>

        <!-- 카운트다운 타이머 컴포넌트 위치 -->
        <div id="countdown-timer-container" class="mb-8"></div>

        <!-- CTA 버튼 -->
        <div class="mb-10">
            <div class="bg-white border-2 border-emerald-500 rounded-2xl p-6 md:p-8 text-center shadow-lg">
                <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    📝 당첨자 정보 제출하기
                </h3>
                <p class="text-gray-600 mb-6">
                    당첨자이신 분은 아래 버튼을 클릭하여 <strong class="text-red-600">11월 14일 (금) 23:59까지</strong> 정보를 제출해주세요.<br/>
                    <strong class="text-red-600">기한 내 미제출 시 당첨이 취소됩니다.</strong>
                </p>
                <a 
                    href="https://forms.gle/NvLyGyq9znNyMnYi8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center w-full max-w-2xl min-w-[28rem] whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-24 rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg"
                >
                    🔗 구글폼에서 정보 제출하기
                </a>
                <p class="text-sm text-gray-500 mt-4">
                    ※ 구글 로그인이 필요할 수 있습니다
                </p>
            </div>
        </div>

        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
            <h3 class="text-lg font-bold text-red-800 mb-2 flex items-center">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                중요 안내
            </h3>
            <ul class="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>제출 마감: 2025년 11월 14일 (금) 23:59</strong></li>
                <li>기한 내 미제출 시 당첨이 자동 취소됩니다.</li>
                <li>부정행위가 확인된 경우 당첨이 무효 처리되고 법적 조치로 이어질 수 있습니다.</li>
            </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 pb-3 border-b-2 border-gray-200">🏆 당첨자 명단</h2>

        <!-- 탭 네비게이션 스타일 섹션 구분 -->
        <div class="space-y-8">
            
            <!-- 1. 랭킹 순위 보상 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div class="bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-4 border-b-2 border-orange-300">
                    <h3 class="text-2xl font-bold text-gray-900 flex items-center">
                        <span class="text-3xl mr-3">🏆</span>
                        랭킹 순위 보상 (20명)
                    </h3>
                </div>
                <div class="p-6">
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">순위</th>
                                    <th class="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">닉네임</th>
                                    <th class="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">점령 수</th>
                                    <th class="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">경품</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm font-bold text-gray-800">🥇 1위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm font-semibold text-gray-800">미농이야</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">231개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm font-semibold text-emerald-600">Apple 아이패드 11세대</td>
                                </tr>
                                <tr class="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm font-bold text-gray-800">🥈 2위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm font-semibold text-gray-800">신형만</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">159개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm font-semibold text-emerald-600">Apple 에어팟 프로 2세대</td>
                                </tr>
                                <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm font-bold text-gray-800">🥉 3위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm font-semibold text-gray-800">나에게읽어주던시</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">88개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm font-semibold text-emerald-600">갤럭시 버즈 3 프로</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">4위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">금정이</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">82개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">5위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">seolsup</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">45개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">6위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">우주</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">35개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">9위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">응우웬</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">23개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">8위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">송이</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">23개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">9위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">김세현1</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">22개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">10위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">백경22</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">19개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 3만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">11위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">유지니</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">12개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">12위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">떡볶이</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">6개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">13위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">부산왕</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">4개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">14위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">pknu</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">4개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">15위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">min0625</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">4개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">16위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">제후니</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">3개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">18위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">행벅이란</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">1개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">19위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">라스</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">1개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">21위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">버장</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">1개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                                <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">22위</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">jihwan051</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">1개</td>
                                    <td class="px-4 md:px-6 py-4 text-sm text-gray-800">배민 상품권 1만원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 2. 대학 본부 건물 점령 보상 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div class="bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-4 border-b-2 border-emerald-300">
                    <h3 class="text-2xl font-bold text-gray-900 flex items-center">
                        <span class="text-3xl mr-3">🏛️</span>
                        대학 본부 점령 보상 (2명)
                    </h3>
                </div>
                <div class="p-6">
                    <p class="text-sm text-gray-600 mb-4">
                        2025년 11월 7일 (금) 23:59 기준 본부 건물 보유자
                    </p>
                    <div class="space-y-4">
                        <div class="bg-gray-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h4 class="font-bold text-lg text-gray-800">경성대학교 본부</h4>
                                    <p class="text-gray-600">닉네임: <strong>우주</strong></p>
                                </div>
                                <div class="text-right">
                                    <p class="font-semibold text-emerald-600">배민 상품권 5만원</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h4 class="font-bold text-lg text-gray-800">부경대학교 본부</h4>
                                    <p class="text-gray-600">닉네임: <strong>김세현1</strong></p>
                                </div>
                                <div class="text-right">
                                    <p class="font-semibold text-emerald-600">배민 상품권 5만원</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. 게임 피드백 추첨 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div class="bg-gradient-to-r from-green-100 to-teal-100 px-6 py-4 border-b-2 border-green-300">
                    <h3 class="text-2xl font-bold text-gray-900 flex items-center">
                        <span class="text-3xl mr-3">💬</span>
                        게임 피드백 추첨 (5명)
                    </h3>
                </div>
                <div class="p-6">
                    <p class="text-sm text-gray-600 mb-4">
                        소중한 피드백을 남겨주신 분들 중 5분을 추첨하였습니다.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-800">송이</p>
                            <p class="text-sm text-emerald-600">배민 상품권 1만원</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-800">sawweeee</p>
                            <p class="text-sm text-emerald-600">배민 상품권 1만원</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-800">순두부찌개는흐리멍텅</p>
                            <p class="text-sm text-emerald-600">배민 상품권 1만원</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-800">소영</p>
                            <p class="text-sm text-emerald-600">배민 상품권 1만원</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-800">떡볶이</p>
                            <p class="text-sm text-emerald-600">배민 상품권 1만원</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 pb-3 border-b-2 border-gray-200">📝 정보 제출 가이드</h2>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl mb-6">
            <h3 class="text-xl font-bold mb-4 text-gray-800">제출해야 할 정보</h3>
            <div class="space-y-4">
                <div class="flex items-start">
                    <span class="flex-shrink-0 min-w-[20px] w-5 h-5 border border-gray-800 text-gray-800 rounded-full flex items-center justify-center font-semibold text-xs mr-2">1</span>
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-1">게임 내 PID</h4>
                        <p class="text-sm text-gray-600">앱 실행 → 우측 상단 설정(⚙️) → 화면 상단의 PID 복사</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <span class="flex-shrink-0 min-w-[20px] w-5 h-5 border border-gray-800 text-gray-800 rounded-full flex items-center justify-center font-semibold text-xs mr-2">2</span>
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-1">내 정보창 스크린샷</h4>
                        <p class="text-sm text-gray-600">앱 내 왼쪽 위 버튼을 클릭하여 '내 정보' 화면 캡처 (닉네임, 점령 수 등 확인용)</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <span class="flex-shrink-0 min-w-[20px] w-5 h-5 border border-gray-800 text-gray-800 rounded-full flex items-center justify-center font-semibold text-xs mr-2">3</span>
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-1">개인 정보</h4>
                        <p class="text-sm text-gray-600">이름, 연락처(휴대폰), 배송 주소</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <span class="flex-shrink-0 min-w-[20px] w-5 h-5 border border-gray-800 text-gray-800 rounded-full flex items-center justify-center font-semibold text-xs mr-2">4</span>
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-1">학교 인증</h4>
                        <p class="text-sm text-gray-600">학생증 사본 또는 재학증명서 (경성대/부경대 재학 확인용)</p>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 pb-3 border-b-2 border-gray-200">❓ 자주 묻는 질문</h2>
        
        <div class="space-y-4 mb-8">
            <details class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary class="cursor-pointer p-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Q. 정보 제출은 어떻게 하나요?
                </summary>
                <div class="p-4 pt-0 text-gray-600">
                    <p>이 페이지 상단의 <strong>"구글폼에서 정보 제출하기"</strong> 버튼을 클릭하여 제출하시면 됩니다. 구글 로그인이 필요할 수 있습니다.</p>
                </div>
            </details>

            <details class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary class="cursor-pointer p-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Q. 경품은 언제 받을 수 있나요?
                </summary>
                <div class="p-4 pt-0 text-gray-600">
                    <p>정보 제출 마감일인 11월 14일 이후, <strong>11월 15일(금)부터 순차적으로 발송</strong>됩니다. 배송 현황은 제출하신 연락처로 개별 안내드립니다.</p>
                </div>
            </details>

            <details class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary class="cursor-pointer p-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Q. 제세공과금은 어떻게 처리하나요?
                </summary>
                <div class="p-4 pt-0 text-gray-600">
                    <p>5만 원을 초과하는 경품(아이패드, 에어팟, 버즈 등)은 <strong>제세공과금 22%</strong>가 부과됩니다. 당첨자 본인 부담이며, 세금 신고를 위해 신분증 사본 등 추가 서류가 필요합니다.</p>
                </div>
            </details>

            <details class="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary class="cursor-pointer p-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Q. PID는 어디서 확인하나요?
                </summary>
                <div class="p-4 pt-0 text-gray-600">
                    <p>한국지 앱 실행 → 우측 상단 <strong>설정 아이콘(⚙️)</strong> → 화면 상단에 표시된 <strong>PID를 길게 눌러 복사</strong>하실 수 있습니다.</p>
                </div>
            </details>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
            <h3 class="text-lg font-bold text-yellow-800 mb-2">📢 추가 안내사항</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>모든 경품은 당사 사정에 따라 동등 또는 유사한 가치의 상품으로 대체될 수 있습니다.</li>
                <li>참여자 한 명당 한 개 계정에 한하여 경품을 받을 수 있습니다.</li>
                <li>지역 상황에 따라 배송이 지연될 수 있으며, 주소 오류로 인한 반송/오배송은 재발송하지 않습니다.</li>
                <li>개인정보 제공 동의를 거부하시는 경우 당첨이 취소됩니다.</li>
            </ul>
        </div>

        <h2 class="text-2xl font-bold mb-4">📞 문의 안내</h2>
        <p class="text-gray-700 mb-2">
            당첨자 정보 제출 및 경품 수령과 관련된 문의사항은 아래 채널로 연락주시기 바랍니다.
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-8 ml-4">
            <li>이메일: <a href="mailto:jmy@doyakmin.com" class="text-emerald-600 hover:underline">jmy@doyakmin.com</a></li>
            <li>앱 내 문의하기 기능</li>
        </ul>

        <div class="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl text-center">
            <p class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">🎊 다시 한번 축하드립니다!</p>
            <p class="text-gray-600 text-lg">
                여러분의 열정이 만든 멋진 2개월이었습니다.<br/>
                앞으로도 한국지와 함께해주세요! 🎉
            </p>
        </div>

        <p class="text-center text-gray-500 mt-8">㈜도약민 한국지 운영팀 드림</p>
    `
};

