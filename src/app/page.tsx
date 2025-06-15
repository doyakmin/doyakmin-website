import Image from 'next/image'

export default function Home() {
  return (
      <main className="min-h-screen font-sans text-white bg-black">
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

          {/* Core Values Section */}
          <section className="relative py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Title */}
                  <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          핵심 가치
                      </h2>
                      <p className="mt-4 text-xl">GAMES MAKETH THE WORLD ANEW</p>
                  </div>

                  {/* Values Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                      {/* 유희 */}
                      <div className="group relative">
                          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-emerald-900/30 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/enjoy.jpg"
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
                          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-emerald-900/30 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-emerald-600/20">
                                  <Image
                                      src="/image/coprosperity.jpg"
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
                          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-emerald-900/30 rounded-2xl hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
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
      </main>
  );
}
