import type { Metadata } from 'next'
import MoralDilemmaGame from './moral-dilemma-game'

export const metadata: Metadata = {
    title: 'GRAARE | 회색의 시대',
    description: '재산, 부채, 가족 안정, 사회적 지위, 양심, 정보력, 위험도를 관리하는 도덕 선택 시뮬레이션 MVP',
    robots: {
        index: false,
        follow: false,
    },
}

export default function GraarePage() {
    return <MoralDilemmaGame />
}
