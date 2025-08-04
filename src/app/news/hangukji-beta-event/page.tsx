import { hangukjiBetaEvent } from '@/content/news/hangukji-beta-event';
import AppDownloadButtons from '@/components/app_download_buttons';

export default function NewsDetailPage() {
    const post = hangukjiBetaEvent;

    return (
        <main className="min-h-screen font-sans text-black bg-white">
            <article className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                {/* Post Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {post.title.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < post.title.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </h1>
                    <p className="text-lg text-gray-500">
                        {post.date} · {post.author}
                    </p>
                </header>

                {/* Post Content */}
                <div className="prose lg:prose-xl max-w-none">
                    {/* 이벤트 기간 */}
                    <div dangerouslySetInnerHTML={{ __html: post.content.split('<h2 class="text-2xl font-bold mb-4">🚀 참여 방법</h2>')[0] }} />
                    
                    {/* 참여 방법 섹션 */}
                    <h2 className="text-2xl font-bold mb-4">🚀 참여 방법</h2>
                    
                    {/* 다운로드 버튼 섹션 */}
                    <div className="bg-emerald-50 p-6 rounded-xl mb-6 not-prose">
                        <h3 className="text-lg font-semibold mb-4 text-center">📱 한국지 앱 다운로드</h3>
                        <div className="flex justify-center">
                            <AppDownloadButtons />
                        </div>
                    </div>
                    
                    <ol className="list-decimal list-inside mb-6">
                        <li>위 버튼을 클릭하여 앱스토어에서 '한국지' 다운로드</li>
                        <li>앱 다운로드 후 설치</li>
                        <li>GPS 사용 허용</li>
                        <li>닉네임 설정 및 회원가입</li>
                        <li>건물 점령, 보물찾기, PvP 대결 등 이벤트 콘텐츠에 참여</li>
                    </ol>
                    
                    {/* 나머지 컨텐츠 */}
                    <div dangerouslySetInnerHTML={{ __html: post.content.split('<h2 class="text-2xl font-bold mb-4">📢 당첨자 발표 및 정보 제출 안내</h2>')[1] ? '<h2 class="text-2xl font-bold mb-4">📢 당첨자 발표 및 정보 제출 안내</h2>' + post.content.split('<h2 class="text-2xl font-bold mb-4">📢 당첨자 발표 및 정보 제출 안내</h2>')[1] : '' }} />
                </div>
            </article>
        </main>
    );
} 