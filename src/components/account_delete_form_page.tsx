'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Trash2 } from 'lucide-react';

type AccountDeleteField = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

type AccountDeleteFormPageProps = {
  service: string;
  serviceLabel: string;
  title: string;
  description: string;
  accentLabel?: string;
  fields: AccountDeleteField[];
  links: Array<{
    href: string;
    label: string;
  }>;
};

const scriptURL =
  'https://script.google.com/macros/s/AKfycbwrSjpeg7-No6w80JlBIF872vKnSQdmXl_KsKMN0lIx1Xq7ctbcfKO48ObzYd-5d-Ru/exec';

export default function AccountDeleteFormPage({
  service,
  serviceLabel,
  title,
  description,
  accentLabel = 'Account Deletion',
  fields,
  links,
}: AccountDeleteFormPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setMessage('요청이 정상적으로 접수되었습니다. 영업일 기준 7일 이내 처리 후 안내드리겠습니다.');
        event.currentTarget.reset();
      } else {
        throw new Error(result.message || '알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setMessage(`오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = message.includes('정상적으로');

  return (
    <main className="bg-[#f4f7fb] text-[#111827]">
      <section className="bg-[#07111f] py-24 text-white">
        <div className="game-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="game-eyebrow">{accentLabel}</p>
            <h1 className="game-heading mt-5">{title}</h1>
            <p className="game-readable mt-6 text-lg font-semibold leading-relaxed text-white/78">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="game-tag">{serviceLabel}</span>
              <span className="game-tag">7 business days</span>
            </div>
          </div>

          <div className="game-card-dark p-6 text-white md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-white/20 bg-[#b7ff2a] text-[#111827]">
                <ShieldCheck className="h-6 w-6" strokeWidth={2.6} />
              </div>
              <div>
                <h2 className="text-2xl font-black">처리 전 확인</h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/68">
                  계정 삭제가 완료되면 계정 정보와 서비스 이용 기록은 복구할 수 없습니다. 접수 후 처리 결과는 입력하신 연락처로 안내됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="game-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="space-y-5">
            <div className="game-card p-6">
              <p className="text-sm font-black tracking-[0.16em] text-[#0c7a90]">SERVICE</p>
              <h2 className="mt-3 text-3xl font-black">{serviceLabel}</h2>
              <p className="mt-4 text-sm font-bold leading-relaxed text-[#526071]">
                다른 서비스 삭제 요청으로 이동하려면 아래 링크를 이용해주세요.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border-2 border-[#111827] bg-white px-4 py-3 text-sm font-black transition-colors hover:bg-[#b7ff2a]"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="game-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Trash2 className="h-7 w-7 text-[#0c7a90]" strokeWidth={2.6} />
              <h2 className="text-2xl font-black md:text-3xl">삭제 요청 정보</h2>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="service" value={service} />

              {fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-sm font-black text-[#111827]">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="block w-full rounded-2xl border-2 border-[#111827] bg-white px-4 py-3 text-sm font-bold shadow-none focus:outline-none focus:ring-4 focus:ring-[#b7ff2a]/60"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <label className="flex items-start gap-3 rounded-2xl border-2 border-[#111827] bg-[#f4f7fb] p-4 text-sm font-bold leading-relaxed">
                <input
                  id="privacy-agree"
                  name="privacy-agree"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-[#111827] text-[#0c7a90] focus:ring-[#b7ff2a]"
                />
                계정 삭제 처리를 위한 개인정보 수집 및 이용에 동의합니다.
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="game-button w-full disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
              >
                {isSubmitting ? '처리 중...' : '계정 삭제 요청하기'}
              </button>
            </form>

            {message && (
              <div
                className={`mt-6 rounded-2xl border-2 p-4 text-sm font-bold ${
                  isSuccess ? 'border-[#111827] bg-[#b7ff2a]/40 text-[#111827]' : 'border-red-500 bg-red-50 text-red-700'
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
