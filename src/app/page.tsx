import Image from 'next/image'

export default function Home() {
  return (
      <main className="min-h-screen font-sans text-black bg-white">
          {/* Hero Section */}
          <section className="relative w-full h-[70vh] sm:h-screen">
              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover object-[53%_center]"
              >
                  <source src="/video/hero_video.mp4" type="video/mp4" />
              </video>
          </section>

          {/* Core Values Section */}
          <section className="relative py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Title */}
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold  mb-6">
                          핵심 가치
                      </h2>
                      <p className="mt-6 text-2xl font-bold text-emerald-400">GAMES MAKETH THE WORLD ANEW</p>
                  </div>

                  {/* Values Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                      {/* 유희 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/enjoy.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  유희
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  유저들이 즐거움을 느껴야한다
                              </p>

                          </div>
                      </div>

                      {/* 상생 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/coprosperity.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>


                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  상생
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  사회에 이로운 영향을 끼쳐야 한다
                              </p>
                          </div>
                      </div>

                      {/* 지속 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/continuing.jpg"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  지속
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  유희와 상생이 계속해서 유지되어야 한다
                              </p>

                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-emerald-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold  mb-6">
                          게임 특징
                      </h2>
                      <p className="mt-4 text-lg text-gray-600">
                          한국지가 제공하는 특별한 기능들을 만나보세요.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {/* Feature 1: GPS 기반 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/gps.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  GPS 기반
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  실시간 위치 정보를 활용한 특별한 경험
                              </p>
                          </div>
                      </div>

                      {/* Feature 2: 오프라인 모드 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/offline.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  오프라인 모드
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  네트워크 연결이 불안정해도 게임 플레이 가능
                              </p>
                          </div>
                      </div>

                      {/* Feature 3: 다양한 게임 모드 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/gamemode.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  다양한 게임 모드
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  혼자 플레이하거나 여러 명과 함께 즐기기
                              </p>
                          </div>
                      </div>

                      {/* Feature 4: 개인화된 경험 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/personalization.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  개인화된 경험
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  사용자의 선호도에 맞춰 게임 콘텐츠 제공
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Vision Section */}
          <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold  mb-6">
                          비전
                      </h2>
                      <p className="mt-4 text-lg text-gray-600">
                          한국지가 제공하는 특별한 기능들을 만나보세요.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {/* Feature 1: GPS 기반 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/gps.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  GPS 기반
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  실시간 위치 정보를 활용한 특별한 경험
                              </p>
                          </div>
                      </div>

                      {/* Feature 2: 오프라인 모드 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/offline.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  오프라인 모드
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  네트워크 연결이 불안정해도 게임 플레이 가능
                              </p>
                          </div>
                      </div>

                      {/* Feature 3: 다양한 게임 모드 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/gamemode.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  다양한 게임 모드
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  혼자 플레이하거나 여러 명과 함께 즐기기
                              </p>
                          </div>
                      </div>

                      {/* Feature 4: 개인화된 경험 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gray-900 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/personalization.png"
                                      alt="doyakmin enjoy"
                                      width={192}
                                      height={192}
                                      className="w-full h-full object-cover rounded-2xl"
                                  />
                              </div>

                              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center group-hover:text-emerald-300 transition-colors">
                                  개인화된 경험
                              </h3>

                              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                                  사용자의 선호도에 맞춰 게임 콘텐츠 제공
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  );
}
