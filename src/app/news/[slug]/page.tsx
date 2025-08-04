import { hangukjiBetaEvent } from '@/content/news/hangukji-beta-event';

// 향후 여러 공지사항을 관리할 것을 대비하여 배열로 만듭니다.
const allPosts = [hangukjiBetaEvent];

// slug에 해당하는 포스트를 찾는 함수
export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

function getPost(slug: string) {
    return allPosts.find((post) => post.slug === slug);
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug);

    if (!post) {
        return <div>공지사항을 찾을 수 없습니다.</div>;
    }

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
                <div
                    className="prose lg:prose-xl max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
} 