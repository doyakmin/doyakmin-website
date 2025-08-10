import { hangukjiBetaEvent } from '@/content/news/hangukji-beta-event';
import { termsOfService } from '@/content/news/terms-of-service';
import { privacyPolicy } from '@/content/news/privacy-policy';
import AppDownloadButtons from '@/components/app_download_buttons';
import { notFound } from 'next/navigation';

const allPosts = [hangukjiBetaEvent, termsOfService, privacyPolicy];

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

function getPost(params: { slug: string }) {
    const post = allPosts.find((p) => p.slug === params.slug);
    return post;
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
    const post = getPost(params);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen font-sans text-black bg-white">
            <article className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                {/* Post Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {post.title.split('\\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < post.title.split('\\n').length - 1 && <br />}
                            </span>
                        ))}
                    </h1>
                    <p className="text-lg text-gray-500">
                        {post.date} · {post.author}
                    </p>
                </header>

                {/* Post Content */}
                <div className="prose lg:prose-xl max-w-none">
                    {post.slug === 'hangukji-beta-event' ? (
                        <>
                            {/* 이벤트 기간 */}
                            <div dangerouslySetInnerHTML={{ __html: post.content.split('<h2 class="text-2xl font-bold mb-4">🚀 참여 방법</h2>')[0] }} />
                            
                            {/* 참여 방법 섹션 */}
                            <h2 className="text-2xl font-bold mb-4">🚀 참여 방법</h2>
                            
                            {/* 다운로드 버튼 섹션 */}
                            <div className="bg-emerald-50 p-6 rounded-xl mb-6 not-prose">
                                <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
                                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4zm0 14h10v2H7v-2z"/>
                                        <circle cx="12" cy="18.5" r="1"/>
                                    </svg>
                                    한국지 앱 다운로드 (버튼 클릭)
                                </h3>
                                <div className="flex justify-center">
                                    <AppDownloadButtons />
                                </div>
                            </div>
                            
                            <ol className="list-decimal list-inside mb-6">
                                <li>위 버튼을 클릭하여 앱스토어에서 '한국지' 다운로드</li>
                                <li>GPS 사용 허용</li>
                                <li>닉네임 설정 및 회원가입</li>
                                <li>건물 점령, 보물찾기, PvP 대결 등 이벤트 콘텐츠에 참여</li>
                            </ol>
                            
                            {/* 나머지 컨텐츠 */}
                            <div dangerouslySetInnerHTML={{ __html: post.content.split('<h2 class="text-2xl font-bold mb-4">📢 당첨자 발표 및 정보 제출 안내</h2>')[1] ? '<h2 class="text-2xl font-bold mb-4">📢 당첨자 발표 및 정보 제출 안내</h2>' + post.content.split('<h2 class="text-2xl font-bold mb-4">📢 당첨자 발표 및 정보 제출 안내</h2>')[1] : '' }} />
                        </>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    )}
                </div>
            </article>
        </main>
    );
} 