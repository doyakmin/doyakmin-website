import Link from 'next/link';
import Image from 'next/image';
import { hangukjiBetaEvent } from '@/content/news/hangukji-beta-event';
import { termsOfService } from '@/content/news/terms-of-service';
import { privacyPolicy } from '@/content/news/privacy-policy';
import { emergencyNotice20250909 } from '@/content/news/emergency-notice-2025-09-09';
import { antiCheatNotice20251006 } from '@/content/news/anti-cheat-notice-2025-10-06';

export default function NewsPage() {
    const allPosts = [antiCheatNotice20251006, emergencyNotice20250909, hangukjiBetaEvent, termsOfService, privacyPolicy].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen font-sans text-black bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-emerald-700/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            소식
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            도약민의 새로운 소식들을 확인해보세요
                        </p>
                    </div>
                </div>
            </section>

            {/* News List Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {allPosts.map((post) => (
                            <Link key={post.slug} href={`/news/${post.slug}`} className="block group">
                                <article className="p-8 border border-gray-200 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 mb-3">
                                                {post.title.split(/\n|\\n/).map((line, i, arr) => (
                                                    <span key={i}>
                                                        {line}
                                                        {i < arr.length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </h2>
                                            <p className="text-gray-500">
                                                {post.date} · {post.author}
                                            </p>
                                        </div>
                                        
                                        {/* 한국지 로고 */}
                                        {post.slug === 'hangukji-beta-event' && (
                                            <div className="ml-6 flex-shrink-0">
                                                <Image
                                                    src="/image/hankookji_logo_small.png"
                                                    alt="한국지 로고"
                                                    width={80}
                                                    height={80}
                                                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
} 