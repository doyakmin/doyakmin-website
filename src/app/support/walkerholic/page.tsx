import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, ShieldCheck, Trash2 } from 'lucide-react';
import GoogleSheetContactForm from '@/components/google_sheet_contact_form';

export const metadata: Metadata = {
  title: 'walker홀릭 고객지원 | 도약민',
  description: 'walker홀릭 앱 고객지원, 문의 접수, 개인정보처리방침, 계정 삭제 안내를 제공하는 도약민 공식 지원 페이지입니다.',
  alternates: {
    canonical: 'https://doyakmin.com/support/walkerholic',
  },
};

export default function WalkerholicSupportPage() {
  return (
    <main className="bg-[#f4f7fb] text-[#111827]">
      <section className="bg-[#07111f] py-24 text-white">
        <div className="game-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="game-eyebrow">Support</p>
            <h1 className="game-heading mt-5">walker홀릭 고객지원</h1>
            <p className="game-readable mt-6 text-lg font-semibold leading-relaxed text-white/78">
              앱 사용 중 문의사항이나 오류 제보가 있으시면 아래 채널로 접수해주세요.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="game-tag">walker홀릭</span>
              <span className="game-tag">Customer Care</span>
            </div>
          </div>

          <div className="game-card-dark p-6 text-white md:p-8">
            <h2 className="text-2xl font-black">지원 정보</h2>
            <div className="mt-6 space-y-4 text-sm font-semibold text-white/72">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#b7ff2a]" strokeWidth={2.6} />
                jmy@doyakmin.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#b7ff2a]" strokeWidth={2.6} />
                0507-1341-5455
              </p>
              <p className="font-bold leading-relaxed">운영 시간: 평일 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="game-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-5">
            <div className="game-card p-6">
              <h2 className="text-2xl font-black">필수 링크</h2>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/privacy"
                  className="flex items-center gap-3 rounded-2xl border-2 border-[#111827] bg-white px-4 py-3 text-sm font-black transition-colors hover:bg-[#b7ff2a]"
                >
                  <ShieldCheck className="h-5 w-5" strokeWidth={2.6} />
                  개인정보처리방침
                </Link>
                <Link
                  href="/delete-account/namgu"
                  className="flex items-center gap-3 rounded-2xl border-2 border-[#111827] bg-white px-4 py-3 text-sm font-black transition-colors hover:bg-[#b7ff2a]"
                >
                  <Trash2 className="h-5 w-5" strokeWidth={2.6} />
                  계정 삭제 요청
                </Link>
              </div>
            </div>
          </aside>

          <div className="game-card p-6 md:p-8">
            <p className="text-sm font-black tracking-[0.16em] text-[#0c7a90]">Inquiry</p>
            <h2 className="mt-3 text-3xl font-black">문의 등록</h2>
            <p className="mt-4 text-sm font-bold leading-relaxed text-[#526071] md:text-base">
              제출된 문의는 운영진에게 전달되며, 확인 후 순차적으로 답변드립니다.
            </p>
            <GoogleSheetContactForm service="walkerholic-support" className="mt-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
