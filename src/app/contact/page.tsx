import Image from "next/image";
import Map from "@/components/map";
import GoogleSheetContactForm from "@/components/google_sheet_contact_form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-black">
      {/* Hero Section */}
      <section className="relative bg-emerald-700/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">문의하기</h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              도약민에 대한 문의사항이나 협업 제안이 있으시다면 언제든 연락해 주세요
            </p>
          </div>
        </div>
      </section>

      {/* 문의 접수 폼 */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">온라인 문의 접수</h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              아래 폼으로 문의를 남기시면 운영진에게 전달되어 확인 후 안내드립니다.
            </p>
            <GoogleSheetContactForm service="website-contact" className="mt-8" />
          </div>
        </div>
      </section>

      {/* 연락처 & 커뮤니티 */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">연락처 & 커뮤니티</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-blue-300"></div>
          </div>

          <div className="space-y-12 text-center">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-emerald-600">연락처</h3>
              <div className="space-y-3 text-lg">
                <p>
                  <span className="font-semibold">✉️이메일:</span> jmy@doyakmin.com
                </p>
                <p>
                  <span className="font-semibold">📞전화:</span> 0507-1341-5455
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-emerald-600">한국지 커뮤니티</h3>
              <p className="mb-4 text-lg">게임 소식과 공략을 확인하고 다른 플레이어들과 소통해보세요</p>
              <a
                href="https://cafe.naver.com/hangukji"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center space-x-2 rounded-lg bg-[#00c73c] px-6 py-3 text-lg font-semibold text-white"
              >
                <Image src="/image/naver_cafe.png" alt="네이버카페 로고" width={24} height={24} />
                <span>한국지 네이버 카페 방문하기</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 찾아오시는 길 */}
      <section className="bg-emerald-700/20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">찾아오시는 길</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-blue-300"></div>
          </div>

          <div className="mb-12 text-center">
            <p className="mb-4 text-xl font-semibold">부산광역시 강서구 명지오션시티9로 50, 103호</p>
            <p className="mt-2 text-gray-600">방문 전 사전 연락 부탁드립니다</p>
          </div>

          <div>
            <Map />
          </div>
        </div>
      </section>
    </main>
  );
}
