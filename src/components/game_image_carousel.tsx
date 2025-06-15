'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GameImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images: { src: string; alt: string }[] = [
        {
            src: "/image/game_introduce.jpg",
            alt: "한국지 게임 소개 이미지 1"
        },
        {
            src: "/image/game_introduce_2.png",
            alt: "한국지 게임 소개 이미지 2"
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
        <div className="order-1 lg:order-1 lg:col-span-2">
            <div className="relative group overflow-hidden rounded-2xl">
                {/* 이미지 컨테이너 */}
                <div className="relative w-full h-0 pb-[75%]"> {/* 4:3 비율 유지 */}
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
                                className="object-cover"
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
                             bg-black/70 text-white w-12 h-12 rounded-full
                             flex items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition-all duration-300
                             hover:bg-black/90 hover:scale-110
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
                             bg-black/70 text-white w-12 h-12 rounded-full
                             flex items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition-all duration-300
                             hover:bg-black/90 hover:scale-110
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
                                    ? 'bg-white'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`이미지 ${index + 1}로 이동`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}