'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DeleteAccountNamguPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);

    // ⚠️ 중요: 기존 /delete-account와 동일한 Apps Script 웹 앱 URL을 사용합니다.
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwrSjpeg7-No6w80JlBIF872vKnSQdmXl_KsKMN0lIx1Xq7ctbcfKO48ObzYd-5d-Ru/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setMessage('요청이 성공적으로 접수되었습니다. 7일 이내에 처리 후 안내해 드리겠습니다.');
        (event.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || '알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error!', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      setMessage(`오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">계정 삭제 요청 (남구 앱 Walkerholic)</h1>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-600">
              <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-800">Walkerholic</span>
              <span className="text-gray-400">|</span>
              <Link href="/delete-account" className="underline underline-offset-4 hover:text-emerald-700">
                다른 서비스(한국지)로 이동
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-8">
            <p className="mb-6 text-gray-600">
              남구 앱 Walkerholic 서비스의 계정 삭제를 원하시면 아래 정보를 입력해주세요.
              <br />
              접수 후 영업일 기준 7일 이내에 처리되며, 완료 시 입력하신 이메일로 안내해 드립니다.
              <br />
              <strong className="font-semibold text-red-600">
                계정이 삭제되면 모든 개인 정보와 활동 기록이 영구적으로 삭제되며 복구할 수 없습니다.
              </strong>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <input type="hidden" name="service" value="namgu-walkerholic" />

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    이메일 주소 (가입/로그인 시 사용한 이메일)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    placeholder="your-email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="nickname" className="mb-2 block text-sm font-medium text-gray-700">
                    닉네임/사용자명
                  </label>
                  <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    placeholder="앱에서 사용하는 닉네임/사용자명"
                  />
                </div>

                <div>
                  <label htmlFor="uid" className="mb-2 block text-sm font-medium text-gray-700">
                    UID (선택사항)
                  </label>
                  <input
                    type="text"
                    name="uid"
                    id="uid"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    placeholder="앱 설정 화면 등에서 확인 가능한 경우 입력"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    휴대폰 번호 (선택사항)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    placeholder="010-1234-5678"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy-agree"
                    name="privacy-agree"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="privacy-agree" className="ml-2 block text-sm text-gray-900">
                    계정 삭제 처리를 위한 개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {isSubmitting ? '처리 중...' : '계정 삭제 요청하기'}
                </button>
              </div>
            </form>
            {message && (
              <div
                className={`mt-6 rounded-md p-4 ${
                  message.includes('성공') ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'
                }`}
              >
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
