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

// Phase 정의
type PopupPhase = 'prize-claim-guide' | 'event-end' | 'winner-announcement' | 'prize-shipping'

// 현재 날짜 기반으로 Phase 결정
function getCurrentPhase(): PopupPhase {
  const now = new Date()
  const eventEndDate = new Date('2025-11-07T23:59:59+09:00')
  const eventEndNoticeDate = new Date('2025-11-08T00:00:00+09:00')
  const winnerAnnouncementDate = new Date('2025-11-09T00:00:00+09:00')
  const prizeShippingDate = new Date('2025-11-17T00:00:00+09:00')

  if (now < eventEndDate) {
    return 'prize-claim-guide' // 지금 ~ 11.07: 경품 수령 안내
  } else if (now >= eventEndNoticeDate && now < winnerAnnouncementDate) {
    return 'event-end' // 11.08 ~ 11.09: 종료 안내
  } else if (now >= winnerAnnouncementDate && now < prizeShippingDate) {
    return 'winner-announcement' // 11.09 ~ 11.16: 당첨자 발표
  } else {
    return 'prize-shipping' // 11.17 ~: 경품 발송 시작
  }
}

export default function EventPopupModal({ isEnabled = true }: EventPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<PopupPhase>('prize-claim-guide')

  // 클라이언트 사이드에서만 실행되도록 보장
  useEffect(() => {
    setMounted(true)
    setCurrentPhase(getCurrentPhase())
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
          setCurrentPhase(getCurrentPhase())
          return
        }

        const hiddenUntilTime = parseInt(hiddenUntil, 10)
        const currentTime = Date.now()

        if (currentTime > hiddenUntilTime) {
          // 숨기기 기간이 만료된 경우 팝업 표시
          setIsOpen(true)
          setCurrentPhase(getCurrentPhase())
        }
      } catch (error) {
        console.error('EventPopup: localStorage 오류', error)
        // localStorage 오류 시에도 팝업 표시 (안전장치)
        setIsOpen(true)
        setCurrentPhase(getCurrentPhase())
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

        {/*
        이벤트 포스터 이미지 (임시 비노출)
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

        {/* 텍스트 정보 - Phase별 다른 컨텐츠 */}
        <div className="p-6">
          <h2 
            id="event-popup-title"
            className="text-xl font-bold text-gray-900 mb-2"
          >
            🔐 로그인 이용 안내
          </h2>
          <p 
            id="event-popup-description"
            className="text-gray-600 text-sm mb-4"
          >
            한국지를 이용해 주셔서 정말 감사합니다.<br />
            현재 <strong>게스트 로그인만 이용 가능</strong>합니다.<br />
            구글, 애플 계정 로그인 연동 시 바로 안내드릴게요.
          </p>

          {/* 액션 버튼들 */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/news/emergency-notice-2025-09-09"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              onClick={handleClose}
            >
              자세히 보기
            </Link>
            
            <div className="flex space-x-2">
              <button
                onClick={handleClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
              >
                🎁 베타 이벤트 경품 수령 안내
              </h2>
              <p 
                id="event-popup-description"
                className="text-gray-600 text-sm mb-4"
              >
                경성대·부경대 베타 이벤트가<br />
                곧 종료됩니다! (11월 7일 23:59)<br /><br />
                🎊 <strong>당첨자 명단은 11월 9일 (일) 이내</strong><br />
                공식 홈페이지를 통해 발표될 예정입니다.<br /><br />
                📝 당첨자 확인 후 정보 제출 부탁드립니다!
              </p>

              {/* 액션 버튼들 */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="/news/hangukji-beta-event"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                  onClick={handleClose}
                >
                  이벤트 자세히 보기
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
            </>
          )}

          {currentPhase === 'event-end' && (
            <>
              <h2 
                id="event-popup-title"
                className="text-xl font-bold text-gray-900 mb-2"
              >
                🎊 베타 이벤트 종료 안내
              </h2>
              <p 
                id="event-popup-description"
                className="text-gray-600 text-sm mb-4"
              >
                경성대·부경대 베타 이벤트가<br />
                성공적으로 종료되었습니다!<br /><br />
                📊 <strong>현재 최종 랭킹을 집계 중</strong>입니다.<br /><br />
                <strong className="text-emerald-600">당첨자 발표: 11월 9일 (일) 이내</strong><br />
                발표 방법: 공식 홈페이지 소식란
              </p>

              {/* 액션 버튼들 */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="/news/event-end-notice-2025-11-07"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                  onClick={handleClose}
                >
                  자세히 보기
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
            </>
          )}

          {currentPhase === 'winner-announcement' && (
            <>
              <h2 
                id="event-popup-title"
                className="text-xl font-bold text-gray-900 mb-2"
              >
                🎉 베타 이벤트 당첨자 발표!
              </h2>
              <p 
                id="event-popup-description"
                className="text-gray-600 text-sm mb-4"
              >
                베타 이벤트 당첨자가<br />
                발표되었습니다!<br /><br />
                ✅ <strong>당첨 여부 확인하기</strong><br />
                📝 <strong className="text-red-600">정보 제출 마감: 11/16 (토) 23:59</strong><br /><br />
                ⚠️ 기한 내 미제출 시 당첨 취소
              </p>

              {/* 액션 버튼들 */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="/news/winner-announcement-2025-11-09"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                  onClick={handleClose}
                >
                  당첨자 명단 보기
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
            </>
          )}

          {currentPhase === 'prize-shipping' && (
            <>
              <h2 
                id="event-popup-title"
                className="text-xl font-bold text-gray-900 mb-2"
              >
                📦 경품 발송 안내
              </h2>
              <p 
                id="event-popup-description"
                className="text-gray-600 text-sm mb-4"
              >
                당첨자 분들께 경품이<br />
                순차적으로 발송되고 있습니다.<br /><br />
                📞 배송 문의: <a href="mailto:jmy@doyakmin.com" className="text-emerald-600 hover:underline">jmy@doyakmin.com</a>
              </p>

              {/* 액션 버튼들 */}
              <div className="flex flex-col space-y-3">
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
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
} 
