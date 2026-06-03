'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GameImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images: { src: string; alt: string }[] = [
        {
            src: "/image/hangukji/feature-training.png",
            alt: "한국지 이 고을을 차지하라 홍보 이미지"
        },
        {
            src: "/image/hangukji/hero-conquer.png",
            alt: "한국지 실제 지도 점령 플레이 화면"
        },
        {
            src: "/image/hangukji/phone-tutorial.png",
            alt: "한국지 모바일 튜토리얼 화면"
        },
        {
            src: "/image/hangukji/gameplay-map.png",
            alt: "한국지 실제 상점 쿠폰 발급 화면"
        },
        {
            src: "/image/hangukji/feature-coupon.png",
            alt: "한국지 전통놀이 훈련 화면"
        },
        {
            src: "/image/hangukji/feature-ranking.png",
            alt: "한국지 랭킹 순위 화면"
        }
    ]

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    // 이미지 위치 계산
    const getImageTransform = (imageIndex: number) => {
        const baseOffset = (imageIndex - currentImageIndex) * 100
        return `translateX(${baseOffset}%)`
    }

    return (
        <div className="w-full">
            <div className="game-card-dark group relative overflow-hidden p-3">
                {/* 이미지 컨테이너 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-white">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                transform: getImageTransform(index),
                                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-contain"
                                draggable={false}
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>
                    ))}
                </div>

                {/* 이전 버튼 */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2
                             bg-[#111827]/80 text-white w-12 h-12 rounded-2xl border-2 border-white/20
                             flex items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition-all duration-300
                             hover:bg-[#111827] hover:scale-105
                             backdrop-blur-sm z-10"
                    aria-label="이전 이미지"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* 다음 버튼 */}
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2
                             bg-[#111827]/80 text-white w-12 h-12 rounded-2xl border-2 border-white/20
                             flex items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition-all duration-300
                             hover:bg-[#111827] hover:scale-105
                             backdrop-blur-sm z-10"
                    aria-label="다음 이미지"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentImageIndex === index
                                    ? 'bg-[#b7ff2a]'
                                    : 'bg-white/60 hover:bg-white'
                            }`}
                            aria-label={`이미지 ${index + 1}로 이동`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
