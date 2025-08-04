import { hangukjiBetaEvent } from '@/content/news/hangukji-beta-event';

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
                <div
                    className="prose lg:prose-xl max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
} 