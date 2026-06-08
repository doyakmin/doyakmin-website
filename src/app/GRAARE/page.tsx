import type { Metadata } from 'next'
import MoralDilemmaGame from './moral-dilemma-game'

export const metadata: Metadata = {
    title: 'GRAARE | 회색의 시대',
    description: '가족, 생존, 양심, 정보, 매몰비용이 충돌하는 도덕 선택 시뮬레이션 MVP',
    robots: {
        index: false,
        follow: false,
    },
}

export default function GraarePage() {
    return <MoralDilemmaGame />
}
