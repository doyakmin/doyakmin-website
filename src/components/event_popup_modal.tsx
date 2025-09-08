'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'

interface EventPopupModalProps {
  isEnabled?: boolean // 팝업 활성화 여부 (개발/운영 환경 분리용)
}

const STORAGE_KEY = 'doyakmin_event_popup_hidden_until'
const HIDE_DURATION = 24 * 60 * 60 * 1000 // 24시간 (밀리초)

export default function EventPopupModal({ isEnabled = true }: EventPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // 클라이언트 사이드에서만 실행되도록 보장
  useEffect(() => {
    setMounted(true)
  }, [])

  // localStorage 체크 및 팝업 표시 결정
  useEffect(() => {
    if (!mounted || !isEnabled) return

    const checkShouldShowPopup = () => {
      try {
        const hiddenUntil = localStorage.getItem(STORAGE_KEY)
        
        if (!hiddenUntil) {
          // 처음 방문 시 팝업 표시
          setIsOpen(true)
          return
        }

        const hiddenUntilTime = parseInt(hiddenUntil, 10)
        const currentTime = Date.now()

        if (currentTime > hiddenUntilTime) {
          // 숨기기 기간이 만료된 경우 팝업 표시
          setIsOpen(true)
        }
      } catch (error) {
        console.error('EventPopup: localStorage 오류', error)
        // localStorage 오류 시에도 팝업 표시 (안전장치)
        setIsOpen(true)
      }
    }

    // 약간의 딜레이를 두어 사용자 경험 개선
    const timer = setTimeout(checkShouldShowPopup, 500)
    return () => clearTimeout(timer)
  }, [mounted, isEnabled])

  // 모달 닫기 (단순 닫기)
  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  // 1일 동안 보지 않기
  const handleHideForDay = useCallback(() => {
    try {
      const hideUntil = Date.now() + HIDE_DURATION
      localStorage.setItem(STORAGE_KEY, hideUntil.toString())
      setIsOpen(false)
    } catch (error) {
      console.error('EventPopup: localStorage 저장 오류', error)
      // localStorage 저장 실패해도 팝업은 닫기
      setIsOpen(false)
    }
  }, [])

  // ESC 키 처리
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
      // 모달이 열릴 때 body 스크롤 방지
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleClose])

  // SSR 방지 및 조건부 렌더링
  if (!mounted || !isOpen) return null

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-popup-title"
      aria-describedby="event-popup-description"
    >
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden transform transition-all">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          aria-label="팝업 닫기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 헤더 배너 (긴급 공지) */}
        <div className="relative bg-red-600 text-white text-center py-3">
          <span className="text-sm font-semibold">긴급 공지</span>
        </div>
        

        {/*
        이벤트 포스터 이미지 (임시 비노출 - 필요 시 아래 주석 해제)
        <div className="relative">
          <Image
            src="/image/event/hangukji-beta-event-poster.png"
            alt="한국지 베타 이벤트 포스터 - 경성대·부경대 대상"
            width={400}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
        */}

        {/* 텍스트 정보 */}
        <div className="p-6">
          <h2 
            id="event-popup-title"
            className="text-xl font-bold text-gray-900 mb-2"
          >
            🚨 서비스 점검 안내
          </h2>
          <p 
            id="event-popup-description"
            className="text-gray-600 text-sm mb-4"
          >
            치명적인 오류를 확인하여 즉시 점검 중입니다. 현재 <strong>iOS, Android 서비스가 임시 중단</strong>되었으며,<br />
            <strong>오늘 오후 10시</strong> 전후 복구를 목표로 하고 있습니다(변동 시 즉시 재공지).
          </p>

          {/* 액션 버튼들 */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/news/emergency-notice-2025-09-08"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              onClick={handleClose}
            >
              긴급공지 보기
            </Link>
            
            <div className="flex space-x-2">
              <button
                onClick={handleClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
              >
                닫기
              </button>
              <button
                onClick={handleHideForDay}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
              >
                1일간 보지 않기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
} 