export default function Home() {
  return (
      <main className="min-h-screen font-sans text-white">
          {/* Hero Section */}
          <section className="relative w-full h-screen">
              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover object-[center_40%]"
              >
                  <source src="/video/hero_video.mp4" type="video/mp4" />
              </video>
          </section>
          <section>
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
                  <h1 className="text-5xl font-bold">도약민</h1>
                  <p className="mt-4 text-lg">더 나은 도약을 위한 선택</p>
              </div>
          </section>
      </main>
  );
}
