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
      <div className="rounded-[24px] border-2 border-[#111827] bg-[#b7ff2a]/30 p-8">
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
      <div className="rounded-[24px] border-2 border-red-400 bg-red-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-red-700 mb-2">⏰ 제출 기한이 종료되었습니다</h3>
        <p className="text-red-600">정보 제출이 마감되었습니다.</p>
      </div>
    )
  }

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[70px] rounded-2xl border-2 border-[#111827] bg-white p-4 shadow-[0_6px_0_#111827] md:min-w-[90px] md:p-6">
        <span className="text-3xl font-black tabular-nums text-[#111827] md:text-5xl">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 text-sm font-black text-[#526071] md:text-base">{label}</span>
    </div>
  )

  return (
    <div className="rounded-[24px] border-2 border-[#111827] bg-[#b7ff2a]/30 p-6 md:p-8">
      <h3 className="mb-2 text-center text-xl font-black text-[#111827] md:text-2xl">
        ⏰ 정보 제출 마감까지
      </h3>
      <p className="mb-6 text-center text-sm font-bold text-[#526071] md:text-base">
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
        <span className="mb-6 text-2xl font-black text-[#111827]/50 md:text-4xl">:</span>
        <TimeBox value={timeLeft.hours} label="시간" />
        <span className="mb-6 text-2xl font-black text-[#111827]/50 md:text-4xl">:</span>
        <TimeBox value={timeLeft.minutes} label="분" />
        <span className="mb-6 text-2xl font-black text-[#111827]/50 md:text-4xl">:</span>
        <TimeBox value={timeLeft.seconds} label="초" />
      </div>

      {timeLeft.days === 0 && timeLeft.hours < 24 && (
        <div className="mt-6 text-center">
          <p className="animate-pulse font-black text-red-600">
            ⚠️ 마감이 임박했습니다!
          </p>
        </div>
      )}
    </div>
  )
}

