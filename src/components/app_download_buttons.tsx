'use client'

import { useState } from 'react'
import Image from 'next/image'

interface AppDownloadButtonsProps {
  className?: string
}

export default function AppDownloadButtons({ className = "" }: AppDownloadButtonsProps) {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)

  // Google Play 링크
  const googlePlayLink = "https://play.google.com/store/apps/details?id=com.doyakmin.hangookji"
  // iOS 사전예약 폼 링크
  const appleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSczC4CBOK6-yOHc2YcHai11Gz4Nh0M_BMKs1XE_sIBUf66enQ/viewform?usp=header"

  const handleAppleStoreClick = () => {
    // setShowComingSoonModal(true)
    const opened = window.open(appleFormLink, '_blank', 'noopener,noreferrer')
    if (!opened) {
      window.location.href = appleFormLink
    }
  }

  const handleGooglePlayClick = () => {
    window.open(googlePlayLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Apple Store 버튼 */}
      <button
        onClick={handleAppleStoreClick}
        className="transition-transform hover:scale-105 hover:shadow-lg"
        aria-label="iOS 사전예약 폼으로 이동"
      >
        <Image
          src="/image/download/download_apple.png"
          alt="iOS 사전예약 폼으로 이동"
          width={140}
          height={42}
          className="h-10 w-auto"
        />
      </button>

      {/* Google Play 버튼 */}
      <button
        onClick={handleGooglePlayClick}
        className="transition-transform hover:scale-105 hover:shadow-lg"
        aria-label="Google Play에서 한국지 다운로드"
      >
        <Image
          src="/image/download/download_googleplay.png"
          alt="Google Play에서 다운로드"
          width={140}
          height={42}
          className="h-10 w-auto"
        />
      </button>

      {/* 준비중 모달 */}
      {showComingSoonModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={() => setShowComingSoonModal(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-4">
                <span className="text-4xl">🍎</span>
              </div>
              <h3 className="text-lg font-bold mb-2">App Store 출시 준비중</h3>
              <p className="text-gray-600 mb-4">
                iOS 버전은 현재 개발 중입니다.<br />
                조금만 더 기다려주세요!
              </p>
              <button
                onClick={() => setShowComingSoonModal(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
