'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

interface CountdownTimerProps {
  targetDate: string // ISO 형식 날짜 문자열
  onExpire?: () => void // 만료 시 콜백
}

export default function CountdownTimer({ targetDate, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      }
    }

    // 초기 계산
    setTimeLeft(calculateTimeLeft())

    // 1초마다 업데이트
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      // 만료되면 콜백 실행
      if (newTimeLeft.isExpired && onExpire) {
        onExpire()
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, mounted, onExpire])

  // SSR 방지
  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl">
        <div className="animate-pulse flex space-x-4 justify-center">
          <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
          <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
          <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
          <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    )
  }

  if (timeLeft.isExpired) {
    return (
      <div className="bg-red-50 border-2 border-red-300 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-red-700 mb-2">⏰ 제출 기한이 종료되었습니다</h3>
        <p className="text-red-600">정보 제출이 마감되었습니다.</p>
      </div>
    )
  }

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px] border-2 border-emerald-200">
        <span className="text-3xl md:text-5xl font-bold text-emerald-600 tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm md:text-base text-gray-600 mt-2 font-medium">{label}</span>
    </div>
  )

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 md:p-8 rounded-2xl">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">
        ⏰ 정보 제출 마감까지
      </h3>
      <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
        마감: {new Date(targetDate).toLocaleString('ko-KR', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
      
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <TimeBox value={timeLeft.days} label="일" />
        <span className="text-2xl md:text-4xl font-bold text-gray-400 mb-6">:</span>
        <TimeBox value={timeLeft.hours} label="시간" />
        <span className="text-2xl md:text-4xl font-bold text-gray-400 mb-6">:</span>
        <TimeBox value={timeLeft.minutes} label="분" />
        <span className="text-2xl md:text-4xl font-bold text-gray-400 mb-6">:</span>
        <TimeBox value={timeLeft.seconds} label="초" />
      </div>

      {timeLeft.days === 0 && timeLeft.hours < 24 && (
        <div className="mt-6 text-center">
          <p className="text-red-600 font-semibold animate-pulse">
            ⚠️ 마감이 임박했습니다!
          </p>
        </div>
      )}
    </div>
  )
}

