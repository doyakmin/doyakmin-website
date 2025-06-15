export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white font-sans">
        {/* Hero Section */}
          <section className="relative w-full h-screen overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                  <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover object-center"
                  >
                      <source src="/video/hero_video.mp4" type="video/mp4" />
                  </video>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

              <div className="relative z-20 text-center text-white">
                  <h1 className="text-5xl font-bold">도약민</h1>
                  <p className="mt-4 text-lg">GAMES MAKETH THE WORLD ANEW</p>
              </div>
          </section>

        {/* 소개 섹션 */}
        <section className="py-20 px-4 text-center bg-white text-black">
          <h2 className="text-3xl font-bold mb-6">무엇을 제공하나요?</h2>
          <p className="max-w-xl mx-auto">[여기에 기존 홈페이지의 소개 문구 복사]</p>
        </section>
      </main>
  );
}
