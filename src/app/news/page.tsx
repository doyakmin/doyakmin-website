import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { allNewsPosts } from '@/content/news'
import TranslatedText from '@/components/translated_text'
import { createSeoMetadata } from '@/lib/seo'

export const metadata: Metadata = createSeoMetadata({
    title: '소식 | 도약민',
    description: '한국지와 도약민의 업데이트, 이벤트, 공지사항을 확인할 수 있는 공식 소식 페이지입니다.',
    path: '/news',
    keywords: ['도약민 소식', '한국지 공지', '한국지 이벤트', '한국지 업데이트'],
})

export default function NewsPage() {
    return (
        <main className="bg-[#f4f7fb] text-[#111827]">
            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container">
                    <p className="game-eyebrow">News Room</p>
                    <h1 className="game-title mt-5">
                        <TranslatedText ko="소식" en="News" />
                    </h1>
                    <p className="game-readable mt-6 text-xl font-semibold leading-relaxed text-white/78">
                        <TranslatedText
                            ko="한국지와 도약민의 업데이트, 이벤트, 공지를 확인하세요."
                            en="Check updates, events, and notices from Hangukji and Doyakmin."
                        />
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="game-container">
                    <div className="grid grid-cols-1 gap-5">
                        {allNewsPosts.map((post) => (
                            <Link key={post.slug} href={`/news/${post.slug}`} className="group block">
                                <article className="game-card flex items-center justify-between gap-5 p-6 transition-transform group-hover:-translate-y-1">
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-[0.12em] text-[#0c7a90]">
                                            {post.date} · {post.author}
                                        </p>
                                        <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight">
                                            {post.title.split(/\n|\\n/).map((line, i, arr) => (
                                                <span key={i}>
                                                    {line}
                                                    {i < arr.length - 1 && <br />}
                                                </span>
                                            ))}
                                        </h2>
                                    </div>

                                    {post.slug === 'hangukji-beta-event' && (
                                        <Image
                                            src="/image/hankookji_logo_small.png"
                                            alt="한국지 로고"
                                            width={80}
                                            height={80}
                                            className="hidden h-20 w-20 rounded-2xl border-2 border-[#111827] object-cover sm:block"
                                        />
                                    )}
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
