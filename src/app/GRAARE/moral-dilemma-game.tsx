'use client'

import { FormEvent, useMemo, useState } from 'react'
import { BookOpen, Coins, HeartPulse, Info, RefreshCcw, Scale, ShieldAlert, UserRound, Users } from 'lucide-react'

type Gender = '남성' | '여성'
type Phase = 'setup' | 'guide' | 'play' | 'ending'
type Tone = '협력' | '저항' | '중립' | '회색'
type StatKey =
    | 'money'
    | 'debt'
    | 'food'
    | 'medicine'
    | 'family'
    | 'status'
    | 'conscience'
    | 'rationalization'
    | 'information'
    | 'misjudgment'
    | 'fear'
    | 'surveillance'
    | 'exposureRisk'
    | 'risk'
type HiddenKey = 'guilt' | 'resistance' | 'opportunist'

type Profile = {
    nickname: string
    gender: Gender | ''
    startAge: number | ''
}

type Stats = Record<StatKey | HiddenKey, number> & {
    empireTrust: number
    peopleTrust: number
}

type NpcId = 'spouse' | 'child' | 'friendA' | 'friendB' | 'neighbor' | 'empireBoss' | 'journalist'

type NpcMemory = {
    trust: number
    fear: number
    resentment: number
    debt: number
    evidence: number
}

type EvidenceType = 'signed_document' | 'contract' | 'speech' | 'testimony' | 'secret_help' | 'destroyed_evidence'

type Evidence = {
    id: string
    type: EvidenceType
    title: string
    description: string
    year: number
    source: string
    active: boolean
}

type DelayedEffect = {
    id: string
    triggerYear: number
    triggerCondition: string
    description: string
    effects: Partial<Stats>
    witnessId?: NpcId
    evidenceId?: string
    resolved?: boolean
}

type GlobalState = {
    empireStability: number
    warIntensity: number
    inflation: number
    repressionLevel: number
    liberationChance: number
    propagandaStrength: number
}

type Player = Profile & Stats & {
    age: number
    year: number
    job: string
    moralFatigue: number
    povertyYears: number
    flags: string[]
    npcs: Record<NpcId, NpcMemory>
    evidenceList: Evidence[]
    delayedEffects: DelayedEffect[]
    delayedRecords: string[]
    globalState: GlobalState
}

type Choice = {
    text: string
    hint: string
    tone: Tone
    effects: Partial<Stats>
    values?: string[]
    burdens?: string[]
    npcEffects?: Partial<Record<NpcId, Partial<NpcMemory>>>
    delayedEffects?: Omit<DelayedEffect, 'id' | 'triggerYear' | 'resolved'>[]
    evidenceCreates?: Omit<Evidence, 'id' | 'year' | 'active'>[]
    evidenceRemoves?: EvidenceType[]
    result: string
    consequence: string
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
    visual: {
        label: string
        mood: string
        gradient: string
        imageSrc?: string
    }
    perspectives?: Partial<Record<'family' | 'conscience' | 'money' | 'safety' | 'future', string>>
    reactions?: Array<{ npc: string; line: string }>
    witnesses?: string[]
    records?: string[]
    choices: Choice[]
}

type HistoryItem = {
    age: number
    chapter: string
    title: string
    choice: string
    tone: Tone
    result: string
    consequence: string
    summaries: string[]
    evidenceIds: string[]
    delayedRecord?: string
}

const baseStats: Stats = {
    money: 25,
    debt: 0,
    food: 46,
    medicine: 30,
    family: 62,
    status: 4,
    conscience: 72,
    rationalization: 0,
    information: 14,
    misjudgment: 20,
    fear: 18,
    surveillance: 4,
    exposureRisk: 6,
    risk: 10,
    empireTrust: 6,
    peopleTrust: 34,
    guilt: 0,
    resistance: 0,
    opportunist: 0,
}

const initialNpcs: Record<NpcId, NpcMemory> = {
    spouse: { trust: 55, fear: 20, resentment: 10, debt: 0, evidence: 0 },
    child: { trust: 50, fear: 10, resentment: 0, debt: 0, evidence: 0 },
    friendA: { trust: 45, fear: 25, resentment: 0, debt: 0, evidence: 0 },
    friendB: { trust: 35, fear: 20, resentment: 10, debt: 0, evidence: 0 },
    neighbor: { trust: 42, fear: 18, resentment: 5, debt: 0, evidence: 0 },
    empireBoss: { trust: 35, fear: 12, resentment: 0, debt: 0, evidence: 0 },
    journalist: { trust: 30, fear: 18, resentment: 0, debt: 0, evidence: 0 },
}

const initialGlobalState: GlobalState = {
    empireStability: 82,
    warIntensity: 8,
    inflation: 18,
    repressionLevel: 24,
    liberationChance: 4,
    propagandaStrength: 70,
}

const events: EventCard[] = [
    {
        ageOffset: 0,
        chapter: '프롤로그',
        title: '점령의 날',
        news: '아르카 제국은 질서 회복을 명분으로 나의 조국인 루멘의 행정권을 접수했다.',
        body: '광장에는 새 깃발이 걸렸고, 오래된 간판들은 하룻밤 사이 내려갔다. 나는 이제 새로운 통치 체제에 맞선 선택의 기로에 섰다. 누굴 위해 첫번째 행동을 할 것인가.',
        speaker: '아버지',
        dialogue: '살아남아라. 다만 네가 무엇을 지키며 살았는지는 잊지 말거라.',
        visual: {
            label: '점령된 광장',
            mood: '새 깃발, 내려간 간판, 침묵한 사람들',
            gradient: 'from-[#34383c] via-[#837d6d] to-[#c8b487]',
            imageSrc: '/image/graare/occupied-square.jpg',
        },
        choices: [
            {
                text: '제국 구호소의 일을 맡는다',
                hint: '치료비를 마련할 수 있으며, 제국의 신뢰를 얻는다.',
                tone: '협력',
                effects: { money: 22, family: 10, status: 8, empireTrust: 12, peopleTrust: -6, conscience: -8 },
                result: '첫 임금을 받았다. 집에는 약이 놓였고, 이웃의 시선은 조금 차가워졌다.',
                consequence: '가족의 생존은 안정됐지만, 당신은 새 통치 체제가 주는 보상을 처음으로 받아들였다.',
                flags: ['relief_office'],
            },
            {
                text: '루멘어 야학을 돕는다',
                hint: '양심과 민중 신뢰가 오르지만 위험하다.',
                tone: '저항',
                effects: { money: -6, family: -6, conscience: 12, peopleTrust: 16, risk: 14, resistance: 1 },
                result: '아이들은 작은 목소리로 루멘어를 읽었다. 문밖의 발소리마다 모두가 숨을 멈췄다.',
                consequence: '당신은 조국의 언어를 지켰지만, 가족은 더 불안한 밤을 보내게 됐다.',
                flags: ['night_school'],
            },
            {
                text: '집안 물건을 팔아 시간을 번다',
                hint: '당장은 안전하지만 아무것도 해결하지 못한다.',
                tone: '중립',
                effects: { money: 10, family: 2, conscience: -2, peopleTrust: -2 },
                result: '오래된 그릇이 팔렸다. 집은 조금 더 비어 보였다.',
                consequence: '당신은 어느 편에도 서지 않았지만, 선택을 미룬 것 역시 하나의 선택으로 남았다.',
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
        visual: {
            label: '임시 고용소',
            mood: '구겨진 공고문, 길게 늘어선 청년들',
            gradient: 'from-[#45413a] via-[#9b8f78] to-[#e0c78c]',
            imageSrc: '/image/graare/employment-office.jpg',
        },
        choices: [
            {
                text: '제국청 직원이 된다',
                hint: '돈과 지위가 안정된다. 제국과 가까워진다.',
                tone: '협력',
                effects: { money: 26, family: 12, status: 18, empireTrust: 22, peopleTrust: -7, conscience: -10 },
                result: '신분증은 깨끗했다. 도장은 생각보다 오래 눈에 남았다.',
                consequence: '당신은 가족을 위해 안정적인 길을 골랐다. 동시에 이웃들은 당신을 제국의 사람으로 보기 시작했다.',
                flags: ['empire_clerk'],
            },
            {
                text: '루멘어 교사가 된다',
                hint: '공동체 신뢰를 얻지만 검열 대상이 된다.',
                tone: '저항',
                effects: { money: 8, family: -4, status: 6, peopleTrust: 18, empireTrust: -10, risk: 16, conscience: 10, resistance: 1 },
                result: '교실 창문은 늘 반쯤 닫혀 있었다. 아이들은 배운 말을 집 밖에서 꺼내지 않기로 했다.',
                consequence: '당신은 말과 기억을 지키는 사람이 됐다. 그러나 가족은 당신의 신념이 매달의 생활비를 흔드는 것을 보았다.',
                flags: ['lumen_teacher'],
            },
            {
                text: '노점상을 시작한다',
                hint: '크게 얻는 것도 잃는 것도 없지만 성장 한계가 있다.',
                tone: '중립',
                effects: { money: 12, family: 1, peopleTrust: 5, risk: 2 },
                result: '시장의 하루는 길었고, 세금 징수원의 발걸음은 더 길었다.',
                consequence: '당신은 작은 생계를 택했다. 큰 책임은 피했지만 큰 영향력도 얻지 못했다.',
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
        visual: {
            label: '회의실의 서약서',
            mood: '검은 잉크, 마르지 않은 도장, 닫힌 문',
            gradient: 'from-[#2e3332] via-[#715f4a] to-[#d7b46b]',
            imageSrc: '/image/graare/oath-document.jpg',
        },
        choices: [
            {
                text: '정식으로 서명한다',
                hint: '배급과 지위가 오른다. 기록에도 남는다.',
                tone: '협력',
                effects: { money: 18, family: 8, status: 15, empireTrust: 20, peopleTrust: -12, conscience: -12, guilt: 1 },
                result: '배급표가 건네졌다. 그날 집에서는 오랜만에 따뜻한 국이 끓었다.',
                consequence: '당신은 서약을 종이 위의 형식이라고 여겼지만, 기록은 형식과 진심을 구분하지 않았다.',
                flags: ['loyalty_oath'],
            },
            {
                text: '서명을 거절한다',
                hint: '양심은 지키지만 직장을 잃을 수 있다.',
                tone: '저항',
                effects: { money: -18, family: -12, status: -10, empireTrust: -22, peopleTrust: 12, risk: 16, conscience: 14, resistance: 1 },
                result: '상사는 펜을 내려놓고 오래 당신을 보았다. 그날부터 책상 위 서류가 줄었다.',
                consequence: '당신은 이름을 지켰지만 가족의 식탁은 더 불안정해졌다.',
            },
            {
                text: '형식상 서명하고 사본을 숨긴다',
                hint: '양쪽 가능성을 남긴다. 발각되면 위험하다.',
                tone: '회색',
                effects: { money: 10, status: 8, empireTrust: 8, peopleTrust: -4, conscience: -4, information: 8, risk: 8, opportunist: 1 },
                result: '당신은 서명했고, 동시에 사본 한 장을 품에 넣었다. 어느 쪽에도 완전히 속하지 못했다.',
                consequence: '당신은 빠져나갈 길을 남겼다. 그러나 빠져나갈 길을 계산했다는 사실도 기록이 됐다.',
                flags: ['hidden_oath_copy'],
            },
        ],
    },
    {
        ageOffset: 7,
        chapter: '정보와 오판',
        title: '어느 소식을 믿을 것인가',
        news: '제국 신문은 루멘이 안정되고 있다고 보도했다. 시장에서는 반대로 식량 가격이 더 오를 것이라는 소문이 돈다.',
        body: '같은 사건을 두고 서로 다른 말들이 떠돈다. 무엇을 믿느냐에 따라 올해의 선택은 완전히 달라질 수 있다.',
        speaker: '기자',
        dialogue: '정보는 공짜가 아닙니다. 싸게 얻은 정보일수록 누군가가 이미 값을 치렀을지도 모르죠.',
        visual: {
            label: '라디오와 신문',
            mood: '서로 다른 제목, 지직거리는 방송, 엇갈린 소문',
            gradient: 'from-[#1d2428] via-[#56666d] to-[#c2ad82]',
            imageSrc: '/image/graare/radio-newspaper.jpg',
        },
        choices: [
            {
                text: '제국 신문만 믿는다',
                hint: '위험은 낮지만 선전과 오판 가능성이 커진다.',
                tone: '협력',
                effects: { empireTrust: 8, fear: -6, misjudgment: 18, information: -4, rationalization: 6 },
                result: '신문은 질서와 번영을 말했다. 불안은 잠시 줄었지만, 시장의 가격표는 설명되지 않았다.',
                consequence: '당신은 안정된 정보를 택했다. 그러나 안정된 정보가 반드시 정확한 정보는 아니었다.',
                flags: ['trusted_empire_news'],
            },
            {
                text: '루멘 사람들의 소문을 모은다',
                hint: '생활 정보는 얻지만 감정에 휘둘릴 수 있다.',
                tone: '중립',
                effects: { information: 10, peopleTrust: 8, fear: 8, misjudgment: 4 },
                result: '소문은 빠르고 뜨거웠다. 어떤 말은 맞았고, 어떤 말은 두려움이 만든 그림자였다.',
                consequence: '당신은 사람들의 체감 현실에 가까워졌다. 대신 불안도 함께 들여왔다.',
                flags: ['heard_lumen_rumors'],
            },
            {
                text: '해외 라디오를 몰래 듣는다',
                hint: '정확한 정세를 얻을 수 있지만 감시 위험이 오른다.',
                tone: '저항',
                effects: { information: 24, misjudgment: -12, risk: 12, surveillance: 16, exposureRisk: 10, resistance: 1 },
                result: '잡음 사이로 공식 발표와 다른 숫자가 들렸다. 더 많이 알게 되었고, 더 불안해졌다.',
                consequence: '당신은 진실에 가까워졌다. 그러나 진실에 가까워지는 길은 더 감시받는 길이었다.',
                flags: ['foreign_radio'],
            },
            {
                text: '제국 내부 문서를 돈 주고 산다',
                hint: '정보 정확도는 높지만 돈과 노출 위험을 치른다.',
                tone: '회색',
                effects: { money: -18, information: 30, misjudgment: -18, risk: 16, exposureRisk: 18, opportunist: 1 },
                result: '문서는 짧고 차가웠다. 신문이 숨긴 숫자가 그 안에 있었다.',
                consequence: '당신은 정확한 정보를 샀다. 그리고 정보가 거래되는 세계에 한 발 더 들어섰다.',
                flags: ['bought_internal_docs'],
            },
        ],
    },
    {
        ageOffset: 9,
        chapter: '가정과 책임',
        title: '집을 살 기회',
        news: '제국 은행은 협력 가정에 낮은 이자의 주택 대출을 제공한다고 밝혔다.',
        body: '배우자는 안정된 집을 원한다. 계약서에는 당신의 직장과 제국 신뢰가 담보처럼 적혀 있다.',
        speaker: '배우자',
        dialogue: '우리가 언제까지 남의 방에서 아이를 꿈꿔야 해?',
        visual: {
            label: '은행 상담실',
            mood: '대출 서류, 낡은 결혼반지, 계산기 소리',
            gradient: 'from-[#3f4a4f] via-[#8c7b65] to-[#d6c39a]',
            imageSrc: '/image/graare/bank-office.jpg',
        },
        choices: [
            {
                text: '제국 주택 대출을 받는다',
                hint: '가족은 크게 안정된다. 부채가 생긴다.',
                tone: '협력',
                effects: { money: 20, debt: 36, family: 24, status: 12, empireTrust: 12, conscience: -8 },
                result: '열쇠는 차가웠지만 집 안은 따뜻했다. 문패에는 제국식 표기가 먼저 새겨졌다.',
                consequence: '가족은 안전해졌지만, 당신의 삶은 제국의 장부와 더 단단히 묶였다.',
                flags: ['empire_home_loan'],
            },
            {
                text: '낡은 집을 고쳐 산다',
                hint: '불편하지만 빚과 의존을 피한다.',
                tone: '중립',
                effects: { money: -14, family: 6, conscience: 4, peopleTrust: 4 },
                result: '비가 새는 곳은 많았다. 그래도 문패는 당신의 글자로 남았다.',
                consequence: '당신은 느린 안정을 택했다. 가족은 불편함을 감수했고, 당신은 의존을 피했다.',
            },
            {
                text: '명의를 나누어 우회 구매한다',
                hint: '안정과 회피를 동시에 노린다. 나중에 약점이 된다.',
                tone: '회색',
                effects: { money: 8, debt: 20, family: 16, status: 8, risk: 10, opportunist: 1 },
                result: '서류상 집주인은 당신이 아니었다. 그래서 더 자주 서류를 확인하게 됐다.',
                consequence: '당신은 제도 안팎을 오갔다. 가족은 안정됐지만, 당신은 거짓 서류를 삶의 일부로 받아들였다.',
                flags: ['proxy_house'],
            },
        ],
    },
    {
        ageOffset: 12,
        chapter: '관계와 배신',
        title: '친구의 부탁',
        news: '금지 문서를 유포한 혐의로 루멘 청년 몇 명이 수배되었다.',
        body: '어릴 적 친구가 젖은 외투를 입고 찾아왔다. 하룻밤만 숨겨 달라고 한다.',
        speaker: '친구',
        dialogue: '네가 거절해도 이해해. 그런데 오늘 밤은 갈 곳이 없어.',
        visual: {
            label: '비 내리는 골목',
            mood: '젖은 외투, 낮은 목소리, 꺼진 가로등',
            gradient: 'from-[#1f2a34] via-[#52636a] to-[#a4a097]',
            imageSrc: '/image/graare/rainy-alley.jpg',
        },
        choices: [
            {
                text: '숨겨주고 길을 알려준다',
                hint: '민중 신뢰를 얻지만 가족까지 위험해질 수 있다.',
                tone: '저항',
                effects: { money: -8, family: -12, conscience: 14, peopleTrust: 22, empireTrust: -14, risk: 22, resistance: 2 },
                result: '새벽이 되기 전 친구는 떠났다. 배우자는 잠든 아이의 이불을 더 세게 붙잡았다.',
                consequence: '당신은 친구를 살렸을지 모른다. 대신 가족은 당신의 선의가 불러온 위험을 함께 떠안았다.',
                flags: ['helped_friend'],
            },
            {
                text: '돈을 받고 정보만 건넨다',
                hint: '양쪽을 모두 잃을 수 있다.',
                tone: '회색',
                effects: { money: 16, conscience: -8, peopleTrust: -6, information: 10, opportunist: 2, risk: 8 },
                result: '친구는 돈을 놓고 갔다. 그 돈은 오래도록 쓰기 어려웠다.',
                consequence: '당신은 도움과 거래 사이의 선을 흐렸다. 그 선은 당신 안에서도 흐려졌다.',
                flags: ['sold_info_friend'],
            },
            {
                text: '신고한다',
                hint: '가족은 안전해지지만 기록에 남는다.',
                tone: '협력',
                effects: { money: 20, family: 10, status: 12, empireTrust: 24, peopleTrust: -24, conscience: -22, guilt: 2 },
                result: '며칠 뒤 포상금을 받았다. 골목 사람들은 당신을 보며 말을 줄였다.',
                consequence: '당신은 가족의 안전을 샀다. 대가는 친구의 밤과 이웃의 침묵이었다.',
                flags: ['reported_friend'],
            },
            {
                text: '못 본 척 문을 닫는다',
                hint: '위험은 피하지만 관계가 끊어진다.',
                tone: '중립',
                effects: { family: 2, conscience: -10, peopleTrust: -8, risk: -4 },
                result: '문밖의 발소리는 한동안 멈춰 있었다. 다음 날 골목에는 아무도 없었다.',
                consequence: '당신은 직접 해치지 않았다. 하지만 외면은 누군가에게 충분히 큰 결과였다.',
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
        visual: {
            label: '군수 창고',
            mood: '쌓인 상자, 철 냄새, 숫자가 늘어나는 장부',
            gradient: 'from-[#252a2e] via-[#6d675c] to-[#b99054]',
            imageSrc: '/image/graare/munitions-warehouse.jpg',
        },
        choices: [
            {
                text: '계약을 수락한다',
                hint: '큰돈을 벌 수 있다. 누군가의 고통과 연결된다.',
                tone: '협력',
                effects: { money: 70, family: 20, status: 28, empireTrust: 36, peopleTrust: -36, conscience: -30, guilt: 3 },
                result: '장부의 숫자는 아름답게 늘었다. 이름 없는 물자표도 함께 늘었다.',
                consequence: '가족의 미래는 밝아졌다. 그러나 그 빛은 다른 사람의 어둠 위에 세워졌다.',
                flags: ['war_supplier'],
            },
            {
                text: '계약을 거절한다',
                hint: '도덕적 부담은 피하지만 가족의 원망을 들을 수 있다.',
                tone: '저항',
                effects: { money: -18, family: -18, status: -12, empireTrust: -18, peopleTrust: 14, conscience: 18, risk: 10, resistance: 1 },
                result: '배우자는 오래 말이 없었다. 거절서에는 당신의 서명이 작게 남았다.',
                consequence: '당신은 깨끗한 손을 택했다. 그러나 가족은 빈손의 무게를 함께 느꼈다.',
            },
            {
                text: '일부 물자를 빼돌려 사람들을 돕는다',
                hint: '양쪽을 건드린다. 발각되면 매우 위험하다.',
                tone: '회색',
                effects: { money: 26, family: 4, empireTrust: 10, peopleTrust: 12, conscience: 6, risk: 24, resistance: 1, opportunist: 2 },
                result: '창고 장부에는 오차가 생겼고, 골목의 배급 줄에는 잠시 웃음이 생겼다.',
                consequence: '당신은 더러운 계약에서 작은 선의를 꺼냈다. 그러나 더러운 계약 자체는 사라지지 않았다.',
                flags: ['diverted_supplies'],
            },
            {
                text: '계약 정보를 새벽회에 흘린다',
                hint: '저항을 돕지만 가족까지 감시될 수 있다.',
                tone: '저항',
                effects: { money: -8, family: -14, empireTrust: -22, peopleTrust: 24, conscience: 16, risk: 30, resistance: 2 },
                result: '며칠 뒤 철도 창고에 불이 났다. 당신은 아이에게 창문에서 떨어져 있으라고 말했다.',
                consequence: '당신은 전쟁의 흐름에 균열을 냈다. 그 균열은 당신 집의 문틈까지 들어왔다.',
                flags: ['leaked_contract'],
            },
        ],
    },
    {
        ageOffset: 24,
        chapter: '기록과 책임',
        title: '증거 인멸',
        news: '제국 내부에서는 패전 가능성을 언급하는 문서를 급히 소각하고 있다.',
        body: '문서고에는 당신의 서명, 계약서, 징집 명단, 구호소 장부가 있다. 기록은 생각보다 성실하다.',
        speaker: '상사',
        dialogue: '살고 싶으면 종이는 태우고, 기억은 각자 알아서 지우는 겁니다.',
        visual: {
            label: '지하 문서고',
            mood: '연기, 서류철, 불빛에 드러난 서명',
            gradient: 'from-[#16191d] via-[#5b443a] to-[#bb7444]',
            imageSrc: '/image/graare/archive-room.jpg',
        },
        choices: [
            {
                text: '불리한 문서를 삭제한다',
                hint: '조사 위험을 줄인다. 기회주의 기록이 남는다.',
                tone: '회색',
                effects: { money: 8, peopleTrust: -12, conscience: -16, risk: -8, opportunist: 3, guilt: 1 },
                result: '연기는 매캐했다. 당신은 눈물인지 연기인지 구분하지 않기로 했다.',
                consequence: '당신은 과거를 줄였다고 믿었다. 그러나 지운 기록은 마음속에서 더 크게 남았다.',
                flags: ['destroyed_evidence'],
            },
            {
                text: '그대로 남긴다',
                hint: '미래의 평가를 받아들인다.',
                tone: '중립',
                effects: { conscience: 10, empireTrust: -8, risk: 8, information: 6 },
                result: '당신은 서랍을 닫았다. 닫힌 것은 서랍뿐이었다.',
                consequence: '당신은 변명도 조작도 하지 않았다. 하지만 기록이 말할 내용까지 바꿀 수는 없었다.',
            },
            {
                text: '새벽회에 기록을 전달한다',
                hint: '역사의 증거가 된다. 지금은 매우 위험하다.',
                tone: '저항',
                effects: { money: -16, family: -18, empireTrust: -34, peopleTrust: 34, conscience: 24, risk: 36, resistance: 3 },
                result: '문서 묶음은 빵 자루 아래 숨겨졌다. 당신은 처음으로 기록이 무기가 될 수 있음을 알았다.',
                consequence: '당신은 자신에게도 불리할 수 있는 기록을 살렸다. 진실은 당신 편만 들어주지 않는다.',
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
        visual: {
            label: '낡은 식탁',
            mood: '공개된 기록, 접힌 종이, 대답을 기다리는 눈',
            gradient: 'from-[#34312e] via-[#806d58] to-[#d7c09a]',
            imageSrc: '/image/graare/family-table.jpg',
        },
        choices: [
            {
                text: '우리는 살아남아야 했다고 말한다',
                hint: '가족을 중심으로 기억을 정리한다.',
                tone: '중립',
                effects: { family: 8, conscience: -6 },
                result: '자녀는 대답하지 않았다. 살아남았다는 말은 너무 많은 것을 덮었다.',
                consequence: '당신은 생존을 설명했다. 그러나 생존은 모든 선택을 용서하지 않았다.',
            },
            {
                text: '부끄러운 선택까지 말한다',
                hint: '상처를 열지만 침묵은 줄어든다.',
                tone: '저항',
                effects: { family: -4, conscience: 18, peopleTrust: 8, resistance: 1 },
                result: '이야기는 길고 느렸다. 처음으로 가족은 같은 기록을 함께 읽었다.',
                consequence: '당신은 자신을 보호하는 마지막 침묵을 내려놓았다. 진실은 관계를 아프게 했지만 다시 시작할 틈을 만들었다.',
            },
            {
                text: '기록이 모두 사실은 아니라고 말한다',
                hint: '당장은 피할 수 있지만 마지막 기록이 흐려진다.',
                tone: '회색',
                effects: { family: -8, conscience: -14, opportunist: 2 },
                result: '자녀는 종이를 접어 품에 넣었다. 질문은 끝나지 않았다.',
                consequence: '당신은 가족 앞에서도 기록을 흐렸다. 그러나 흐린 말은 신뢰까지 흐리게 만들었다.',
            },
        ],
    },
]

const clamp = (value: number, max = 100) => Math.max(0, Math.min(max, Math.round(value)))

function createPlayer(profile: Profile): Player {
    return {
        ...profile,
        ...baseStats,
        age: 16,
        year: 1,
        job: '가족의 보호자',
        moralFatigue: 0,
        povertyYears: 0,
        flags: [],
        npcs: cloneNpcs(initialNpcs),
        evidenceList: [],
        delayedEffects: [],
        delayedRecords: [],
        globalState: initialGlobalState,
    }
}

function cloneNpcs(npcs: Record<NpcId, NpcMemory>) {
    return Object.fromEntries(Object.entries(npcs).map(([key, value]) => [key, { ...value }])) as Record<NpcId, NpcMemory>
}

function applyChoice(player: Player, choice: Choice, nextAge: number, currentAge: number, event: EventCard) {
    const next = {
        ...player,
        npcs: cloneNpcs(player.npcs),
        evidenceList: [...player.evidenceList],
        delayedEffects: [...player.delayedEffects],
        delayedRecords: [...player.delayedRecords],
    }

    Object.entries(choice.effects).forEach(([key, value]) => {
        const statKey = key as keyof Stats
        const max = statKey === 'money' || statKey === 'debt' ? 999 : 100
        next[statKey] = clamp(next[statKey] + (value ?? 0), max)
    })

    applyTonePressure(next, choice)
    applyNpcEffects(next, choice)
    applyEvidenceEffects(next, choice, currentAge, event)
    applyDelayedEffects(next, choice, currentAge, event)

    const globalState = getGlobalStateForAge(nextAge)
    next.globalState = globalState

    const livingPressure = getLivingPressure(next)
    const annualCost = 8 + Math.floor(next.debt * 0.08) + Math.floor(livingPressure / 12) + Math.floor(globalState.inflation / 18)
    next.money = clamp(next.money - annualCost, 999)
    next.food = clamp(next.food - 7 - Math.floor(globalState.inflation / 30) + Math.floor(next.money / 60))
    next.medicine = clamp(next.medicine - (next.family < 45 ? 8 : 4))
    next.risk = clamp(next.risk + Math.floor((next.surveillance + next.exposureRisk + next.fear + globalState.repressionLevel) / 32))

    if (next.money <= 0) {
        next.debt = clamp(next.debt + 12, 999)
        next.family = clamp(next.family - 12)
        next.conscience = clamp(next.conscience - 4)
    }

    if (next.money < 12 || next.food < 25) {
        next.povertyYears += 1
        next.moralFatigue = clamp(next.moralFatigue + 7)
    } else {
        next.povertyYears = 0
    }

    if (next.food < 25) {
        next.family = clamp(next.family - 8)
        next.fear = clamp(next.fear + 6)
    }

    if (next.medicine < 20) {
        next.family = clamp(next.family - 6)
        next.conscience = clamp(next.conscience - 3)
    }

    if (next.rationalization > 55) {
        next.conscience = clamp(next.conscience - 3)
        next.misjudgment = clamp(next.misjudgment + 4)
    }

    if (choice.tone === '저항' || next.family < 35 || next.risk > 65) {
        next.moralFatigue = clamp(next.moralFatigue + 5)
    }

    const triggered = resolveDelayedEffects(next, nextAge)
    const flags = Array.from(new Set([...next.flags, ...(choice.flags ?? []), ...triggered.flags]))

    return {
        ...next,
        age: nextAge,
        year: next.year + 1,
        job: getJob(flags),
        flags,
        delayedRecords: [...next.delayedRecords, ...triggered.records],
    }
}

function applyTonePressure(player: Player, choice: Choice) {
    if (choice.tone === '협력') {
        player.rationalization = clamp(player.rationalization + 7)
        player.surveillance = clamp(player.surveillance - 3)
        player.npcs.empireBoss.trust = clamp(player.npcs.empireBoss.trust + 8)
        player.npcs.neighbor.resentment = clamp(player.npcs.neighbor.resentment + 5)
    }

    if (choice.tone === '저항') {
        const fatigueCost = player.moralFatigue > 60 ? 6 : 0
        player.fear = clamp(player.fear + 8 + fatigueCost)
        player.surveillance = clamp(player.surveillance + 10)
        player.exposureRisk = clamp(player.exposureRisk + 8)
        player.family = clamp(player.family - fatigueCost)
        player.npcs.friendA.trust = clamp(player.npcs.friendA.trust + 10)
        player.npcs.spouse.fear = clamp(player.npcs.spouse.fear + 8)
    }

    if (choice.tone === '회색') {
        player.rationalization = clamp(player.rationalization + 10)
        player.exposureRisk = clamp(player.exposureRisk + 8)
        player.npcs.journalist.evidence = clamp(player.npcs.journalist.evidence + 5)
    }

    if (choice.tone === '중립') {
        player.misjudgment = clamp(player.misjudgment + 3)
    }
}

function applyNpcEffects(player: Player, choice: Choice) {
    Object.entries(choice.npcEffects ?? {}).forEach(([npcId, effects]) => {
        const npc = player.npcs[npcId as NpcId]
        Object.entries(effects ?? {}).forEach(([key, value]) => {
            const memoryKey = key as keyof NpcMemory
            npc[memoryKey] = clamp(npc[memoryKey] + (value ?? 0))
        })
    })
}

function applyEvidenceEffects(player: Player, choice: Choice, currentAge: number, event: EventCard) {
    const createdEvidence = [...(choice.evidenceCreates ?? []), ...getAutomaticEvidence(choice, event)]

    createdEvidence.forEach((evidence, index) => {
        player.evidenceList.push({
            ...evidence,
            id: `${event.title}-${choice.text}-${currentAge}-${index}`,
            year: currentAge,
            active: true,
        })
    })

    choice.evidenceRemoves?.forEach((type) => {
        const target = player.evidenceList.find((evidence) => evidence.type === type && evidence.active)
        if (target) {
            target.active = false
            player.opportunist = clamp(player.opportunist + 1)
            player.evidenceList.push({
                id: `destroyed-${target.id}`,
                type: 'destroyed_evidence',
                title: '증거 인멸 흔적',
                description: `${target.title} 기록이 사라졌지만, 삭제 흔적이 남았다.`,
                year: currentAge,
                source: '문서고',
                active: true,
            })
        }
    })
}

function getAutomaticEvidence(choice: Choice, event: EventCard): Omit<Evidence, 'id' | 'year' | 'active'>[] {
    const evidence: Omit<Evidence, 'id' | 'year' | 'active'>[] = []

    if (choice.text.includes('서명') || choice.text.includes('서약')) {
        evidence.push({
            type: 'signed_document',
            title: '서명 문서',
            description: `${event.title}에서 남긴 서명 기록`,
            source: '제국청',
        })
    }

    if (choice.text.includes('계약')) {
        evidence.push({
            type: 'contract',
            title: '군수 계약서',
            description: `${event.title} 선택으로 남은 계약 기록`,
            source: '제국청 장부',
        })
    }

    if (choice.text.includes('숨겨주') || choice.text.includes('돕')) {
        evidence.push({
            type: 'secret_help',
            title: '비밀 도움 기록',
            description: `${event.title}에서 누군가를 도운 비공식 기억`,
            source: '증언',
        })
    }

    if (choice.text.includes('신고')) {
        evidence.push({
            type: 'testimony',
            title: '신고 접수 기록',
            description: `${event.title}에서 접수된 신고 기록`,
            source: '치안 기록',
        })
    }

    return evidence
}

function applyDelayedEffects(player: Player, choice: Choice, currentAge: number, event: EventCard) {
    const automatic = getAutomaticDelayedEffects(choice, currentAge, event)
    const explicit = (choice.delayedEffects ?? []).map((effect, index) => ({
        ...effect,
        id: `${event.title}-${choice.text}-delayed-${index}`,
        triggerYear: currentAge + 15,
        resolved: false,
    }))

    player.delayedEffects.push(...automatic, ...explicit)
}

function getAutomaticDelayedEffects(choice: Choice, currentAge: number, event: EventCard): DelayedEffect[] {
    if (choice.text.includes('숨겨주')) {
        return [
            {
                id: `${event.title}-neighbor-defense-${currentAge}`,
                triggerYear: currentAge + 18,
                triggerCondition: '후반 재판',
                description: '당신이 도왔던 사람이 기록관에서 변호 증언을 했다.',
                effects: { peopleTrust: 8, resistance: 1 },
                witnessId: 'friendA',
                evidenceId: 'secret_help',
                resolved: false,
            },
        ]
    }

    if (choice.text.includes('신고')) {
        return [
            {
                id: `${event.title}-accusation-${currentAge}`,
                triggerYear: currentAge + 16,
                triggerCondition: '후반 재판',
                description: '신고당한 사람의 가족이 기록관에서 고발 증언을 했다.',
                effects: { guilt: 1, peopleTrust: -8 },
                witnessId: 'neighbor',
                evidenceId: 'testimony',
                resolved: false,
            },
        ]
    }

    if (choice.text.includes('계약을 수락')) {
        return [
            {
                id: `${event.title}-contract-evidence-${currentAge}`,
                triggerYear: currentAge + 12,
                triggerCondition: '제국 패망 이후',
                description: '군수 계약서가 책임 심사의 증거로 제출되었다.',
                effects: { guilt: 1, exposureRisk: 8 },
                witnessId: 'journalist',
                evidenceId: 'contract',
                resolved: false,
            },
        ]
    }

    return []
}

function resolveDelayedEffects(player: Player, nextAge: number) {
    const records: string[] = []
    const flags: string[] = []

    player.delayedEffects = player.delayedEffects.map((effect) => {
        if (effect.resolved || effect.triggerYear > nextAge) {
            return effect
        }

        Object.entries(effect.effects).forEach(([key, value]) => {
            const statKey = key as keyof Stats
            const max = statKey === 'money' || statKey === 'debt' ? 999 : 100
            player[statKey] = clamp(player[statKey] + (value ?? 0), max)
        })

        if (effect.witnessId) {
            player.npcs[effect.witnessId].evidence = clamp(player.npcs[effect.witnessId].evidence + 12)
        }

        records.push(effect.description)
        flags.push(`delayed_${effect.id}`)
        return { ...effect, resolved: true }
    })

    return { records, flags }
}

function getGlobalStateForAge(age: number): GlobalState {
    const progress = clamp((age - 18) * 4)
    return {
        empireStability: clamp(86 - progress * 0.75),
        warIntensity: clamp(8 + progress * 0.85),
        inflation: clamp(18 + progress * 0.7),
        repressionLevel: clamp(24 + progress * 0.55),
        liberationChance: clamp(4 + progress * 0.82),
        propagandaStrength: clamp(72 - progress * 0.28),
    }
}

function getLivingPressure(player: Player) {
    return clamp(
        (100 - player.family) * 0.8 +
            player.debt * 0.4 +
            (100 - player.food) * 0.55 +
            (100 - player.medicine) * 0.45 -
            player.money * 0.12,
    )
}

function getResponsibilityScore(player: Player, history: HistoryItem[]) {
    const directHarm = history.filter((item) => item.tone === '협력').length
    const rescue = history.filter((item) => item.tone === '저항').length

    return Math.max(
        0,
        Math.round(
            player.guilt * 12 +
                directHarm * 14 +
                player.misjudgment * 0.5 +
                player.exposureRisk * 0.4 +
                player.opportunist * 6 -
                player.resistance * 10 -
                rescue * 5 -
                player.peopleTrust * 0.12,
        ),
    )
}

function getWitnesses(player: Player, history: HistoryItem[]) {
    const witnesses: string[] = []
    const helped = history.find((item) => item.choice.includes('숨겨주고'))
    const reported = history.find((item) => item.choice.includes('신고'))
    const contract = history.find((item) => item.choice.includes('계약을 수락'))
    const confession = history.find((item) => item.choice.includes('부끄러운 선택'))
    const radio = history.find((item) => item.choice.includes('해외 라디오'))

    if (helped) {
        witnesses.push('그날 밤 당신이 숨겨준 친구의 가족은 “우리는 그 선택 때문에 며칠을 더 벌었다”고 증언했다.')
    }

    if (reported) {
        witnesses.push('골목 사람들은 포상금이 지급된 날 이후 당신의 집 앞에서 말을 낮추었다고 기록했다.')
    }

    if (contract) {
        witnesses.push('군수 계약 장부에는 당신의 서명과 납품 숫자가 함께 남아 있었다.')
    }

    if (radio) {
        witnesses.push('압수 기록에는 당신이 공식 발표와 다른 정보를 찾으려 했다는 흔적이 남아 있었다.')
    }

    if (confession) {
        witnesses.push('가족은 뒤늦은 고백이 상처를 없애지는 못했지만, 침묵을 끝냈다고 말했다.')
    }

    if (player.rationalization >= 55) {
        witnesses.push('기록관은 당신의 진술에서 “가족을 위해서였다”는 문장이 반복되었다고 적었다.')
    }

    if (witnesses.length === 0) {
        witnesses.push('기록관에는 큰 증언이 남지 않았다. 침묵 역시 당신의 시대가 남긴 한 장의 기록이었다.')
    }

    return witnesses.slice(0, 4)
}

function getChoiceSummaries(choice: Choice, player: Player) {
    const summaries: string[] = []

    if ((choice.effects.empireTrust ?? 0) > 0) summaries.push('제국 내 입지가 좋아졌습니다.')
    if ((choice.effects.peopleTrust ?? 0) > 0) summaries.push('민중의 신뢰가 조금 올라갔습니다.')
    if ((choice.effects.family ?? 0) > 0) summaries.push('가족은 당분간 안도했습니다.')
    if ((choice.effects.conscience ?? 0) < 0) summaries.push('양심은 조금 무거워졌습니다.')
    if ((choice.effects.risk ?? 0) > 0 || player.surveillance > 55) summaries.push('감시와 위험이 커졌습니다.')
    if (choice.tone === '협력' || choice.tone === '회색') summaries.push('몇몇 기록은 나중에 다시 읽힐 수 있습니다.')
    if (choice.tone === '저항') summaries.push('누군가는 이 선택을 기억할 것입니다.')

    return summaries.length > 0 ? summaries : ['상황은 크게 달라지지 않았지만, 선택은 기록으로 남았습니다.']
}

function getSocialImage(player: Player) {
    if (player.opportunist >= 4 || player.rationalization >= 75) return '말 바꾸는 사람'
    if (player.flags.includes('war_supplier') || player.money >= 95) return '돈 냄새 나는 사업가'
    if (player.resistance >= 5 || player.risk >= 70) return '위험한 이상주의자'
    if (player.empireTrust >= 70 && player.fear >= 55) return '무서운 행정관'
    if (player.empireTrust >= 55 && player.guilt <= 3) return '착한 협력자'
    if (player.empireTrust >= 45 || player.status >= 45) return '제국의 사람'
    return '조용한 생존자'
}

function getPressureSentences(player: Player) {
    const sentences: string[] = []
    const livingPressure = getLivingPressure(player)

    sentences.push(livingPressure > 65 ? '이번 달을 넘기려면 돈이 필요합니다.' : '생활은 아직 버틸 수 있지만 여유롭지는 않습니다.')
    sentences.push(player.food < 30 ? '식량이 부족해 가족의 말수가 줄었습니다.' : '식량은 당장 버틸 만큼 남아 있습니다.')
    sentences.push(player.debt > 40 ? '부채 이자가 다음 선택을 좁히고 있습니다.' : '부채 압박은 아직 감당 가능한 수준입니다.')
    sentences.push(player.family < 45 ? '가족 안정이 흔들리고 있습니다.' : '가족은 아직 당신의 선택을 버티고 있습니다.')
    sentences.push(player.surveillance > 45 ? '제국의 감시가 가까워졌습니다.' : '감시는 아직 멀리 있는 것처럼 보입니다.')
    sentences.push(player.exposureRisk > 45 ? '문서 기록이 남을 수 있습니다.' : '이번 선택은 아직 크게 드러나지 않을 수 있습니다.')

    return sentences
}

function getChoiceValues(choice: Choice) {
    if (choice.values) return choice.values
    if (choice.tone === '협력') return ['가족', '돈', '안전']
    if (choice.tone === '저항') return ['양심', '미래', '관계']
    if (choice.tone === '회색') return ['기만', '돈', '미래']
    return ['회피', '안전', '가족']
}

function getChoiceBurdens(choice: Choice) {
    if (choice.burdens) return choice.burdens
    if (choice.tone === '협력') return ['양심', '기록', '민중 시선']
    if (choice.tone === '저항') return ['가족', '위험', '제국 의심']
    if (choice.tone === '회색') return ['기록', '노출 위험', '양심']
    return ['미래 책임', '관계 단절']
}

function getFamilyEvaluation(player: Player) {
    if (player.family >= 75 && player.conscience < 35) {
        return '가족은 살아남았지만, 어떤 침묵이 그 생존을 가능하게 했는지 묻기 시작했습니다.'
    }
    if (player.family < 35 && player.resistance >= 4) {
        return '가족은 당신의 신념을 이해하려 했지만, 그 신념의 비용을 함께 치렀습니다.'
    }
    if (player.npcs.spouse.resentment > 45) {
        return '배우자는 당신이 가족을 위한다고 말할 때마다 무엇을 숨겼는지 떠올렸습니다.'
    }
    if (player.npcs.child.trust < 35) {
        return '자녀는 당신의 설명보다 기록을 먼저 믿게 되었습니다.'
    }
    return '가족은 당신의 선택을 단순히 용서하거나 단죄하지 못했습니다. 그들은 살아남은 날들과 남겨진 질문을 함께 기억했습니다.'
}

function formatAgeRange(ageRange: number | '') {
    if (ageRange === '') return '연령대 미선택'
    return ageRange >= 70 ? '70대 이상' : `${ageRange}대`
}

function getHistoricalEvaluation(player: Player, judgment: number) {
    if (judgment >= 130) return '기록관은 당신을 시대의 가해 구조에 적극적으로 편입된 인물로 분류했습니다.'
    if (judgment >= 80) return '기록관은 당신의 생존 논리를 인정하면서도 협력 책임을 지울 수 없다고 판단했습니다.'
    if (player.resistance >= 6) return '기록관은 당신의 저항 기록을 확인했지만, 그 선택이 만든 주변의 대가도 함께 적었습니다.'
    if (player.opportunist >= 5) return '기록관은 당신의 노선 변화와 증거 회피를 가장 불리한 대목으로 보았습니다.'
    return '기록관은 당신을 선명한 한 문장으로 정리하지 못했습니다. 그래서 더 많은 선택 기록을 남겼습니다.'
}

function getJob(flags: string[]) {
    if (flags.includes('war_supplier')) return '군수 사업가'
    if (flags.includes('empire_clerk')) return '제국청 직원'
    if (flags.includes('lumen_teacher')) return '루멘어 교사'
    if (flags.includes('night_school')) return '비밀 야학 조력자'
    if (flags.includes('market_vendor')) return '노점상'
    return '가족의 보호자'
}

function getEnding(player: Player, history: HistoryItem[]) {
    const responsibility = getResponsibilityScore(player, history)

    if (responsibility >= 130) {
        return {
            title: '역사의 가해자',
            text: `${player.nickname}의 선택은 가족을 살렸을지 모른다. 그러나 기록관은 그 생존 뒤에 남겨진 피해자들의 이름을 함께 읽었다.`,
            reflection: '선택은 언제나 사정과 함께 존재한다. 그러나 사정이 많다고 해서 책임이 사라지지는 않는다.',
            judgment: responsibility,
        }
    }

    if (responsibility >= 80) {
        return {
            title: '협력 책임자',
            text: `${player.nickname}은 시대의 명령을 따랐다고 말했다. 그러나 증언자들은 그 명령이 누군가에게 어떤 결과였는지 말하기 시작했다.`,
            reflection: '나쁜 의도가 없었다는 말은 중요하다. 하지만 피해를 만든 구조 안에서 얻은 안정도 함께 보아야 한다.',
            judgment: responsibility,
        }
    }

    if (responsibility >= 35) {
        return {
            title: '회색 인물',
            text: `${player.nickname}의 기록에는 도움과 외면, 생존과 계산이 함께 남았다.`,
            reflection: '역사는 사람을 쉽게 단정하지 못한다. 그래서 더 불편하게, 하나하나의 선택을 다시 묻는다.',
            judgment: responsibility,
        }
    }

    if (player.risk >= 90 && player.empireTrust < 30) {
        return {
            title: '체포된 이름',
            text: `${player.nickname}은 시대를 배신하지 않으려 했다. 그러나 가족은 그 대가를 함께 짊어졌다.`,
            reflection: '위험을 감수한 선택은 숭고할 수 있지만, 그 위험은 언제나 혼자만의 것이 아니었다.',
            judgment: responsibility,
        }
    }

    if (player.empireTrust >= 75 && player.guilt >= 6) {
        return {
            title: '성공한 협력자, 몰락한 이름',
            text: `${player.nickname}은 가족을 지켰다. 그러나 수많은 가족을 무너뜨리는 데 기여했다.`,
            reflection: '가족을 위한 선택이라는 말은 진실일 수 있다. 그러나 그 진실이 타인의 피해를 지우지는 못한다.',
            judgment: responsibility,
        }
    }

    if (player.resistance >= 7 && player.peopleTrust >= 60) {
        return {
            title: '가난한 저항자',
            text: `${player.nickname}은 시대를 배신하지 않았다. 그러나 곁의 사람들은 대가를 함께 짊어졌다.`,
            reflection: '옳은 선택도 누군가에게 상처가 된다. 그래서 도덕은 승리보다 책임에 가깝다.',
            judgment: responsibility,
        }
    }

    if (player.opportunist >= 5) {
        return {
            title: '막판의 변절자',
            text: `${player.nickname}은 편을 바꿨다. 마음을 바꾼 것인지는 아무도 알 수 없었다.`,
            reflection: '살아남기 위해 남긴 여지는 때로 지혜였고, 때로 자신도 믿지 못할 변명이 되었다.',
            judgment: responsibility,
        }
    }

    if (player.family >= 78 && player.guilt >= 4 && player.conscience <= 40) {
        return {
            title: '가족만을 위한 사람',
            text: `${player.nickname}의 집에는 불이 꺼지지 않았다. 대신 다른 집들의 불을 보지 않기로 했다.`,
            reflection: '가장 가까운 사람을 지키는 마음은 선하다. 하지만 선한 마음이 좁아질 때, 바깥의 고통은 더 쉽게 외면된다.',
            judgment: responsibility,
        }
    }

    if (player.guilt <= 2 && player.resistance <= 2 && player.peopleTrust < 45 && player.empireTrust < 45) {
        return {
            title: '이름 없는 사람',
            text: `${player.nickname}은 살아남았다. 그러나 시대는 조용히 지나쳐 갔다.`,
            reflection: '아무것도 하지 않는 선택은 죄가 아닐 수 있다. 그러나 아무 흔적도 남기지 않는 삶이 반드시 평온한 것은 아니다.',
            judgment: responsibility,
        }
    }

    return {
        title: '회색의 생존자',
        text: `역사는 ${player.nickname}을 단정하지 못했다. 생존과 양심, 회피와 책임이 함께 남았다.`,
        reflection: '삶은 선명한 색으로만 기록되지 않는다. 중요한 것은 회색을 부정하지 않고, 그 안에서 무엇을 감수했는지 보는 일이다.',
        judgment: responsibility,
    }
}

const publicStats = [
    { key: 'money', label: '재산', Icon: Coins, max: 160, inverse: false, description: '당장 쓸 수 있는 현금과 선택의 여유입니다.' },
    { key: 'debt', label: '부채', Icon: Scale, max: 120, inverse: true, description: '높을수록 매년 생활비와 압박이 커집니다.' },
    { key: 'food', label: '식량', Icon: Coins, max: 100, inverse: false, description: '부족하면 가족 안정과 공포심에 바로 영향을 줍니다.' },
    { key: 'medicine', label: '의약품', Icon: HeartPulse, max: 100, inverse: false, description: '가족의 건강과 돌봄을 버티게 하는 자원입니다.' },
    { key: 'family', label: '가족 안정', Icon: Users, max: 100, inverse: false, description: '가족이 당신의 선택을 감당할 수 있는 정도입니다.' },
    { key: 'status', label: '사회적 지위', Icon: UserRound, max: 100, inverse: false, description: '관공서, 계약, 영향력에 접근할 수 있는 힘입니다.' },
    { key: 'conscience', label: '양심', Icon: HeartPulse, max: 100, inverse: false, description: '스스로의 선택을 견디는 내면의 안정입니다.' },
    { key: 'rationalization', label: '자기합리화', Icon: Info, max: 100, inverse: true, description: '높을수록 불편한 선택을 그럴듯하게 덮습니다.' },
    { key: 'information', label: '정보력', Icon: Info, max: 100, inverse: false, description: '선전과 소문 사이에서 정세를 읽는 힘입니다.' },
    { key: 'misjudgment', label: '오판 위험', Icon: ShieldAlert, max: 100, inverse: true, description: '높을수록 잘못된 정보로 미래를 판단할 수 있습니다.' },
    { key: 'fear', label: '공포심', Icon: ShieldAlert, max: 100, inverse: true, description: '두려움이 커질수록 용기 있는 선택이 무거워집니다.' },
    { key: 'surveillance', label: '감시도', Icon: ShieldAlert, max: 100, inverse: true, description: '제국이 당신을 주시하는 정도입니다.' },
    { key: 'exposureRisk', label: '노출 위험', Icon: ShieldAlert, max: 100, inverse: true, description: '문서, 소문, 증언으로 드러날 가능성입니다.' },
    { key: 'risk', label: '위험도', Icon: ShieldAlert, max: 100, inverse: true, description: '체포, 보복, 습격 같은 직접 위험입니다.' },
] as const

const derivedStats = [
    { key: 'moralFatigue', label: '도덕 피로도', Icon: HeartPulse, max: 100, inverse: true, description: '계속 감수한 손실이 양심적 선택을 더 어렵게 만듭니다.' },
] as const

const toneStyles: Record<Tone, string> = {
    협력: 'border-[#6d4c1f] bg-[#f5e4b6] text-[#302512]',
    저항: 'border-[#285c4d] bg-[#d7eadf] text-[#14362d]',
    중립: 'border-[#5d6470] bg-[#e6e8eb] text-[#252a31]',
    회색: 'border-[#5c5363] bg-[#e4dce6] text-[#312a35]',
}

export default function MoralDilemmaGame() {
    const [phase, setPhase] = useState<Phase>('setup')
    const [profile, setProfile] = useState<Profile>({ nickname: '', gender: '', startAge: '' })
    const [player, setPlayer] = useState<Player>(() => createPlayer({ nickname: '플레이어', gender: '남성', startAge: 10 }))
    const [eventIndex, setEventIndex] = useState(0)
    const [history, setHistory] = useState<HistoryItem[]>([])
    const [lastResult, setLastResult] = useState<string | null>(null)
    const [isResultOpen, setIsResultOpen] = useState(false)
    const [judgmentView, setJudgmentView] = useState<'family' | 'conscience' | 'money' | 'safety' | 'future'>('family')
    const event = events[eventIndex]
    const currentAge = 16 + event.ageOffset
    const ending = useMemo(() => getEnding(player, history), [player, history])
    const witnesses = useMemo(() => getWitnesses(player, history), [player, history])
    const socialImage = getSocialImage(player)
    const lastHistory = history.at(-1)
    const isProfileComplete = profile.nickname.trim().length > 0 && profile.gender !== '' && profile.startAge !== ''

    const startGuide = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!isProfileComplete) return
        const nickname = profile.nickname.trim()
        const nextProfile = { ...profile, nickname }
        setProfile(nextProfile)
        setPlayer(createPlayer(nextProfile))
        setPhase('guide')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const choose = (choice: Choice) => {
        const nextEvent = events[eventIndex + 1]
        const nextAge = nextEvent ? 16 + nextEvent.ageOffset : currentAge
        const evidenceCountBefore = player.evidenceList.length
        const updated = applyChoice(player, choice, nextAge, currentAge, event)
        const newEvidenceIds = updated.evidenceList.slice(evidenceCountBefore).map((evidence) => evidence.id)
        const summaries = getChoiceSummaries(choice, updated)

        setHistory((items) => [
            ...items,
            {
                age: currentAge,
                chapter: event.chapter,
                title: event.title,
                choice: choice.text,
                tone: choice.tone,
                result: choice.result,
                consequence: choice.consequence,
                summaries,
                evidenceIds: newEvidenceIds,
                delayedRecord: updated.delayedRecords.at(-1),
            },
        ])
        setPlayer(updated)
        setLastResult(choice.result)
        setIsResultOpen(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        if (!nextEvent || updated.family <= 0 || updated.risk >= 95) {
            setPhase('ending')
            return
        }

        setEventIndex((index) => index + 1)
        setJudgmentView('family')
    }

    const restart = () => {
        setPhase('setup')
        setProfile({ nickname: '', gender: '', startAge: '' })
        setPlayer(createPlayer({ nickname: '플레이어', gender: '남성', startAge: 10 }))
        setEventIndex(0)
        setHistory([])
        setLastResult(null)
        setIsResultOpen(false)
        setJudgmentView('family')
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
                            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b2f2f]">플레이어 정보</p>

                            <label className="mt-6 block">
                                <span className="text-sm font-black">닉네임</span>
                                <input
                                    value={profile.nickname}
                                    onChange={(event) => setProfile((value) => ({ ...value, nickname: event.target.value }))}
                                    maxLength={12}
                                    placeholder="예: 민준"
                                    required
                                    className="mt-2 h-12 w-full border-2 border-[#1c1a17] bg-white px-3 text-base font-bold outline-none focus:bg-[#fff9ea]"
                                />
                            </label>

                            <div className="mt-5">
                                <p className="text-sm font-black">성별</p>
                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    {(['남성', '여성'] as Gender[]).map((gender) => (
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
                                <span className="text-sm font-black">플레이어 나이</span>
                                <select
                                    value={profile.startAge}
                                    onChange={(event) => setProfile((value) => ({ ...value, startAge: event.target.value === '' ? '' : Number(event.target.value) }))}
                                    required
                                    className="mt-2 h-12 w-full border-2 border-[#1c1a17] bg-white px-3 text-base font-bold outline-none focus:bg-[#fff9ea]"
                                >
                                    <option value="">연령대를 선택하세요</option>
                                    <option value={10}>10대</option>
                                    <option value={20}>20대</option>
                                    <option value={30}>30대</option>
                                    <option value={40}>40대</option>
                                    <option value={50}>50대</option>
                                    <option value={60}>60대</option>
                                    <option value={70}>70대 이상</option>
                                </select>
                            </label>

                            <button
                                type="submit"
                                disabled={!isProfileComplete}
                                className={`mt-7 min-h-12 w-full border-2 border-[#1c1a17] px-5 text-base font-black shadow-[0_5px_0_#1c1a17] transition-transform active:translate-y-1 active:shadow-[0_2px_0_#1c1a17] ${
                                    isProfileComplete
                                        ? 'bg-[#d1a846] hover:-translate-y-0.5'
                                        : 'cursor-not-allowed bg-[#c8c1b4] text-[#5b5143] shadow-[0_5px_0_#6d665d]'
                                }`}
                            >
                                시작하기
                            </button>
                            {!isProfileComplete && (
                                <p className="mt-3 text-sm font-bold leading-relaxed text-[#8b2f2f]">
                                    이름, 성별, 연령대를 모두 입력해야 시작할 수 있습니다.
                                </p>
                            )}
                        </form>

                        <div className="border-2 border-[#1c1a17] bg-[#2d302f] p-5 text-[#f8f2e7] shadow-[0_7px_0_#1c1a17] md:p-7">
                            <BookOpen className="h-9 w-9 text-[#d1a846]" />
                            <h2 className="mt-5 text-2xl font-black md:text-3xl">이 게임에서 하는 일</h2>
                            <p className="mt-5 text-base font-semibold leading-relaxed text-[#f8f2e7]/80">
                                내 삶의 중요한 요소들을 좌우할 선택을 하게 됩니다. 재산, 부채, 가족 안정,
                                사회적 지위, 양심, 정보력, 위험도 수치를 관리하며 신중한 선택을 하세요.
                            </p>
                        </div>
                    </section>
                )}

                {phase === 'guide' && (
                    <section className="mt-6 border-2 border-[#1c1a17] bg-[#f8f2e7] p-5 shadow-[0_7px_0_#1c1a17] md:p-8">
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b2f2f]">게임 설명</p>
                        <h2 className="mt-2 text-3xl font-black">선택은 대가를 남깁니다</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {[
                                ['공개 수치', '재산, 부채, 가족 안정, 사회적 지위, 양심, 정보력, 위험도는 항상 볼 수 있습니다.'],
                                ['숨겨진 기록', '죄책, 저항, 기회주의 기록은 엔딩에서 평가됩니다.'],
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
                                {profile.nickname} / {profile.gender} / 플레이어 {formatAgeRange(profile.startAge)}
                            </p>
                            <p className="mt-2 text-sm font-bold leading-relaxed text-[#5b5143]">
                                게임 속 인물은 16세에서 시작합니다. 입력한 나이는 플레이어 통계용으로만 사용됩니다.
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
                                    <span>{player.year}년차 / {currentAge}세 / {event.chapter}</span>
                                    <span>{player.nickname} / {player.job} / {socialImage}</span>
                                </div>
                                <p className="mt-1 text-xs font-bold text-[#1c1a17]/70">
                                    제국 안정 {player.globalState.empireStability} · 전쟁 강도 {player.globalState.warIntensity} · 물가 {player.globalState.inflation} · 해방 가능성 {player.globalState.liberationChance}
                                </p>
                            </div>

                            <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
                                <SceneVisual event={event} />
                                <div className="p-5 md:p-7">
                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b2f2f]">News</p>
                                    <p className="mt-2 border-b-2 border-[#1c1a17] pb-5 text-base font-bold leading-relaxed text-[#4d4132]">{event.news}</p>
                                    <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">{event.title}</h2>
                                    <p className="mt-5 text-lg font-semibold leading-relaxed text-[#51483b]">{event.body}</p>
                                    <PressurePanel player={player} />
                                    <ReactionPanel event={event} />
                                    <RecordHintPanel event={event} player={player} />
                                    <div className="mt-6 border-l-4 border-[#8b2f2f] bg-[#eee1cc] px-5 py-4">
                                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">{event.speaker}</p>
                                        <p className="mt-2 text-lg font-black leading-relaxed">“{event.dialogue}”</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t-2 border-[#1c1a17] bg-[#ded2bd] p-4">
                                <JudgmentTabs event={event} active={judgmentView} onChange={setJudgmentView} />
                                <div className="mt-4 grid gap-3 md:grid-cols-2">
                                {event.choices.map((choice) => (
                                    <button
                                        key={choice.text}
                                        type="button"
                                        onClick={() => choose(choice)}
                                        className="min-h-[190px] border-2 border-[#1c1a17] bg-white p-4 text-left shadow-[0_4px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                                    >
                                        <span className={`inline-flex border px-2 py-1 text-xs font-black ${toneStyles[choice.tone]}`}>{choice.tone}</span>
                                        <span className="mt-3 block text-lg font-black leading-snug">{choice.text}</span>
                                        <span className="mt-2 block text-sm font-bold leading-relaxed text-[#5b5143]">{choice.hint}</span>
                                        <span className="mt-4 block text-xs font-black uppercase tracking-[0.12em] text-[#8b2f2f]">중심 가치</span>
                                        <span className="mt-2 flex flex-wrap gap-2">
                                            {getChoiceValues(choice).map((value) => (
                                                <span key={value} className="border border-[#1c1a17] bg-[#f5e4b6] px-2 py-1 text-xs font-black">{value}</span>
                                            ))}
                                        </span>
                                        <span className="mt-3 block text-xs font-black uppercase tracking-[0.12em] text-[#5b5143]">예상 부담</span>
                                        <span className="mt-2 flex flex-wrap gap-2">
                                            {getChoiceBurdens(choice).map((burden) => (
                                                <span key={burden} className="border border-[#1c1a17] bg-[#eee1cc] px-2 py-1 text-xs font-black text-[#8b2f2f]">{burden}</span>
                                            ))}
                                        </span>
                                    </button>
                                ))}
                                </div>
                            </div>
                        </article>

                        <aside className="space-y-4">
                            <StatusPanel player={player} />
                            <TrustPanel player={player} />
                            <EvidenceArchivePanel evidenceList={player.evidenceList} />
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
                            <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#5b5143]">{ending.reflection}</p>

                            <div className="mt-8 border-2 border-[#1c1a17] bg-[#2d302f] p-5 text-[#f8f2e7]">
                                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d1a846]">기록관 판정</p>
                                <p className="mt-2 text-4xl font-black">{ending.judgment}</p>
                                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#f8f2e7]/72">
                                    협력 기록, 피해 가능성, 오판 위험, 노출 기록, 저항과 구명 기록을 함께 계산한 책임 점수입니다.
                                </p>
                            </div>

                            <div className="mt-8 grid gap-3 md:grid-cols-3">
                                {[
                                    ['죄책 기록', player.guilt],
                                    ['저항 기록', player.resistance],
                                    ['기회주의 기록', player.opportunist],
                                ].map(([label, value]) => (
                                    <div key={label} className="border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
                                        <p className="text-sm font-black text-[#8b2f2f]">{label}</p>
                                        <p className="mt-2 text-3xl font-black">{value}</p>
                                    </div>
                                ))}
                            </div>

                            <section className="mt-8">
                                <h3 className="text-2xl font-black">제출된 증거 카드</h3>
                                <div className="mt-4 grid gap-3 md:grid-cols-2">
                                    {player.evidenceList.filter((evidence) => evidence.active).length === 0 ? (
                                        <p className="border-2 border-[#1c1a17] bg-white p-4 text-sm font-bold leading-relaxed text-[#5b5143]">
                                            제출된 문서 증거는 거의 없습니다. 그러나 기록이 없다는 사실도 하나의 평가가 됩니다.
                                        </p>
                                    ) : (
                                        player.evidenceList
                                            .filter((evidence) => evidence.active)
                                            .slice(0, 6)
                                            .map((evidence) => (
                                                <article key={evidence.id} className="border-2 border-[#1c1a17] bg-white p-4">
                                                    <p className="text-xs font-black text-[#8b2f2f]">{formatEvidenceType(evidence.type)}</p>
                                                    <p className="mt-1 text-lg font-black">{evidence.title}</p>
                                                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[#5b5143]">{evidence.description}</p>
                                                </article>
                                            ))
                                    )}
                                </div>
                            </section>

                            <section className="mt-8">
                                <h3 className="text-2xl font-black">증언</h3>
                                <div className="mt-4 grid gap-3 md:grid-cols-2">
                                    {witnesses.map((witness) => (
                                        <p key={witness} className="border-2 border-[#1c1a17] bg-[#eee1cc] p-4 text-sm font-bold leading-relaxed text-[#4d4132]">
                                            {witness}
                                        </p>
                                    ))}
                                </div>
                            </section>

                            <section className="mt-8 grid gap-3 md:grid-cols-2">
                                <div className="border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
                                    <p className="text-sm font-black text-[#8b2f2f]">가족의 평가</p>
                                    <p className="mt-2 text-sm font-bold leading-relaxed text-[#4d4132]">{getFamilyEvaluation(player)}</p>
                                </div>
                                <div className="border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
                                    <p className="text-sm font-black text-[#8b2f2f]">역사적 평가</p>
                                    <p className="mt-2 text-sm font-bold leading-relaxed text-[#4d4132]">{getHistoricalEvaluation(player, ending.judgment)}</p>
                                </div>
                            </section>

                            <section className="mt-8">
                                <h3 className="text-2xl font-black">나의 선택 요약</h3>
                                <div className="mt-4 space-y-4">
                                    {history.map((item) => (
                                        <article key={`${item.age}-${item.title}-${item.choice}`} className="border-2 border-[#1c1a17] bg-white p-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-sm font-black text-[#8b2f2f]">{item.age}세</span>
                                                <span className={`border px-2 py-1 text-xs font-black ${toneStyles[item.tone]}`}>{item.tone}</span>
                                                <span className="text-sm font-black text-[#5b5143]">{item.chapter}</span>
                                            </div>
                                            <p className="mt-2 text-lg font-black">{item.title}</p>
                                            <p className="mt-1 text-base font-bold text-[#1c1a17]">{item.choice}</p>
                                            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#5b5143]">결과: {item.result}</p>
                                            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#8b2f2f]">남은 대가: {item.consequence}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>

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
                            <EvidenceArchivePanel evidenceList={player.evidenceList} trialMode />
                            <LogPanel history={history} expanded />
                        </aside>
                    </section>
                )}

                {phase === 'play' && lastHistory && (
                    <ResultModal
                        isOpen={isResultOpen}
                        result={lastResult}
                        historyItem={lastHistory}
                        onClose={() => {
                            setIsResultOpen(false)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    />
                )}
            </div>
        </main>
    )
}

function ResultModal({
    isOpen,
    result,
    historyItem,
    onClose,
}: {
    isOpen: boolean
    result: string | null
    historyItem: HistoryItem
    onClose: () => void
}) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#1c1a17]/70 px-4 py-6">
            <div className="w-full max-w-2xl border-2 border-[#1c1a17] bg-[#f8f2e7] p-5 shadow-[0_10px_0_#1c1a17] md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">선택 결과</p>
                <h3 className="mt-2 text-2xl font-black leading-tight md:text-3xl">{historyItem.choice}</h3>
                <p className="mt-5 text-lg font-black leading-relaxed text-[#1c1a17]">{result}</p>
                <div className="mt-5 space-y-2 border-2 border-[#1c1a17] bg-white p-4 text-sm font-bold leading-relaxed text-[#4d4132]">
                    {historyItem.summaries.map((summary) => (
                        <p key={summary}>- {summary}</p>
                    ))}
                    {historyItem.delayedRecord && <p>- 몇 년 전 선택이 돌아왔습니다: {historyItem.delayedRecord}</p>}
                </div>
                <p className="mt-4 border-l-4 border-[#8b2f2f] bg-[#eee1cc] px-4 py-3 text-sm font-bold leading-relaxed text-[#4d4132]">
                    남은 대가: {historyItem.consequence}
                </p>
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 min-h-12 w-full border-2 border-[#1c1a17] bg-[#d1a846] px-5 text-base font-black shadow-[0_5px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                >
                    다음 상황 보기
                </button>
            </div>
        </div>
    )
}

function SceneVisual({ event }: { event: EventCard }) {
    return (
        <div className="border-b-2 border-[#1c1a17] bg-[#2d302f] p-4 lg:border-b-0 lg:border-r-2">
            <div className={`relative min-h-[260px] overflow-hidden border-2 border-[#1c1a17] bg-gradient-to-br ${event.visual.gradient}`}>
                {event.visual.imageSrc ? (
                    <>
                        <img
                            src={event.visual.imageSrc}
                            alt={event.visual.label}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/75 via-[#141210]/20 to-transparent" />
                    </>
                ) : (
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:36px_36px]" />
                )}
                <div className="absolute inset-x-5 bottom-5 border-2 border-[#1c1a17] bg-[#f8f2e7]/92 p-4 shadow-[0_5px_0_rgba(0,0,0,.45)]">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">Scene</p>
                    <p className="mt-1 text-2xl font-black">{event.visual.label}</p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-[#5b5143]">{event.visual.mood}</p>
                </div>
            </div>
        </div>
    )
}

function PressurePanel({ player }: { player: Player }) {
    return (
        <div className="mt-6 border-2 border-[#1c1a17] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">현재 압박</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
                {getPressureSentences(player).map((sentence) => (
                    <p key={sentence} className="border-l-4 border-[#d1a846] bg-[#f8f2e7] px-3 py-2 text-sm font-bold leading-relaxed text-[#4d4132]">
                        {sentence}
                    </p>
                ))}
            </div>
        </div>
    )
}

function ReactionPanel({ event }: { event: EventCard }) {
    const reactions = event.reactions ?? [
        { npc: event.speaker, line: event.dialogue },
        { npc: '배우자', line: '당신의 선택이 우리 집까지 흔들 수 있어요.' },
        { npc: '이웃', line: '사람들은 누가 무엇을 했는지 생각보다 오래 기억합니다.' },
    ]

    return (
        <div className="mt-5 border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">주변 인물 반응</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
                {reactions.slice(0, 3).map((reaction) => (
                    <div key={`${reaction.npc}-${reaction.line}`} className="border-2 border-[#1c1a17] bg-white p-3">
                        <p className="text-xs font-black text-[#8b2f2f]">{reaction.npc}</p>
                        <p className="mt-1 text-sm font-bold leading-relaxed text-[#4d4132]">“{reaction.line}”</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function RecordHintPanel({ event, player }: { event: EventCard; player: Player }) {
    const watchers = event.witnesses ?? ['배우자', '이웃', event.speaker]
    const records = event.records ?? ['서류', '소문', player.empireTrust > 40 ? '제국 장부' : '사람들의 기억']

    return (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="border-2 border-[#1c1a17] bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">이 선택을 지켜보는 사람들</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {watchers.map((watcher) => (
                        <span key={watcher} className="border border-[#1c1a17] bg-[#f8f2e7] px-2 py-1 text-xs font-black">{watcher}</span>
                    ))}
                </div>
            </div>
            <div className="border-2 border-[#1c1a17] bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">기록될 수 있는 것</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {records.map((record) => (
                        <span key={record} className="border border-[#1c1a17] bg-[#f8f2e7] px-2 py-1 text-xs font-black">{record}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function JudgmentTabs({
    event,
    active,
    onChange,
}: {
    event: EventCard
    active: 'family' | 'conscience' | 'money' | 'safety' | 'future'
    onChange: (value: 'family' | 'conscience' | 'money' | 'safety' | 'future') => void
}) {
    const tabs = [
        { id: 'family', label: '가족 관점', fallback: '이 선택은 가족의 오늘을 얼마나 버티게 하는지 묻습니다.' },
        { id: 'conscience', label: '양심 관점', fallback: '이 선택은 내가 외면한 사람의 이름을 남길 수 있습니다.' },
        { id: 'money', label: '돈 관점', fallback: '이 선택은 당장의 현금과 부채를 바꿀 수 있습니다.' },
        { id: 'safety', label: '안전 관점', fallback: '이 선택은 감시와 노출 위험을 키우거나 줄일 수 있습니다.' },
        { id: 'future', label: '미래 관점', fallback: '정세가 바뀌면 오늘의 문서가 증거가 될 수 있습니다.' },
    ] as const

    const current = tabs.find((tab) => tab.id === active) ?? tabs[0]

    return (
        <div>
            <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => onChange(tab.id)}
                        className={`border-2 border-[#1c1a17] px-3 py-2 text-xs font-black ${
                            active === tab.id ? 'bg-[#2d302f] text-[#f8f2e7]' : 'bg-white text-[#1c1a17]'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <p className="mt-3 border-2 border-[#1c1a17] bg-[#f8f2e7] p-3 text-sm font-bold leading-relaxed text-[#4d4132]">
                {event.perspectives?.[active] ?? current.fallback}
            </p>
        </div>
    )
}

function StatusPanel({ player }: { player: Player }) {
    const livingPressure = getLivingPressure(player)
    const pressureTone = getStatTone(livingPressure, 100, true)
    const socialImage = getSocialImage(player)

    return (
        <div className="border-2 border-[#1c1a17] bg-[#f8f2e7] p-4 shadow-[0_6px_0_#1c1a17]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">상태</p>
            <div className="mt-4 border-2 border-[#1c1a17] bg-[#2d302f] p-3 text-[#f8f2e7]">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d1a846]">사회적 이미지</p>
                <p className="mt-1 text-xl font-black">{socialImage}</p>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-[#f8f2e7]/70">
                    사람들은 당신의 선택을 하나의 이미지로 기억하기 시작합니다.
                </p>
            </div>
            <div className="mt-4 border-2 border-[#1c1a17] bg-white p-3">
                <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-black">생활 압박</p>
                    <p className={`text-sm font-black ${pressureTone.text}`}>{livingPressure}</p>
                </div>
                <div className="mt-2 h-4 border-2 border-[#1c1a17] bg-[#ded2bd]">
                    <div className={`h-full ${pressureTone.bar}`} style={{ width: `${livingPressure}%` }} />
                </div>
                <p className={`mt-1 text-xs font-black ${pressureTone.text}`}>
                    높을수록 양심적 선택의 현실 비용이 커집니다.
                </p>
            </div>
            <div className="mt-4 space-y-4">
                {publicStats.map(({ key, label, Icon, max, inverse, description }) => {
                    const value = player[key]
                    const width = `${Math.min(100, (value / max) * 100)}%`
                    const tone = getStatTone(value, max, inverse)
                    return (
                        <div key={key}>
                            <div className="mb-1 flex items-center justify-between gap-2">
                                <span className="flex items-center gap-2 text-sm font-black">
                                    <Icon className={`h-4 w-4 ${tone.text}`} />
                                    {label}
                                </span>
                                <span className={`text-sm font-black ${tone.text}`}>{value}</span>
                            </div>
                            <div className="h-4 border-2 border-[#1c1a17] bg-[#ded2bd]">
                                <div className={`h-full ${tone.bar}`} style={{ width }} />
                            </div>
                            <p className={`mt-1 text-xs font-black ${tone.text}`}>{tone.label}</p>
                            <p className="mt-1 text-xs font-semibold leading-relaxed text-[#5b5143]">{description}</p>
                        </div>
                    )
                })}
                {derivedStats.map(({ key, label, Icon, max, inverse, description }) => {
                    const value = player[key]
                    const width = `${Math.min(100, (value / max) * 100)}%`
                    const tone = getStatTone(value, max, inverse)
                    return (
                        <div key={key}>
                            <div className="mb-1 flex items-center justify-between gap-2">
                                <span className="flex items-center gap-2 text-sm font-black">
                                    <Icon className={`h-4 w-4 ${tone.text}`} />
                                    {label}
                                </span>
                                <span className={`text-sm font-black ${tone.text}`}>{value}</span>
                            </div>
                            <div className="h-4 border-2 border-[#1c1a17] bg-[#ded2bd]">
                                <div className={`h-full ${tone.bar}`} style={{ width }} />
                            </div>
                            <p className={`mt-1 text-xs font-black ${tone.text}`}>{tone.label}</p>
                            <p className="mt-1 text-xs font-semibold leading-relaxed text-[#5b5143]">{description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function getStatTone(value: number, max: number, inverse: boolean) {
    const ratio = value / max
    const score = inverse ? 1 - ratio : ratio

    if (score < 0.34) {
        return { bar: 'bg-[#d84a3a]', text: 'text-[#b12d22]', label: inverse ? '높음: 위험' : '부족' }
    }

    if (score < 0.67) {
        return { bar: 'bg-[#d1a846]', text: 'text-[#8a6410]', label: '주의' }
    }

    return { bar: 'bg-[#3f9b67]', text: 'text-[#28784d]', label: inverse ? '낮음: 안정' : '충분' }
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
                죄책, 저항, 기회주의 기록은 엔딩에서 공개됩니다.
            </p>
        </div>
    )
}

function EvidenceArchivePanel({ evidenceList, trialMode = false }: { evidenceList: Evidence[]; trialMode?: boolean }) {
    const activeEvidence = evidenceList.filter((evidence) => evidence.active)
    return (
        <div className="border-2 border-[#1c1a17] bg-[#f8f2e7] p-4 shadow-[0_6px_0_#1c1a17]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">
                {trialMode ? '제출된 증거' : '기록 보관함'}
            </p>
            <div className="mt-4 max-h-[320px] space-y-3 overflow-y-auto pr-1">
                {activeEvidence.length === 0 ? (
                    <p className="text-sm font-bold leading-relaxed text-[#5b5143]">
                        아직 남은 문서 기록이 없습니다.
                    </p>
                ) : (
                    activeEvidence.map((evidence) => (
                        <article key={evidence.id} className="border-2 border-[#1c1a17] bg-white p-3">
                            <p className="text-xs font-black text-[#8b2f2f]">{evidence.year}세 / {formatEvidenceType(evidence.type)}</p>
                            <p className="mt-1 text-sm font-black">{evidence.title}</p>
                            <p className="mt-1 text-xs font-semibold leading-relaxed text-[#5b5143]">{evidence.description}</p>
                            <p className="mt-2 text-xs font-black text-[#8b2f2f]">
                                {trialMode ? '책임 자료로 재분류됨' : '현재는 단순 기록처럼 보임'}
                            </p>
                        </article>
                    ))
                )}
            </div>
        </div>
    )
}

function formatEvidenceType(type: EvidenceType) {
    const labels: Record<EvidenceType, string> = {
        signed_document: '서명 문서',
        contract: '계약서',
        speech: '연설/기사',
        testimony: '증언',
        secret_help: '비밀 도움',
        destroyed_evidence: '인멸 흔적',
    }
    return labels[type]
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
