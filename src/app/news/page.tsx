import Link from 'next/link'
import Image from 'next/image'
import { hangukjiBetaEvent } from '@/content/news/hangukji-beta-event'
import { termsOfService } from '@/content/news/terms-of-service'
import { privacyPolicy } from '@/content/news/privacy-policy'
import { emergencyNotice20250909 } from '@/content/news/emergency-notice-2025-09-09'
import { antiCheatNotice20251006 } from '@/content/news/anti-cheat-notice-2025-10-06'
import { abnormalLogoutNotice20251023 } from '@/content/news/abnormal-logout-notice-2025-10-23'
import { unPeaceFestival20251025 } from '@/content/news/un-peace-festival-2025-10-25'
import { eventEndNotice20251107 } from '@/content/news/event-end-notice-2025-11-07'
import { winnerAnnouncement20251109 } from '@/content/news/winner-announcement-2025-11-09'

export default function NewsPage() {
    const allPosts = [
        winnerAnnouncement20251109,
        eventEndNotice20251107,
        unPeaceFestival20251025,
        abnormalLogoutNotice20251023,
        antiCheatNotice20251006,
        emergencyNotice20250909,
        hangukjiBetaEvent,
        termsOfService,
        privacyPolicy,
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <main className="bg-[#f4f7fb] text-[#111827]">
            <section className="bg-[#07111f] py-24 text-white">
                <div className="game-container">
                    <p className="game-eyebrow">News Room</p>
                    <h1 className="game-title mt-5">소식</h1>
                    <p className="game-readable mt-6 text-xl font-semibold leading-relaxed text-white/78">
                        한국지와 도약민의 업데이트, 이벤트, 공지를 확인하세요.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="game-container">
                    <div className="grid grid-cols-1 gap-5">
                        {allPosts.map((post) => (
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
