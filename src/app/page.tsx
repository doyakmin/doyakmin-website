export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
          >
            <source src="/video/sample_video.mp4" className="" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold">도약민</h1>
            <p className="mt-4 text-lg">더 나은 도약을 위한 선택</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </section>

        {/* 소개 섹션 */}
        <section className="py-20 px-4 text-center bg-white text-black">
          <h2 className="text-3xl font-bold mb-6">무엇을 제공하나요?</h2>
          <p className="max-w-xl mx-auto">[여기에 기존 홈페이지의 소개 문구 복사]</p>
        </section>
      </main>
  );
}
