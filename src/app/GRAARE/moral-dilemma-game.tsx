'use client'

import { FormEvent, useMemo, useState } from 'react'
import { BookOpen, Coins, HeartPulse, Info, RefreshCcw, ShieldAlert, UserRound, Users } from 'lucide-react'

type Gender = '남성' | '여성' | '비공개'
type Phase = 'setup' | 'guide' | 'play' | 'ending'
type Tone = '협력' | '저항' | '중립' | '회색'

type Profile = {
    nickname: string
    gender: Gender
    startAge: number
}

type Stats = {
    money: number
    family: number
    status: number
    conscience: number
    information: number
    risk: number
    empireTrust: number
    peopleTrust: number
    guilt: number
    resistance: number
    opportunist: number
    sunkCost: number
}

type Player = Profile & Stats & {
    age: number
    job: string
    flags: string[]
}

type Choice = {
    text: string
    hint: string
    tone: Tone
    effects: Partial<Stats>
    result: string
    flags?: string[]
}

type EventCard = {
    ageOffset: number
    chapter: string
    title: string
    news: string
    body: string
    speaker: string
    dialogue: string
    choices: Choice[]
}

type HistoryItem = {
    age: number
    title: string
    choice: string
    tone: Tone
    result: string
}

const baseStats: Stats = {
    money: 25,
    family: 62,
    status: 4,
    conscience: 72,
    information: 14,
    risk: 10,
    empireTrust: 6,
    peopleTrust: 34,
    guilt: 0,
    resistance: 0,
    opportunist: 0,
    sunkCost: 0,
}

const events: EventCard[] = [
    {
        ageOffset: 0,
        chapter: '프롤로그',
        title: '점령의 날',
        news: '아르카 제국은 질서 회복을 명분으로 루멘의 행정권을 접수했다.',
        body: '광장에는 새 깃발이 걸렸고, 오래된 간판들은 하룻밤 사이 내려갔다. 병약한 아버지는 집으로 돌아오는 길에 자주 멈춰 섰다.',
        speaker: '아버지',
        dialogue: '살아남아라. 다만 네가 무엇을 지키며 살았는지는 잊지 말거라.',
        choices: [
            {
                text: '제국 구호소의 일을 맡는다',
                hint: '치료비를 마련할 수 있지만 제국의 눈에 띈다.',
                tone: '협력',
                effects: { money: 22, family: 10, status: 8, empireTrust: 12, peopleTrust: -6, conscience: -8, sunkCost: 5 },
                result: '첫 임금을 받았다. 집에는 약이 놓였고, 이웃의 시선은 조금 차가워졌다.',
                flags: ['relief_office'],
            },
            {
                text: '루멘어 야학을 돕는다',
                hint: '양심과 민중 신뢰가 오르지만 위험하다.',
                tone: '저항',
                effects: { money: -6, family: -6, conscience: 12, peopleTrust: 16, risk: 14, resistance: 1 },
                result: '아이들은 작은 목소리로 루멘어를 읽었다. 문밖의 발소리마다 모두가 숨을 멈췄다.',
                flags: ['night_school'],
            },
            {
                text: '집안 물건을 팔아 시간을 번다',
                hint: '당장은 안전하지만 아무것도 해결하지 못한다.',
                tone: '중립',
                effects: { money: 10, family: 2, conscience: -2, peopleTrust: -2 },
                result: '오래된 그릇이 팔렸다. 집은 조금 더 비어 보였다.',
            },
        ],
    },
    {
        ageOffset: 2,
        chapter: '생존과 첫 타협',
        title: '첫 직업 선택',
        news: '제국청은 루멘 청년에게 안정적인 봉급과 신분증을 약속했다.',
        body: '게시판에는 시장 일, 검열받는 학교, 제국청 보조직 공고가 붙어 있다. 가족은 매달 들어올 돈을 먼저 묻는다.',
        speaker: '어머니',
        dialogue: '네 양심이 우리 약값을 대신 내주지는 않잖니.',
        choices: [
            {
                text: '제국청 직원이 된다',
                hint: '돈과 지위가 안정된다. 매몰비용이 시작된다.',
                tone: '협력',
                effects: { money: 26, family: 12, status: 18, empireTrust: 22, peopleTrust: -7, conscience: -10, sunkCost: 8 },
                result: '신분증은 깨끗했다. 도장은 생각보다 오래 눈에 남았다.',
                flags: ['empire_clerk'],
            },
            {
                text: '루멘어 교사가 된다',
                hint: '공동체 신뢰를 얻지만 검열 대상이 된다.',
                tone: '저항',
                effects: { money: 8, family: -4, status: 6, peopleTrust: 18, empireTrust: -10, risk: 16, conscience: 10, resistance: 1 },
                result: '교실 창문은 늘 반쯤 닫혀 있었다. 아이들은 배운 말을 집 밖에서 꺼내지 않기로 했다.',
                flags: ['lumen_teacher'],
            },
            {
                text: '노점상을 시작한다',
                hint: '크게 얻는 것도 잃는 것도 없지만 성장 한계가 있다.',
                tone: '중립',
                effects: { money: 12, family: 1, peopleTrust: 5, risk: 2 },
                result: '시장의 하루는 길었고, 세금 징수원의 발걸음은 더 길었다.',
                flags: ['market_vendor'],
            },
        ],
    },
    {
        ageOffset: 5,
        chapter: '생존과 첫 타협',
        title: '충성 서약서',
        news: '제국은 모든 공직 협력자에게 새로운 질서에 대한 서약을 요구했다.',
        body: '서약서 끝에는 작은 빈칸이 있다. 서명하면 승진 심사와 배급 우선권을 받을 수 있다.',
        speaker: '상사',
        dialogue: '이 정도 문장은 모두가 씁니다. 마음까지 바치라는 뜻은 아니에요.',
        choices: [
            {
                text: '정식으로 서명한다',
                hint: '배급과 지위가 오른다. 기록에도 남는다.',
                tone: '협력',
                effects: { money: 18, family: 8, status: 15, empireTrust: 20, peopleTrust: -12, conscience: -12, guilt: 1, sunkCost: 10 },
                result: '배급표가 건네졌다. 그날 집에서는 오랜만에 따뜻한 국이 끓었다.',
                flags: ['loyalty_oath'],
            },
            {
                text: '서명을 거절한다',
                hint: '양심은 지키지만 직장을 잃을 수 있다.',
                tone: '저항',
                effects: { money: -18, family: -12, status: -10, empireTrust: -22, peopleTrust: 12, risk: 16, conscience: 14, resistance: 1 },
                result: '상사는 펜을 내려놓고 오래 당신을 보았다. 그날부터 책상 위 서류가 줄었다.',
            },
            {
                text: '형식상 서명하고 사본을 숨긴다',
                hint: '양쪽 가능성을 남긴다. 발각되면 위험하다.',
                tone: '회색',
                effects: { money: 10, status: 8, empireTrust: 8, peopleTrust: -4, conscience: -4, information: 8, risk: 8, opportunist: 1, sunkCost: 5 },
                result: '당신은 서명했고, 동시에 사본 한 장을 품에 넣었다. 어느 쪽에도 완전히 속하지 못했다.',
                flags: ['hidden_oath_copy'],
            },
        ],
    },
    {
        ageOffset: 9,
        chapter: '안정과 매몰비용',
        title: '집을 살 기회',
        news: '제국 은행은 협력 가정에 낮은 이자의 주택 대출을 제공한다고 밝혔다.',
        body: '배우자는 안정된 집을 원한다. 계약서에는 당신의 직장과 제국 신뢰가 담보처럼 적혀 있다.',
        speaker: '배우자',
        dialogue: '우리가 언제까지 남의 방에서 아이를 꿈꿔야 해?',
        choices: [
            {
                text: '제국 주택 대출을 받는다',
                hint: '가족은 크게 안정된다. 체제 안의 이해관계가 깊어진다.',
                tone: '협력',
                effects: { money: 20, family: 24, status: 12, empireTrust: 12, conscience: -8, sunkCost: 20 },
                result: '열쇠는 차가웠지만 집 안은 따뜻했다. 문패에는 제국식 표기가 먼저 새겨졌다.',
                flags: ['empire_home_loan'],
            },
            {
                text: '낡은 집을 고쳐 산다',
                hint: '불편하지만 빚과 의존을 피한다.',
                tone: '중립',
                effects: { money: -14, family: 6, conscience: 4, peopleTrust: 4 },
                result: '비가 새는 곳은 많았다. 그래도 문패는 당신의 글자로 남았다.',
            },
            {
                text: '명의를 나누어 우회 구매한다',
                hint: '안정과 회피를 동시에 노린다. 나중에 약점이 된다.',
                tone: '회색',
                effects: { money: 8, family: 16, status: 8, risk: 10, opportunist: 1, sunkCost: 12 },
                result: '서류상 집주인은 당신이 아니었다. 그래서 더 자주 서류를 확인하게 됐다.',
                flags: ['proxy_house'],
            },
        ],
    },
    {
        ageOffset: 12,
        chapter: '안정과 매몰비용',
        title: '친구의 부탁',
        news: '금지 문서를 유포한 혐의로 루멘 청년 몇 명이 수배되었다.',
        body: '어릴 적 친구가 젖은 외투를 입고 찾아왔다. 하룻밤만 숨겨 달라고 한다.',
        speaker: '친구',
        dialogue: '네가 거절해도 이해해. 그런데 오늘 밤은 갈 곳이 없어.',
        choices: [
            {
                text: '숨겨주고 길을 알려준다',
                hint: '민중 신뢰를 얻지만 가족까지 위험해질 수 있다.',
                tone: '저항',
                effects: { money: -8, family: -12, conscience: 14, peopleTrust: 22, empireTrust: -14, risk: 22, resistance: 2 },
                result: '새벽이 되기 전 친구는 떠났다. 배우자는 잠든 아이의 이불을 더 세게 붙잡았다.',
                flags: ['helped_friend'],
            },
            {
                text: '돈을 받고 정보만 건넨다',
                hint: '양쪽을 모두 잃을 수 있다.',
                tone: '회색',
                effects: { money: 16, conscience: -8, peopleTrust: -6, information: 10, opportunist: 2, risk: 8 },
                result: '친구는 돈을 놓고 갔다. 그 돈은 오래도록 쓰기 어려웠다.',
                flags: ['sold_info_friend'],
            },
            {
                text: '신고한다',
                hint: '가족은 안전해지지만 기록에 남는다.',
                tone: '협력',
                effects: { money: 20, family: 10, status: 12, empireTrust: 24, peopleTrust: -24, conscience: -22, guilt: 2, sunkCost: 10 },
                result: '며칠 뒤 포상금을 받았다. 골목 사람들은 당신을 보며 말을 줄였다.',
                flags: ['reported_friend'],
            },
            {
                text: '못 본 척 문을 닫는다',
                hint: '위험은 피하지만 관계가 끊어진다.',
                tone: '중립',
                effects: { family: 2, conscience: -10, peopleTrust: -8, risk: -4 },
                result: '문밖의 발소리는 한동안 멈춰 있었다. 다음 날 골목에는 아무도 없었다.',
            },
        ],
    },
    {
        ageOffset: 18,
        chapter: '전쟁과 부의 기회',
        title: '군수 사업 제안',
        news: '전선 확대에 따라 군수 물자 납품 사업자가 긴급 모집된다.',
        body: '상사는 이번 계약이 가족의 남은 걱정을 끝낼 수 있다고 말한다. 계약 품목에는 철도 부품과 수용소 침상이 섞여 있다.',
        speaker: '상사',
        dialogue: '이 기회를 잡으면 당신 가족은 다시는 굶지 않을 겁니다.',
        choices: [
            {
                text: '계약을 수락한다',
                hint: '큰돈을 벌 수 있다. 누군가의 고통과 연결된다.',
                tone: '협력',
                effects: { money: 70, family: 20, status: 28, empireTrust: 36, peopleTrust: -36, conscience: -30, guilt: 3, sunkCost: 30 },
                result: '장부의 숫자는 아름답게 늘었다. 이름 없는 물자표도 함께 늘었다.',
                flags: ['war_supplier'],
            },
            {
                text: '계약을 거절한다',
                hint: '도덕적 부담은 피하지만 가족의 원망을 들을 수 있다.',
                tone: '저항',
                effects: { money: -18, family: -18, status: -12, empireTrust: -18, peopleTrust: 14, conscience: 18, risk: 10, resistance: 1 },
                result: '배우자는 오래 말이 없었다. 거절서에는 당신의 서명이 작게 남았다.',
            },
            {
                text: '일부 물자를 빼돌려 사람들을 돕는다',
                hint: '양쪽을 건드린다. 발각되면 매우 위험하다.',
                tone: '회색',
                effects: { money: 26, family: 4, empireTrust: 10, peopleTrust: 12, conscience: 6, risk: 24, resistance: 1, opportunist: 2, sunkCost: 12 },
                result: '창고 장부에는 오차가 생겼고, 골목의 배급 줄에는 잠시 웃음이 생겼다.',
                flags: ['diverted_supplies'],
            },
            {
                text: '계약 정보를 새벽회에 흘린다',
                hint: '저항을 돕지만 가족까지 감시될 수 있다.',
                tone: '저항',
                effects: { money: -8, family: -14, empireTrust: -22, peopleTrust: 24, conscience: 16, risk: 30, resistance: 2 },
                result: '며칠 뒤 철도 창고에 불이 났다. 당신은 아이에게 창문에서 떨어져 있으라고 말했다.',
                flags: ['leaked_contract'],
            },
        ],
    },
    {
        ageOffset: 24,
        chapter: '균열과 기록 정리',
        title: '증거 인멸',
        news: '제국 내부에서는 패전 가능성을 언급하는 문서를 급히 소각하고 있다.',
        body: '문서고에는 당신의 서명, 계약서, 징집 명단, 구호소 장부가 있다. 기록은 생각보다 성실하다.',
        speaker: '상사',
        dialogue: '살고 싶으면 종이는 태우고, 기억은 각자 알아서 지우는 겁니다.',
        choices: [
            {
                text: '불리한 문서를 삭제한다',
                hint: '조사 위험을 줄인다. 기회주의 기록이 남는다.',
                tone: '회색',
                effects: { money: 8, peopleTrust: -12, conscience: -16, risk: -8, opportunist: 3, guilt: 1 },
                result: '연기는 매캐했다. 당신은 눈물인지 연기인지 구분하지 않기로 했다.',
                flags: ['destroyed_evidence'],
            },
            {
                text: '그대로 남긴다',
                hint: '미래의 평가를 받아들인다.',
                tone: '중립',
                effects: { conscience: 10, empireTrust: -8, risk: 8, information: 6 },
                result: '당신은 서랍을 닫았다. 닫힌 것은 서랍뿐이었다.',
            },
            {
                text: '새벽회에 기록을 전달한다',
                hint: '역사의 증거가 된다. 지금은 매우 위험하다.',
                tone: '저항',
                effects: { money: -16, family: -18, empireTrust: -34, peopleTrust: 34, conscience: 24, risk: 36, resistance: 3 },
                result: '문서 묶음은 빵 자루 아래 숨겨졌다. 당신은 처음으로 기록이 무기가 될 수 있음을 알았다.',
                flags: ['gave_records'],
            },
        ],
    },
    {
        ageOffset: 30,
        chapter: '해방과 심판',
        title: '가족의 질문',
        news: '루멘 임시정부는 전쟁기의 협력과 저항 명단을 공개하기 시작했다.',
        body: '자녀는 당신의 이름이 적힌 기록을 들고 앉아 있다. 가족을 지켰다는 말만으로 설명되지 않는 줄들이 있다.',
        speaker: '자녀',
        dialogue: '그때 당신은 어떤 사람이었어요?',
        choices: [
            {
                text: '우리는 살아남아야 했다고 말한다',
                hint: '가족을 중심으로 기억을 정리한다.',
                tone: '중립',
                effects: { family: 8, conscience: -6 },
                result: '자녀는 대답하지 않았다. 살아남았다는 말은 너무 많은 것을 덮었다.',
            },
            {
                text: '부끄러운 선택까지 말한다',
                hint: '상처를 열지만 침묵은 줄어든다.',
                tone: '저항',
                effects: { family: -4, conscience: 18, peopleTrust: 8, resistance: 1 },
                result: '이야기는 길고 느렸다. 처음으로 가족은 같은 기록을 함께 읽었다.',
            },
            {
                text: '기록이 모두 사실은 아니라고 말한다',
                hint: '당장은 피할 수 있지만 마지막 기록이 흐려진다.',
                tone: '회색',
                effects: { family: -8, conscience: -14, opportunist: 2 },
                result: '자녀는 종이를 접어 품에 넣었다. 질문은 끝나지 않았다.',
            },
        ],
    },
]

const clamp = (value: number, max = 100) => Math.max(0, Math.min(max, Math.round(value)))

function createPlayer(profile: Profile): Player {
    return {
        ...profile,
        ...baseStats,
        age: profile.startAge,
        job: '가족의 보호자',
        flags: [],
    }
}

function applyChoice(player: Player, choice: Choice, nextAge: number) {
    const next = { ...player }
    Object.entries(choice.effects).forEach(([key, value]) => {
        const statKey = key as keyof Stats
        const max = statKey === 'money' ? 999 : 100
        next[statKey] = clamp(next[statKey] + (value ?? 0), max)
    })

    const annualCost = 8 + Math.floor(next.sunkCost / 20)
    next.money = clamp(next.money - annualCost, 999)

    if (next.money <= 0) {
        next.family = clamp(next.family - 12)
        next.conscience = clamp(next.conscience - 4)
    }

    const flags = Array.from(new Set([...next.flags, ...(choice.flags ?? [])]))
    return {
        ...next,
        age: nextAge,
        job: getJob(flags),
        flags,
    }
}

function getJob(flags: string[]) {
    if (flags.includes('war_supplier')) return '군수 사업가'
    if (flags.includes('empire_clerk')) return '제국청 직원'
    if (flags.includes('lumen_teacher')) return '루멘어 교사'
    if (flags.includes('night_school')) return '비밀 야학 조력자'
    if (flags.includes('market_vendor')) return '노점상'
    return '가족의 보호자'
}

function getEnding(player: Player) {
    if (player.risk >= 90 && player.empireTrust < 30) {
        return {
            title: '체포된 이름',
            text: `${player.nickname}은 시대를 배신하지 않으려 했다. 그러나 가족은 그 대가를 함께 짊어졌다.`,
        }
    }

    if (player.empireTrust >= 75 && player.guilt >= 6) {
        return {
            title: '성공한 협력자, 몰락한 이름',
            text: `${player.nickname}은 가족을 지켰다. 그러나 수많은 가족을 무너뜨리는 데 기여했다.`,
        }
    }

    if (player.resistance >= 7 && player.peopleTrust >= 60) {
        return {
            title: '가난한 저항자',
            text: `${player.nickname}은 시대를 배신하지 않았다. 그러나 곁의 사람들은 대가를 함께 짊어졌다.`,
        }
    }

    if (player.opportunist >= 5) {
        return {
            title: '막판의 변절자',
            text: `${player.nickname}은 편을 바꿨다. 마음을 바꾼 것인지는 아무도 알 수 없었다.`,
        }
    }

    if (player.family >= 78 && player.guilt >= 4 && player.conscience <= 40) {
        return {
            title: '가족만을 위한 사람',
            text: `${player.nickname}의 집에는 불이 꺼지지 않았다. 대신 다른 집들의 불을 보지 않기로 했다.`,
        }
    }

    if (player.guilt <= 2 && player.resistance <= 2 && player.peopleTrust < 45 && player.empireTrust < 45) {
        return {
            title: '이름 없는 사람',
            text: `${player.nickname}은 살아남았다. 그러나 시대는 조용히 지나쳐 갔다.`,
        }
    }

    return {
        title: '회색의 생존자',
        text: `역사는 ${player.nickname}을 단정하지 못했다. 생존과 양심, 회피와 책임이 함께 남았다.`,
    }
}

const publicStats = [
    { key: 'money', label: '재산', Icon: Coins, max: 160 },
    { key: 'family', label: '가족 안정', Icon: Users, max: 100 },
    { key: 'conscience', label: '양심', Icon: HeartPulse, max: 100 },
    { key: 'information', label: '정보력', Icon: Info, max: 100 },
    { key: 'risk', label: '위험도', Icon: ShieldAlert, max: 100 },
] as const

const toneStyles: Record<Tone, string> = {
    협력: 'border-[#6d4c1f] bg-[#f5e4b6] text-[#302512]',
    저항: 'border-[#285c4d] bg-[#d7eadf] text-[#14362d]',
    중립: 'border-[#5d6470] bg-[#e6e8eb] text-[#252a31]',
    회색: 'border-[#5c5363] bg-[#e4dce6] text-[#312a35]',
}

export default function MoralDilemmaGame() {
    const [phase, setPhase] = useState<Phase>('setup')
    const [profile, setProfile] = useState<Profile>({ nickname: '', gender: '비공개', startAge: 18 })
    const [player, setPlayer] = useState<Player>(() => createPlayer({ nickname: '플레이어', gender: '비공개', startAge: 18 }))
    const [eventIndex, setEventIndex] = useState(0)
    const [history, setHistory] = useState<HistoryItem[]>([])
    const [lastResult, setLastResult] = useState<string | null>(null)
    const event = events[eventIndex]
    const currentAge = player.startAge + event.ageOffset
    const ending = useMemo(() => getEnding(player), [player])

    const startGuide = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const nickname = profile.nickname.trim() || '플레이어'
        const nextProfile = { ...profile, nickname }
        setProfile(nextProfile)
        setPlayer(createPlayer(nextProfile))
        setPhase('guide')
    }

    const choose = (choice: Choice) => {
        const nextEvent = events[eventIndex + 1]
        const nextAge = nextEvent ? player.startAge + nextEvent.ageOffset : currentAge
        const updated = applyChoice(player, choice, nextAge)

        setHistory((items) => [
            ...items,
            {
                age: currentAge,
                title: event.title,
                choice: choice.text,
                tone: choice.tone,
                result: choice.result,
            },
        ])
        setPlayer(updated)
        setLastResult(choice.result)

        if (!nextEvent || updated.family <= 0 || updated.risk >= 95) {
            setPhase('ending')
            return
        }

        setEventIndex((index) => index + 1)
    }

    const restart = () => {
        setPhase('setup')
        setProfile({ nickname: '', gender: '비공개', startAge: 18 })
        setPlayer(createPlayer({ nickname: '플레이어', gender: '비공개', startAge: 18 }))
        setEventIndex(0)
        setHistory([])
        setLastResult(null)
    }

    return (
        <main className="min-h-screen bg-[#eee9de] text-[#1c1a17]">
            <div className="game-container py-6 md:py-10">
                <header className="border-b-2 border-[#1c1a17] pb-5">
                    <h1 className="mt-2 text-4xl font-black leading-tight tracking-normal md:text-6xl">회색의 시대</h1>
                    <p className="mt-3 max-w-2xl text-base font-semibold leading-relaxed text-[#5b5143]">
                        삶은 끊임없는 선택의 연속이다. - 장 폴 사르트르
                    </p>
                </header>

                {phase === 'setup' && (
                    <section className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                        <form onSubmit={startGuide} className="border-2 border-[#1c1a17] bg-[#f8f2e7] p-5 shadow-[0_7px_0_#1c1a17] md:p-7">
                            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b2f2f]">시작 설정</p>
                            <h2 className="mt-2 text-2xl font-black md:text-3xl">당신의 인물을 정해주세요</h2>

                            <label className="mt-6 block">
                                <span className="text-sm font-black">닉네임</span>
                                <input
                                    value={profile.nickname}
                                    onChange={(event) => setProfile((value) => ({ ...value, nickname: event.target.value }))}
                                    maxLength={12}
                                    placeholder="예: 민준"
                                    className="mt-2 h-12 w-full border-2 border-[#1c1a17] bg-white px-3 text-base font-bold outline-none focus:bg-[#fff9ea]"
                                />
                            </label>

                            <div className="mt-5">
                                <p className="text-sm font-black">성별</p>
                                <div className="mt-2 grid grid-cols-3 gap-2">
                                    {(['남성', '여성', '비공개'] as Gender[]).map((gender) => (
                                        <button
                                            key={gender}
                                            type="button"
                                            onClick={() => setProfile((value) => ({ ...value, gender }))}
                                            className={`min-h-11 border-2 px-2 text-sm font-black ${
                                                profile.gender === gender
                                                    ? 'border-[#1c1a17] bg-[#d1a846] text-[#1c1a17]'
                                                    : 'border-[#1c1a17] bg-white text-[#5b5143]'
                                            }`}
                                        >
                                            {gender}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <label className="mt-5 block">
                                <span className="text-sm font-black">시작 나이</span>
                                <select
                                    value={profile.startAge}
                                    onChange={(event) => setProfile((value) => ({ ...value, startAge: Number(event.target.value) }))}
                                    className="mt-2 h-12 w-full border-2 border-[#1c1a17] bg-white px-3 text-base font-bold outline-none focus:bg-[#fff9ea]"
                                >
                                    <option value={16}>16세</option>
                                    <option value={18}>18세</option>
                                    <option value={20}>20세</option>
                                </select>
                            </label>

                            <button
                                type="submit"
                                className="mt-7 min-h-12 w-full border-2 border-[#1c1a17] bg-[#d1a846] px-5 text-base font-black shadow-[0_5px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                            >
                                시작하기
                            </button>
                        </form>

                        <div className="border-2 border-[#1c1a17] bg-[#2d302f] p-5 text-[#f8f2e7] shadow-[0_7px_0_#1c1a17] md:p-7">
                            <BookOpen className="h-9 w-9 text-[#d1a846]" />
                            <h2 className="mt-5 text-2xl font-black md:text-3xl">이 게임에서 하는 일</h2>
                            <div className="mt-5 space-y-4 text-base font-semibold leading-relaxed text-[#f8f2e7]/80">
                                <p>
                                    내 삶의 중요한 요소들을 좌우할 선택을 하게 됩니다. 재산, 부채, 가족 안정,
                                    사회적 지위, 양심, 정보력, 위험도 수치를 관리하며 신중한 선택을 하세요.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {phase === 'guide' && (
                    <section className="mt-6 border-2 border-[#1c1a17] bg-[#f8f2e7] p-5 shadow-[0_7px_0_#1c1a17] md:p-8">
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b2f2f]">게임 설명</p>
                        <h2 className="mt-2 text-3xl font-black">선택은 대가를 남깁니다</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {[
                                ['공개 수치', '재산, 가족 안정, 양심, 정보력, 위험도는 항상 볼 수 있습니다.'],
                                ['숨겨진 기록', '죄책, 저항, 기회주의, 매몰비용은 엔딩에서 평가됩니다.'],
                                ['플레이 목표', '내 삶에 중요한 것을 선택하고 대가를 감수하세요.'],
                            ].map(([title, text]) => (
                                <div key={title} className="border-2 border-[#1c1a17] bg-white p-4">
                                    <p className="font-black">{title}</p>
                                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[#5b5143]">{text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-7 flex flex-wrap items-center gap-3 border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
                            <UserRound className="h-6 w-6 text-[#8b2f2f]" />
                            <p className="text-base font-black">
                                {profile.nickname} / {profile.gender} / {profile.startAge}세에서 시작
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setPhase('play')}
                            className="mt-7 min-h-12 border-2 border-[#1c1a17] bg-[#d1a846] px-6 text-base font-black shadow-[0_5px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                        >
                            첫 사건 시작
                        </button>
                    </section>
                )}

                {phase === 'play' && (
                    <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
                        <article className="border-2 border-[#1c1a17] bg-[#f8f2e7] shadow-[0_7px_0_#1c1a17]">
                            <div className="border-b-2 border-[#1c1a17] bg-[#d1a846] px-4 py-3 md:px-6">
                                <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-black">
                                    <span>{currentAge}세 / {event.chapter}</span>
                                    <span>{player.nickname} / {player.job}</span>
                                </div>
                            </div>

                            <div className="p-5 md:p-7">
                                {lastResult && (
                                    <div className="mb-5 border-2 border-[#1c1a17] bg-[#eee1cc] p-4 text-sm font-bold leading-relaxed text-[#4d4132]">
                                        직전 결과: {lastResult}
                                    </div>
                                )}
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b2f2f]">News</p>
                                <p className="mt-2 border-b-2 border-[#1c1a17] pb-5 text-base font-bold leading-relaxed text-[#4d4132]">{event.news}</p>
                                <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">{event.title}</h2>
                                <p className="mt-5 text-lg font-semibold leading-relaxed text-[#51483b]">{event.body}</p>
                                <div className="mt-6 border-l-4 border-[#8b2f2f] bg-[#eee1cc] px-5 py-4">
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">{event.speaker}</p>
                                    <p className="mt-2 text-lg font-black leading-relaxed">“{event.dialogue}”</p>
                                </div>
                            </div>

                            <div className="grid gap-3 border-t-2 border-[#1c1a17] bg-[#ded2bd] p-4 md:grid-cols-2">
                                {event.choices.map((choice) => (
                                    <button
                                        key={choice.text}
                                        type="button"
                                        onClick={() => choose(choice)}
                                        className="min-h-[128px] border-2 border-[#1c1a17] bg-white p-4 text-left shadow-[0_4px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                                    >
                                        <span className={`inline-flex border px-2 py-1 text-xs font-black ${toneStyles[choice.tone]}`}>{choice.tone}</span>
                                        <span className="mt-3 block text-lg font-black leading-snug">{choice.text}</span>
                                        <span className="mt-2 block text-sm font-bold leading-relaxed text-[#5b5143]">{choice.hint}</span>
                                    </button>
                                ))}
                            </div>
                        </article>

                        <aside className="space-y-4">
                            <StatusPanel player={player} />
                            <TrustPanel player={player} />
                            <LogPanel history={history} />
                        </aside>
                    </section>
                )}

                {phase === 'ending' && (
                    <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
                        <article className="border-2 border-[#1c1a17] bg-[#f8f2e7] p-5 shadow-[0_7px_0_#1c1a17] md:p-8">
                            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b2f2f]">Ending</p>
                            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">{ending.title}</h2>
                            <p className="mt-6 max-w-3xl text-xl font-black leading-relaxed">{ending.text}</p>
                            <div className="mt-8 grid gap-3 md:grid-cols-4">
                                {[
                                    ['죄책 기록', player.guilt],
                                    ['저항 기록', player.resistance],
                                    ['기회주의 기록', player.opportunist],
                                    ['매몰비용', player.sunkCost],
                                ].map(([label, value]) => (
                                    <div key={label} className="border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
                                        <p className="text-sm font-black text-[#8b2f2f]">{label}</p>
                                        <p className="mt-2 text-3xl font-black">{value}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={restart}
                                className="mt-8 inline-flex min-h-12 items-center gap-2 border-2 border-[#1c1a17] bg-[#d1a846] px-5 text-sm font-black shadow-[0_5px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                            >
                                <RefreshCcw className="h-4 w-4" />
                                다시 시작
                            </button>
                        </article>
                        <aside className="space-y-4">
                            <StatusPanel player={player} />
                            <LogPanel history={history} expanded />
                        </aside>
                    </section>
                )}
            </div>
        </main>
    )
}

function StatusPanel({ player }: { player: Player }) {
    return (
        <div className="border-2 border-[#1c1a17] bg-[#f8f2e7] p-4 shadow-[0_6px_0_#1c1a17]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">상태</p>
            <div className="mt-4 space-y-4">
                {publicStats.map(({ key, label, Icon, max }) => {
                    const value = player[key]
                    const width = `${Math.min(100, (value / max) * 100)}%`
                    return (
                        <div key={key}>
                            <div className="mb-1 flex items-center justify-between gap-2">
                                <span className="flex items-center gap-2 text-sm font-black">
                                    <Icon className="h-4 w-4 text-[#8b2f2f]" />
                                    {label}
                                </span>
                                <span className="text-sm font-black">{value}</span>
                            </div>
                            <div className="h-3 border-2 border-[#1c1a17] bg-[#ded2bd]">
                                <div className="h-full bg-[#8f978d]" style={{ width }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function TrustPanel({ player }: { player: Player }) {
    return (
        <div className="border-2 border-[#1c1a17] bg-[#2d302f] p-4 text-[#f8f2e7] shadow-[0_6px_0_#1c1a17]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d1a846]">평판</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="border border-[#f8f2e7]/30 p-3">
                    <p className="text-xs font-bold text-[#f8f2e7]/65">제국 신뢰</p>
                    <p className="mt-1 text-2xl font-black">{player.empireTrust}</p>
                </div>
                <div className="border border-[#f8f2e7]/30 p-3">
                    <p className="text-xs font-bold text-[#f8f2e7]/65">민중 신뢰</p>
                    <p className="mt-1 text-2xl font-black">{player.peopleTrust}</p>
                </div>
            </div>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-[#f8f2e7]/70">
                숨겨진 기록은 엔딩에서 공개됩니다.
            </p>
        </div>
    )
}

function LogPanel({ history, expanded = false }: { history: HistoryItem[]; expanded?: boolean }) {
    const items = expanded ? history : history.slice(-4)
    return (
        <div className="border-2 border-[#1c1a17] bg-[#f8f2e7] p-4 shadow-[0_6px_0_#1c1a17]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">선택 기록</p>
            <div className="mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1">
                {items.length === 0 ? (
                    <p className="text-sm font-bold leading-relaxed text-[#5b5143]">아직 선택 기록이 없습니다.</p>
                ) : (
                    items.map((item) => (
                        <article key={`${item.age}-${item.title}-${item.choice}`} className="border-l-4 border-[#8b2f2f] pl-3">
                            <p className="text-xs font-black text-[#8b2f2f]">{item.age}세 / {item.tone}</p>
                            <p className="text-sm font-black">{item.title}</p>
                            <p className="text-sm font-semibold leading-relaxed text-[#5b5143]">{item.choice}</p>
                        </article>
                    ))
                )}
            </div>
        </div>
    )
}
