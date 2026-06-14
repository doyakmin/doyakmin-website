import type { Metadata } from 'next';
import { allNewsPosts } from '@/content/news';
import AppDownloadButtons from '@/components/app_download_buttons';
import CountdownTimer from '@/components/countdown_timer';
import { createSeoMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return allNewsPosts.map((post) => ({
        slug: post.slug,
    }));
}

function getPost(params: { slug: string }) {
    const post = allNewsPosts.find((p) => p.slug === params.slug);
    return post;
}

function stripHtml(html: string) {
    return html
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = getPost(params);

    if (!post) {
        return createSeoMetadata({
            title: '소식을 찾을 수 없습니다 | 도약민',
            description: '요청하신 도약민 소식 페이지를 찾을 수 없습니다.',
            path: `/news/${params.slug}`,
            noIndex: true,
        });
    }

    const description = post.summary || stripHtml(post.content).slice(0, 150);

    return createSeoMetadata({
        title: `${post.title.replace(/\\n|\n/g, ' ')} | 도약민 소식`,
        description,
        path: `/news/${post.slug}`,
        image: post.slug === 'hangukji-beta-event' ? '/image/event/hangukji-beta-event-poster.jpg' : '/og-doyakmin-card-v3.jpg',
        keywords: ['도약민 공지', '한국지 공지', post.title.replace(/\\n|\n/g, ' ')],
    });
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
    const post = getPost(params);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-[#f4f7fb] text-[#111827]">
            <article className="game-container py-20">
                {/* Post Header */}
                <header className="game-card mb-10 p-8 text-center md:p-12">
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-[#0c7a90]">
                        {post.date} · {post.author}
                    </p>
                    <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl">
                        {(() => {
                            const titleLines = post.title.split(/\n|\\n/);
                            return titleLines.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < titleLines.length - 1 && <br />}
                                </span>
                            ));
                        })()}
                    </h1>
                </header>

                {/* Post Content */}
                <div className="prose max-w-none rounded-[28px] border-2 border-[#111827] bg-white p-6 md:p-10 lg:prose-xl">
                    {post.slug === 'hangukji-beta-event' ? (
                        <>
                            {/* 이벤트 기간 */}
                            <div dangerouslySetInnerHTML={{ __html: post.content.split('<h2 class="text-2xl font-bold mb-4">🚀 참여 방법</h2>')[0] }} />
                            
                            {/* 참여 방법 섹션 */}
                            <h2 className="text-2xl font-bold mb-4">🚀 참여 방법</h2>
                            
                            {/* 다운로드 버튼 섹션 */}
                            <div className="mb-6 rounded-[24px] border-2 border-[#111827] bg-[#b7ff2a]/35 p-6 not-prose">
                                <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
                                    <svg className="w-6 h-6 text-[#111827]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    ) : post.slug === 'winner-announcement-2025-11-09' ? (
                        <>
                            {/* 카운트다운 타이머 전까지 */}
                            <div dangerouslySetInnerHTML={{ __html: post.content.split('<div id="countdown-timer-container"')[0] }} />
                            
                            {/* 카운트다운 타이머 컴포넌트 */}
                            <div className="mb-8 not-prose">
                                <CountdownTimer 
                                    targetDate="2025-11-14T23:59:59+09:00"
                                />
                            </div>
                            
                            {/* 나머지 컨텐츠 */}
                            <div dangerouslySetInnerHTML={{ __html: post.content.split('</div>').slice(post.content.split('</div>').findIndex(part => part.includes('countdown-timer-container')) + 1).join('</div>') }} />
                        </>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    )}
                </div>
            </article>
        </main>
    );
}
