import type { Metadata } from "next";
import Link from "next/link";
import GoogleSheetContactForm from "@/components/google_sheet_contact_form";

export const metadata: Metadata = {
  title: "Walkerholic 지원 | 도약민",
  description: "Walkerholic 앱 고객지원, 문의 접수, 개인정보처리방침, 계정 삭제 안내 페이지입니다.",
};

export default function WalkerholicSupportPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <section className="bg-emerald-700/20 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Walkerholic 고객지원</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-700 md:text-base">
            앱 사용 중 문의사항이나 오류 제보가 있으시면 아래 채널로 접수해주세요.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">지원 정보</h2>
            <div className="mt-4 space-y-2 text-sm text-gray-700 md:text-base">
              <p>
                <span className="font-semibold">이메일:</span> jmy@doyakmin.com
              </p>
              <p>
                <span className="font-semibold">전화:</span> 0507-1341-5455
              </p>
              <p>
                <span className="font-semibold">운영:</span> 평일 10:00 - 18:00
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">필수 링크</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm md:text-base">
              <Link href="/privacy" className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
                개인정보처리방침
              </Link>
              <Link
                href="/delete-account/namgu"
                className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
              >
                계정 삭제 요청
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">문의 등록</h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              제출된 문의는 운영진에게 전달되며, 확인 후 순차적으로 답변드립니다.
            </p>
            <GoogleSheetContactForm service="walkerholic-support" className="mt-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
