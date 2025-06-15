'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

export default function GameImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [currentX, setCurrentX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

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

    // 마우스/터치 이벤트 핸들러
    const handleStart = (clientX: number) => {
        setIsDragging(true)
        setStartX(clientX)
        setCurrentX(clientX)
        setDragOffset(0)
    }

    const handleMove = (clientX: number) => {
        if (!isDragging) return

        const diffX = clientX - startX
        setCurrentX(clientX)
        setDragOffset(diffX)
    }

    const handleEnd = () => {
        if (!isDragging) return

        const diffX = currentX - startX
        const threshold = 100 // 최소 드래그 거리

        if (diffX > threshold) {
            goToPrevious()
        } else if (diffX < -threshold) {
            goToNext()
        }

        setIsDragging(false)
        setStartX(0)
        setCurrentX(0)
        setDragOffset(0)
    }

    // 마우스 이벤트
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        handleStart(e.clientX)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        handleMove(e.clientX)
    }

    const handleMouseUp = () => {
        handleEnd()
    }

    // 터치 이벤트
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        handleStart(e.touches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault()
        handleMove(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        handleEnd()
    }

    // 이미지 위치 계산
    const getImageTransform = (imageIndex: number) => {
        const baseOffset = (imageIndex - currentImageIndex) * 100
        const realTimeDragOffset = isDragging ? (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100 : 0

        return `translateX(${baseOffset + realTimeDragOffset}%)`
    }

    return (
        <div className="order-1 lg:order-1 lg:col-span-2">
            <div
                ref={containerRef}
                className="relative group cursor-grab active:cursor-grabbing select-none overflow-hidden rounded-2xl"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* 이미지 컨테이너 */}
                <div className="relative w-full h-0 pb-[75%]"> {/* 4:3 비율 유지 */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                transform: getImageTransform(index),
                                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover pointer-events-none"
                                draggable={false}
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>
                    ))}
                </div>

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
                        />
                    ))}
                </div>

                {/* 드래그 힌트 */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10">
                    ← 드래그해서 넘기기 →
                </div>

            </div>
        </div>
    )
}