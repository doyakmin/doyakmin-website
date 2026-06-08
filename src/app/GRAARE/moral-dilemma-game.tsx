'use client'

import { useMemo, useState } from 'react'
import {
    Archive,
    BriefcaseBusiness,
    Coins,
    HeartPulse,
    Landmark,
    Radio,
    RefreshCcw,
    ShieldAlert,
    Users,
} from 'lucide-react'

type StatKey =
    | 'money'
    | 'debt'
    | 'family'
    | 'status'
    | 'conscience'
    | 'information'
    | 'risk'
    | 'empireTrust'
    | 'peopleTrust'
    | 'surveillance'
    | 'sunkCost'
    | 'guiltRecord'
    | 'resistanceRecord'
    | 'opportunistRecord'

type Player = Record<StatKey, number> & {
    age: number
    year: number
    chapter: number
    job: string
    flags: string[]
}

type Choice = {
    id: string
    text: string
    hint: string
    tone: 'cooperate' | 'resist' | 'neutral' | 'gray'
    effects: Partial<Record<StatKey, number>>
    result: string
    flags?: string[]
}

type Event = {
    id: string
    chapter: number
    age: number
    title: string
    place: string
    news: string
    description: string
    speaker: string
    dialogue: string
    choices: Choice[]
}

type HistoryItem = {
    year: number
    age: number
    title: string
    choice: string
    result: string
    tone: Choice['tone']
}

const initialPlayer: Player = {
    age: 18,
    year: 1,
    chapter: 0,
    job: '가족의 장남',
    money: 25,
    debt: 0,
    family: 62,
    status: 4,
    conscience: 72,
    information: 14,
    risk: 10,
    empireTrust: 6,
    peopleTrust: 34,
    surveillance: 4,
    sunkCost: 0,
    guiltRecord: 0,
    resistanceRecord: 0,
    opportunistRecord: 0,
    flags: [],
}

const events: Event[] = [
    {
        id: 'CH0_001',
        chapter: 0,
        age: 18,
        title: '점령의 날',
        place: '루멘 남문 광장',
        news: '아르카 제국은 질서 회복을 명분으로 루멘의 행정권을 접수했다.',
        description:
            '광장에는 새 깃발이 걸렸고, 오래된 간판들은 하룻밤 사이에 내려갔다. 병약한 아버지는 집으로 돌아오는 길에 자주 멈춰 섰다.',
        speaker: '아버지',
        dialogue: '살아남아라. 다만 네가 무엇을 지키며 살았는지는 잊지 말거라.',
        choices: [
            {
                id: 'A',
                text: '제국 구호소의 일을 맡는다',
                hint: '가족 치료비를 마련할 수 있지만, 제국의 눈에 띈다.',
                tone: 'cooperate',
                effects: { money: 22, family: 10, status: 8, empireTrust: 12, peopleTrust: -6, conscience: -8, sunkCost: 5 },
                result: '구호품 장부를 정리하며 첫 임금을 받았다. 이웃들은 고맙다고도, 차갑다고도 하지 않았다.',
                flags: ['relief_office'],
            },
            {
                id: 'B',
                text: '루멘어 야학을 돕는다',
                hint: '양심은 지키지만 수입이 거의 없고 위험하다.',
                tone: 'resist',
                effects: { money: -6, family: -6, conscience: 12, peopleTrust: 16, risk: 14, resistanceRecord: 1 },
                result: '아이들이 작은 목소리로 루멘어를 따라 읽었다. 문밖의 발소리가 모두를 얼어붙게 했다.',
                flags: ['night_school'],
            },
            {
                id: 'C',
                text: '집안 물건을 팔아 시간을 번다',
                hint: '당장은 안전하지만 미래의 선택지가 줄어든다.',
                tone: 'neutral',
                effects: { money: 10, family: 2, conscience: -2, peopleTrust: -2 },
                result: '어머니는 오래된 그릇을 천에 싸서 내주었다. 집은 조금 더 조용해졌다.',
                flags: ['sold_home_goods'],
            },
        ],
    },
    {
        id: 'CH1_001',
        chapter: 1,
        age: 19,
        title: '첫 직업 선택',
        place: '임시 고용소',
        news: '제국청은 루멘 청년에게 안정적인 봉급과 신분증을 약속했다.',
        description:
            '게시판에는 세 종류의 모집 공고가 붙어 있다. 낮은 임금의 시장 일, 검열을 받는 학교, 그리고 제국청 보조직.',
        speaker: '어머니',
        dialogue: '네 양심이 우리 약값을 대신 내주지는 않잖니.',
        choices: [
            {
                id: 'A',
                text: '제국청 직원이 된다',
                hint: '돈과 지위가 안정된다. 매몰비용이 시작된다.',
                tone: 'cooperate',
                effects: { money: 26, family: 12, status: 18, empireTrust: 22, peopleTrust: -7, conscience: -10, sunkCost: 8 },
                result: '새 신분증은 깨끗했다. 이름 아래에 찍힌 제국 도장이 유난히 무거웠다.',
                flags: ['empire_clerk'],
            },
            {
                id: 'B',
                text: '루멘어 교사가 된다',
                hint: '공동체 신뢰를 얻지만 검열 대상이 된다.',
                tone: 'resist',
                effects: { money: 8, family: -4, status: 6, peopleTrust: 18, empireTrust: -10, risk: 16, conscience: 10, resistanceRecord: 1 },
                result: '교실의 창문은 늘 반쯤 닫혀 있었다. 아이들은 배운 말을 집에 가져가지 않기로 약속했다.',
                flags: ['lumen_teacher'],
            },
            {
                id: 'C',
                text: '노점상을 시작한다',
                hint: '크게 얻는 것도 잃는 것도 없지만 성장 한계가 있다.',
                tone: 'neutral',
                effects: { money: 12, family: 1, peopleTrust: 5, risk: 2 },
                result: '시장의 하루는 길었고, 세금 징수원의 발걸음은 더 길었다.',
                flags: ['market_vendor'],
            },
        ],
    },
    {
        id: 'CH1_003',
        chapter: 1,
        age: 21,
        title: '충성 서약서',
        place: '제국청 회의실',
        news: '제국은 모든 공직 협력자에게 새로운 질서에 대한 서약을 요구했다.',
        description:
            '서약서 끝에는 작은 빈칸이 있다. 서명만 하면 승진 심사와 배급 우선권을 받을 수 있다.',
        speaker: '상사',
        dialogue: '이 정도 문장은 모두가 씁니다. 마음까지 바치라는 뜻은 아니에요.',
        choices: [
            {
                id: 'A',
                text: '정식으로 서명한다',
                hint: '승진과 배급이 열린다. 기록에도 남는다.',
                tone: 'cooperate',
                effects: { money: 18, family: 8, status: 15, empireTrust: 20, peopleTrust: -12, conscience: -12, guiltRecord: 1, sunkCost: 10 },
                result: '도장이 마르기도 전에 배급표가 건네졌다. 집에서는 오랜만에 따뜻한 국이 끓었다.',
                flags: ['loyalty_oath'],
            },
            {
                id: 'B',
                text: '서명을 거절한다',
                hint: '양심은 지키지만 직장을 잃을 수 있다.',
                tone: 'resist',
                effects: { money: -18, family: -12, status: -10, empireTrust: -22, peopleTrust: 12, risk: 16, conscience: 14, resistanceRecord: 1 },
                result: '상사는 펜을 내려놓고 한참 당신을 보았다. 그날부터 책상 위 서류가 줄었다.',
            },
            {
                id: 'C',
                text: '형식상 서명하고 사본을 숨긴다',
                hint: '양쪽의 가능성을 남긴다. 발각되면 위험하다.',
                tone: 'gray',
                effects: { money: 10, status: 8, empireTrust: 8, peopleTrust: -4, conscience: -4, information: 8, surveillance: 8, opportunistRecord: 1, sunkCost: 5 },
                result: '당신은 서명했고, 동시에 사본 한 장을 품에 넣었다. 어느 쪽에도 완전히 속하지 못했다.',
                flags: ['hidden_oath_copy'],
            },
        ],
    },
    {
        id: 'CH1_004',
        chapter: 1,
        age: 24,
        title: '동생의 학비',
        place: '가족의 부엌',
        news: '제국 학교 졸업장은 배급소와 관공서에서 유리하게 인정되기 시작했다.',
        description:
            '동생은 루멘어 책을 품고 있지만, 제국 학교 장학생 명단에도 이름이 올랐다.',
        speaker: '동생',
        dialogue: '형, 내가 어디서 배워야 우리 집이 덜 흔들릴까?',
        choices: [
            {
                id: 'A',
                text: '제국 학교 장학생으로 보낸다',
                hint: '미래가 안정된다. 가족의 언어가 멀어진다.',
                tone: 'cooperate',
                effects: { money: 8, family: 16, status: 10, empireTrust: 12, peopleTrust: -8, conscience: -8, sunkCost: 10, guiltRecord: 1 },
                result: '동생의 새 교복은 잘 맞았다. 저녁 식탁의 말수는 조금 줄었다.',
                flags: ['sibling_empire_school'],
            },
            {
                id: 'B',
                text: '루멘 학교를 계속 보내기 위해 빚을 낸다',
                hint: '정체성은 지키지만 부채와 위험이 생긴다.',
                tone: 'resist',
                effects: { debt: 18, family: -4, conscience: 12, peopleTrust: 12, empireTrust: -8, risk: 8, resistanceRecord: 1 },
                result: '낡은 교실은 비좁았지만 동생은 오래 웃었다. 이자는 다음 달부터 붙는다.',
            },
            {
                id: 'C',
                text: '학업을 잠시 멈추고 일을 돕게 한다',
                hint: '돈은 아끼지만 가족 관계가 닳는다.',
                tone: 'neutral',
                effects: { money: 10, family: -10, conscience: -6, peopleTrust: -3 },
                result: '동생은 책을 접어 선반 위에 올렸다. 먼지가 앉는 속도는 생각보다 빨랐다.',
            },
        ],
    },
    {
        id: 'CH2_001',
        chapter: 2,
        age: 27,
        title: '결혼과 새집',
        place: '은행 상담실',
        news: '제국 은행은 협력 가정에 낮은 이자의 주택 대출을 제공한다고 밝혔다.',
        description:
            '배우자는 안정된 집을 원한다. 계약서에는 당신의 직장과 제국 신뢰가 담보로 적혀 있다.',
        speaker: '배우자',
        dialogue: '우리가 언제까지 남의 방에서 아이를 꿈꿔야 해?',
        choices: [
            {
                id: 'A',
                text: '제국 주택 대출을 받는다',
                hint: '가족은 크게 안정된다. 체제 안의 이해관계가 깊어진다.',
                tone: 'cooperate',
                effects: { money: 20, debt: 36, family: 24, status: 12, empireTrust: 12, conscience: -8, sunkCost: 20 },
                result: '열쇠는 차가웠지만 집 안은 따뜻했다. 문패에는 제국식 표기가 먼저 새겨졌다.',
                flags: ['empire_home_loan'],
            },
            {
                id: 'B',
                text: '낡은 집을 고쳐 산다',
                hint: '느리고 불편하지만 빚을 피한다.',
                tone: 'neutral',
                effects: { money: -14, family: 6, conscience: 4, peopleTrust: 4 },
                result: '비가 새는 곳은 많았다. 그래도 문패는 당신의 글자로 남았다.',
            },
            {
                id: 'C',
                text: '명의를 나누어 우회 구매한다',
                hint: '안정과 회피를 동시에 노린다. 나중에 약점이 된다.',
                tone: 'gray',
                effects: { money: 8, debt: 20, family: 16, status: 8, surveillance: 10, opportunistRecord: 1, sunkCost: 12 },
                result: '서류상 집주인은 당신이 아니었다. 그래서 더 자주 서류를 확인하게 됐다.',
                flags: ['proxy_house'],
            },
        ],
    },
    {
        id: 'CH2_003',
        chapter: 2,
        age: 30,
        title: '친구의 부탁',
        place: '비 내리는 골목',
        news: '루멘 청년 몇 명이 금지 문서를 유포한 혐의로 수배되었다.',
        description:
            '어릴 적 친구가 젖은 외투를 입고 찾아왔다. 하룻밤만 숨겨 달라고 한다.',
        speaker: '친구',
        dialogue: '네가 거절해도 이해해. 그런데 오늘 밤은 갈 곳이 없어.',
        choices: [
            {
                id: 'A',
                text: '숨겨주고 길을 알려준다',
                hint: '민중의 신뢰를 얻지만 체포 위험이 크다.',
                tone: 'resist',
                effects: { money: -8, family: -12, conscience: 14, peopleTrust: 22, empireTrust: -14, risk: 22, surveillance: 12, resistanceRecord: 2 },
                result: '새벽이 되기 전 친구는 떠났다. 배우자는 잠든 아이의 이불을 더 세게 붙잡았다.',
                flags: ['helped_friend'],
            },
            {
                id: 'B',
                text: '돈을 받고 정보만 건넨다',
                hint: '양쪽을 모두 잃을 수 있다.',
                tone: 'gray',
                effects: { money: 16, conscience: -8, peopleTrust: -6, information: 10, opportunistRecord: 2, surveillance: 8 },
                result: '친구는 돈을 놓고 갔다. 그 돈은 오래도록 쓰기 어려웠다.',
                flags: ['sold_info_friend'],
            },
            {
                id: 'C',
                text: '신고한다',
                hint: '가족은 안전해지지만 기록에 남는다.',
                tone: 'cooperate',
                effects: { money: 20, family: 10, status: 12, empireTrust: 24, peopleTrust: -24, conscience: -22, guiltRecord: 2, sunkCost: 10 },
                result: '문 두드리는 소리가 골목 끝으로 멀어졌다. 며칠 뒤 당신은 포상금을 받았다.',
                flags: ['reported_friend'],
            },
            {
                id: 'D',
                text: '못 본 척 문을 닫는다',
                hint: '위험을 피하지만 관계가 끊어진다.',
                tone: 'neutral',
                effects: { family: 2, conscience: -10, peopleTrust: -8, risk: -4 },
                result: '문밖의 발소리는 한동안 멈춰 있었다. 다음 날 골목에는 아무도 없었다.',
            },
        ],
    },
    {
        id: 'CH3_001',
        chapter: 3,
        age: 34,
        title: '전쟁 발발',
        place: '라디오 앞',
        news: '아르카 제국은 주변국과의 전쟁이 임박했으며 모든 자원을 동원하겠다고 발표했다.',
        description:
            '라디오는 승리를 말하지만 시장의 밀가루 값은 하루마다 오른다. 관공서에는 새 계약서가 쌓인다.',
        speaker: '라디오 진행자',
        dialogue: '제국의 질서는 곧 번영입니다. 충성스러운 시민에게 기회가 열립니다.',
        choices: [
            {
                id: 'A',
                text: '전시 행정 업무를 맡는다',
                hint: '지위가 오르고 가족 배급이 늘어난다.',
                tone: 'cooperate',
                effects: { money: 28, family: 12, status: 18, empireTrust: 22, peopleTrust: -18, conscience: -12, guiltRecord: 1, sunkCost: 18 },
                result: '당신의 도장이 찍힌 서류들은 더 빨리 이동했다. 어디로 가는지는 묻지 않았다.',
                flags: ['war_admin'],
            },
            {
                id: 'B',
                text: '해외 방송을 몰래 듣는다',
                hint: '정보를 얻지만 감시 위험이 생긴다.',
                tone: 'resist',
                effects: { money: -5, information: 26, conscience: 8, risk: 12, surveillance: 16, resistanceRecord: 1 },
                result: '잡음 사이로 공식 발표와 다른 숫자가 들렸다. 당신은 더 많이 알게 되었고, 더 불안해졌다.',
                flags: ['foreign_radio'],
            },
            {
                id: 'C',
                text: '식량을 사재기한다',
                hint: '가족은 버티지만 이웃의 눈초리를 산다.',
                tone: 'gray',
                effects: { money: -12, family: 18, peopleTrust: -10, conscience: -6, opportunistRecord: 1 },
                result: '쌀독은 찼다. 옆집 아이의 울음소리는 더 선명하게 들렸다.',
                flags: ['hoarded_food'],
            },
        ],
    },
    {
        id: 'CH3_002',
        chapter: 3,
        age: 36,
        title: '군수 사업 제안',
        place: '제국청 접견실',
        news: '전선 확대에 따라 군수 물자 납품 사업자가 긴급 모집된다.',
        description:
            '상사는 이번 계약이 가족의 남은 걱정을 끝낼 수 있다고 말한다. 계약 품목에는 철도 부품과 수용소 침상이 섞여 있다.',
        speaker: '상사',
        dialogue: '이 기회를 잡으면 당신 가족은 다시는 굶지 않을 겁니다.',
        choices: [
            {
                id: 'A',
                text: '계약을 수락한다',
                hint: '큰돈을 벌 수 있다. 누군가의 고통과 연결된다.',
                tone: 'cooperate',
                effects: { money: 70, family: 20, status: 28, empireTrust: 36, peopleTrust: -36, conscience: -30, guiltRecord: 3, sunkCost: 30 },
                result: '장부의 숫자는 아름답게 늘었다. 이름 없는 물자표도 함께 늘었다.',
                flags: ['war_supplier'],
            },
            {
                id: 'B',
                text: '계약을 거절한다',
                hint: '도덕적 부담은 피하지만 가족의 원망을 들을 수 있다.',
                tone: 'resist',
                effects: { money: -18, family: -18, status: -12, empireTrust: -18, peopleTrust: 14, conscience: 18, risk: 10, resistanceRecord: 1 },
                result: '배우자는 오래 말이 없었다. 거절서에는 당신의 서명이 작게 남았다.',
            },
            {
                id: 'C',
                text: '일부 물자를 빼돌려 사람들을 돕는다',
                hint: '양쪽을 건드린다. 발각되면 매우 위험하다.',
                tone: 'gray',
                effects: { money: 26, family: 4, empireTrust: 10, peopleTrust: 12, conscience: 6, risk: 24, surveillance: 20, resistanceRecord: 1, opportunistRecord: 2, sunkCost: 12 },
                result: '창고 장부에는 오차가 생겼고, 골목의 배급 줄에는 잠시 웃음이 생겼다.',
                flags: ['diverted_supplies'],
            },
            {
                id: 'D',
                text: '계약 정보를 새벽회에 흘린다',
                hint: '저항을 돕지만 가족까지 감시될 수 있다.',
                tone: 'resist',
                effects: { money: -8, family: -14, empireTrust: -22, peopleTrust: 24, conscience: 16, risk: 30, surveillance: 22, resistanceRecord: 2 },
                result: '며칠 뒤 철도 창고에 불이 났다. 당신은 아이에게 창문에서 떨어져 있으라고 말했다.',
                flags: ['leaked_contract'],
            },
        ],
    },
    {
        id: 'CH3_003',
        chapter: 3,
        age: 39,
        title: '징집 명단',
        place: '행정국 기록실',
        news: '제국은 루멘 청년을 보조 부대로 편입하겠다고 발표했다.',
        description:
            '명단에는 이웃의 아들, 야학의 학생, 그리고 당신 친척의 이름이 있다. 수정 권한은 오늘 밤까지만 열려 있다.',
        speaker: '동료',
        dialogue: '원칙대로 처리하면 됩니다. 원칙이 누구를 위해 있는지는 묻지 말고요.',
        choices: [
            {
                id: 'A',
                text: '명단을 그대로 승인한다',
                hint: '안전하고 빠르다. 죄책이 남는다.',
                tone: 'cooperate',
                effects: { money: 22, status: 20, empireTrust: 28, peopleTrust: -32, conscience: -28, guiltRecord: 3, sunkCost: 20 },
                result: '도장은 선명했다. 다음 주부터 골목의 청년들이 하나둘 사라졌다.',
                flags: ['approved_conscription'],
            },
            {
                id: 'B',
                text: '가족 이름만 제외한다',
                hint: '가족은 지키지만 가장 불편한 기록이 된다.',
                tone: 'gray',
                effects: { family: 22, empireTrust: 8, peopleTrust: -18, conscience: -18, guiltRecord: 2, opportunistRecord: 2, surveillance: 8 },
                result: '친척은 살아남았다. 이웃은 당신을 보며 인사하지 않았다.',
                flags: ['saved_only_family'],
            },
            {
                id: 'C',
                text: '여러 이름을 빼고 오류로 위장한다',
                hint: '사람들을 구하지만 발각 위험이 크다.',
                tone: 'resist',
                effects: { family: -10, empireTrust: -26, peopleTrust: 32, conscience: 20, risk: 32, surveillance: 24, resistanceRecord: 3 },
                result: '잉크가 번진 명단은 다시 작성되어야 했다. 그 며칠이 누군가에게는 평생이 되었다.',
                flags: ['forged_conscription'],
            },
            {
                id: 'D',
                text: '서류를 태운다',
                hint: '명백한 저항이다. 체포 가능성이 높다.',
                tone: 'resist',
                effects: { money: -20, family: -24, status: -25, empireTrust: -42, peopleTrust: 38, conscience: 26, risk: 42, surveillance: 34, resistanceRecord: 4 },
                result: '불꽃은 빨랐다. 그보다 빠르게 누군가 계단을 뛰어올라왔다.',
                flags: ['burned_list'],
            },
        ],
    },
    {
        id: 'CH4_001',
        chapter: 4,
        age: 42,
        title: '전황 보고서',
        place: '닫힌 서재',
        news: '공식 신문은 대승을 말하지만, 비공개 보고서는 후퇴와 물자 부족을 기록한다.',
        description:
            '당신은 서로 다른 두 장의 문서를 받았다. 하나는 시민에게 읽힐 신문이고, 하나는 곧 폐기될 실제 보고서다.',
        speaker: '배우자',
        dialogue: '당신은 이미 많은 걸 얻었어. 지금 와서 모두 잃을 수는 없잖아.',
        choices: [
            {
                id: 'A',
                text: '공식 발표만 따른다',
                hint: '현재 지위는 유지된다. 미래의 책임은 커진다.',
                tone: 'cooperate',
                effects: { money: 24, family: 10, status: 16, empireTrust: 18, peopleTrust: -20, conscience: -18, guiltRecord: 2, sunkCost: 12 },
                result: '신문은 환하게 인쇄됐다. 사람들은 그 종이로 추운 창문을 막았다.',
                flags: ['printed_propaganda'],
            },
            {
                id: 'B',
                text: '재산을 조용히 현금화한다',
                hint: '미래를 대비한다. 주변에는 말하지 않는다.',
                tone: 'gray',
                effects: { money: 18, family: -4, information: 14, peopleTrust: -8, opportunistRecord: 2, surveillance: 10 },
                result: '당신은 금고를 정리했다. 누구에게도 왜인지 설명하지 않았다.',
                flags: ['moved_assets'],
            },
            {
                id: 'C',
                text: '소문을 퍼뜨려 피난을 돕는다',
                hint: '사람들을 구할 수 있지만 제국의 의심을 산다.',
                tone: 'resist',
                effects: { money: -12, family: -10, empireTrust: -24, peopleTrust: 28, conscience: 18, risk: 26, surveillance: 24, resistanceRecord: 2 },
                result: '며칠 뒤 역에는 평소보다 많은 짐이 쌓였다. 당신의 이름도 감시 명단에 올랐다.',
                flags: ['warned_people'],
            },
        ],
    },
    {
        id: 'CH4_003',
        chapter: 4,
        age: 45,
        title: '증거 인멸',
        place: '제국청 지하 문서고',
        news: '제국 내부에서는 패전 가능성을 언급하는 문서를 급히 소각하고 있다.',
        description:
            '문서고에는 당신의 서명, 계약서, 징집 명단, 구호소 장부가 있다. 기록은 생각보다 성실하다.',
        speaker: '상사',
        dialogue: '살고 싶으면 종이는 태우고, 기억은 각자 알아서 지우는 겁니다.',
        choices: [
            {
                id: 'A',
                text: '불리한 문서를 삭제한다',
                hint: '조사 위험을 줄인다. 기회주의 기록이 남는다.',
                tone: 'gray',
                effects: { money: 8, empireTrust: 6, peopleTrust: -12, conscience: -16, surveillance: -8, opportunistRecord: 3, guiltRecord: 1 },
                result: '연기는 매캐했다. 당신은 눈물인지 연기인지 구분하지 않기로 했다.',
                flags: ['destroyed_evidence'],
            },
            {
                id: 'B',
                text: '문서를 조작해 공을 나눈다',
                hint: '책임을 흐린다. 발각 시 최악이다.',
                tone: 'gray',
                effects: { money: 12, status: 8, peopleTrust: -8, conscience: -12, surveillance: 14, opportunistRecord: 3 },
                result: '몇 개의 이름이 추가되고 몇 개의 날짜가 바뀌었다. 진실은 더 지저분해졌다.',
                flags: ['forged_records'],
            },
            {
                id: 'C',
                text: '그대로 남긴다',
                hint: '미래의 평가를 받아들인다.',
                tone: 'neutral',
                effects: { conscience: 10, empireTrust: -8, risk: 8, information: 6 },
                result: '당신은 서랍을 닫았다. 닫힌 것은 서랍뿐이었다.',
            },
            {
                id: 'D',
                text: '새벽회에 기록을 전달한다',
                hint: '역사의 증거가 된다. 지금은 매우 위험하다.',
                tone: 'resist',
                effects: { money: -16, family: -18, empireTrust: -34, peopleTrust: 34, conscience: 24, risk: 36, surveillance: 30, resistanceRecord: 3 },
                result: '문서 묶음은 빵 자루 아래 숨겨졌다. 당신은 처음으로 기록이 무기가 될 수 있음을 알았다.',
                flags: ['gave_records'],
            },
        ],
    },
    {
        id: 'CH4_004',
        chapter: 4,
        age: 47,
        title: '탈출 열차',
        place: '북부 역',
        news: '피난 열차 좌석은 제국 신뢰가 높은 가정에 우선 배정된다.',
        description:
            '당신에게 배정된 표는 네 장뿐이다. 역 밖에는 표를 구하지 못한 사람들이 밤새 줄을 서 있다.',
        speaker: '자녀',
        dialogue: '아버지, 우리만 가도 되는 거예요?',
        choices: [
            {
                id: 'A',
                text: '가족만 태운다',
                hint: '가족은 안전하다. 질문은 남는다.',
                tone: 'cooperate',
                effects: { family: 26, money: -18, peopleTrust: -24, conscience: -24, guiltRecord: 2, sunkCost: 8 },
                result: '열차가 움직일 때 자녀는 창밖을 보지 않았다. 당신도 보지 않았다.',
                flags: ['family_escape'],
            },
            {
                id: 'B',
                text: '표를 나누고 일부만 보낸다',
                hint: '가족과 공동체 모두 완전히 지키지 못한다.',
                tone: 'gray',
                effects: { family: -4, money: -12, peopleTrust: 14, conscience: 8, opportunistRecord: 1, resistanceRecord: 1 },
                result: '남은 사람과 떠난 사람 모두 당신의 이름을 불렀다. 서로 다른 목소리였다.',
                flags: ['split_tickets'],
            },
            {
                id: 'C',
                text: '다른 가족에게 표를 양보한다',
                hint: '강한 양심 선택이다. 가족이 크게 흔들린다.',
                tone: 'resist',
                effects: { family: -28, money: -10, peopleTrust: 30, conscience: 28, risk: 16, resistanceRecord: 2 },
                result: '배우자는 당신을 이해하려 애썼다. 이해와 용서는 같은 말이 아니었다.',
                flags: ['gave_tickets'],
            },
        ],
    },
    {
        id: 'CH5_001',
        chapter: 5,
        age: 49,
        title: '조사위원회의 방문',
        place: '임시 기록관',
        news: '아르카 제국이 물러난 뒤, 루멘 임시정부는 협력 기록과 저항 기록을 조사하기 시작했다.',
        description:
            '위원은 당신이 남긴 서류를 책상 위에 펼쳤다. 어떤 기록은 지워졌고, 어떤 기록은 더 선명해졌다.',
        speaker: '조사위원',
        dialogue: '그때는 모두가 그랬다고 말하면, 아무도 책임지지 않아도 되는 걸까요?',
        choices: [
            {
                id: 'A',
                text: '가족을 위해 어쩔 수 없었다고 말한다',
                hint: '방어적 진술이다. 가족 기록이 중심이 된다.',
                tone: 'neutral',
                effects: { family: 6, conscience: -8, peopleTrust: -6 },
                result: '위원은 고개를 끄덕였지만 펜을 멈추지는 않았다.',
                flags: ['defended_family'],
            },
            {
                id: 'B',
                text: '모든 기록을 인정한다',
                hint: '법적 위험은 커질 수 있지만 회피 기록은 줄어든다.',
                tone: 'resist',
                effects: { money: -20, family: -10, conscience: 20, peopleTrust: 14, risk: 10, resistanceRecord: 1 },
                result: '말은 생각보다 짧았다. 침묵은 생각보다 오래 남았다.',
                flags: ['confessed'],
            },
            {
                id: 'C',
                text: '남은 인맥으로 빠져나간다',
                hint: '살길을 찾는다. 후대 평가는 더 어두워진다.',
                tone: 'gray',
                effects: { money: -30, family: 8, status: -10, peopleTrust: -18, conscience: -18, opportunistRecord: 3 },
                result: '문은 열렸다. 기록관 밖의 햇빛은 조금도 따뜻하지 않았다.',
                flags: ['escaped_trial'],
            },
        ],
    },
    {
        id: 'CH5_002',
        chapter: 5,
        age: 50,
        title: '가족의 질문',
        place: '낡은 식탁',
        news: '기록관은 전쟁기의 협력과 저항 명단을 공개하기 시작했다.',
        description:
            '자녀는 당신의 이름이 적힌 기록을 들고 앉아 있다. 가족을 지켰다는 말만으로 설명되지 않는 줄들이 있다.',
        speaker: '자녀',
        dialogue: '아버지, 그때 아버지는 어떤 사람이었어요?',
        choices: [
            {
                id: 'A',
                text: '우리는 살아남아야 했다고 말한다',
                hint: '가족을 중심으로 기억을 정리한다.',
                tone: 'neutral',
                effects: { family: 8, conscience: -6 },
                result: '자녀는 대답하지 않았다. 살아남았다는 말은 너무 많은 것을 덮었다.',
            },
            {
                id: 'B',
                text: '부끄러운 선택까지 말한다',
                hint: '상처를 열지만 침묵은 줄어든다.',
                tone: 'resist',
                effects: { family: -4, conscience: 18, peopleTrust: 8, resistanceRecord: 1 },
                result: '이야기는 길고 느렸다. 처음으로 가족은 같은 기록을 함께 읽었다.',
            },
            {
                id: 'C',
                text: '기록이 모두 사실은 아니라고 말한다',
                hint: '당장은 피할 수 있지만 마지막 기록이 흐려진다.',
                tone: 'gray',
                effects: { family: -8, conscience: -14, opportunistRecord: 2 },
                result: '자녀는 종이를 접어 품에 넣었다. 질문은 끝나지 않았다.',
            },
        ],
    },
]

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, Math.round(value)))

function applyEffects(player: Player, effects: Choice['effects']) {
    const next = { ...player }
    Object.entries(effects).forEach(([key, value]) => {
        const statKey = key as StatKey
        const max = statKey === 'money' || statKey === 'debt' ? 999 : 100
        next[statKey] = clamp(next[statKey] + (value ?? 0), 0, max)
    })

    const livingCost = 10 + Math.floor(next.debt * 0.1) + (next.family < 30 ? 6 : 0)
    const jobIncome = next.job.includes('제국') ? 18 : next.job.includes('교사') ? 8 : next.job.includes('연락') ? 5 : 11
    next.money = clamp(next.money + jobIncome - livingCost, 0, 999)

    if (next.money <= 0) {
        next.family = clamp(next.family - 15)
        next.conscience = clamp(next.conscience - 5)
        next.debt = clamp(next.debt + 12, 0, 999)
    }

    if (next.conscience < 25 && next.family > 70) {
        next.family = clamp(next.family - 4)
    }

    return next
}

function getChapter(age: number) {
    if (age <= 18) return 0
    if (age <= 25) return 1
    if (age <= 32) return 2
    if (age <= 40) return 3
    if (age <= 47) return 4
    return 5
}

function getJob(player: Player) {
    if (player.flags.includes('war_supplier')) return '군수 사업가'
    if (player.flags.includes('war_admin')) return '전시 행정관'
    if (player.flags.includes('empire_clerk')) return '제국청 직원'
    if (player.flags.includes('lumen_teacher')) return '루멘어 교사'
    if (player.flags.includes('night_school')) return '비밀 야학 조력자'
    if (player.flags.includes('market_vendor')) return '노점상'
    return player.job
}

function getEnding(player: Player) {
    const guilt = player.guiltRecord
    const resistance = player.resistanceRecord
    const opportunist = player.opportunistRecord

    if (player.risk >= 82 && player.empireTrust < 25) {
        return {
            title: '체포된 이름',
            verdict: '당신은 시대를 배신하지 않으려 했다. 그러나 가족은 그 대가를 함께 짊어졌다.',
            note: '높은 위험도와 낮은 제국 신뢰가 조기 몰락으로 이어졌습니다.',
        }
    }

    if (player.empireTrust >= 90 && player.peopleTrust <= 12 && guilt >= 8) {
        return {
            title: '제국의 충견',
            verdict: '승자의 편에 섰다고 믿었지만, 승자는 영원하지 않았다.',
            note: '제국 신뢰, 낮은 민중 신뢰, 높은 죄책 기록이 결합했습니다.',
        }
    }

    if (player.money >= 80 && player.empireTrust >= 70 && guilt >= 7) {
        return {
            title: '성공한 협력자, 몰락한 이름',
            verdict: '당신은 가족을 지켰다. 그러나 수많은 가족을 무너뜨리는 데 기여했다.',
            note: '재산과 지위는 높았지만 숨겨진 죄책 기록이 무겁게 공개됩니다.',
        }
    }

    if (resistance >= 7 && player.peopleTrust >= 65) {
        return {
            title: player.money <= 30 || player.family <= 40 ? '가난한 저항자' : '기록을 지킨 사람',
            verdict:
                player.money <= 30 || player.family <= 40
                    ? '당신은 시대를 배신하지 않았다. 그러나 곁의 사람들은 대가를 함께 짊어졌다.'
                    : '당신은 모든 것을 구하지 못했지만, 사라질 뻔한 기록을 남겼다.',
            note: '저항 기록과 민중 신뢰가 높아 저항자 계열로 판정되었습니다.',
        }
    }

    if (opportunist >= 5) {
        return {
            title: '막판의 변절자',
            verdict: '당신은 편을 바꿨다. 마음을 바꾼 것인지는 아무도 알 수 없었다.',
            note: '기회주의 기록이 높아 후대 평가가 가장 불안정해졌습니다.',
        }
    }

    if (player.family >= 80 && guilt >= 5 && player.conscience <= 35) {
        return {
            title: '가족만을 위한 사람',
            verdict: '당신의 집에는 불이 꺼지지 않았다. 대신 다른 집들의 불이 꺼지는 것을 보지 않기로 했다.',
            note: '높은 가족 안정과 낮은 양심, 죄책 기록이 함께 작동했습니다.',
        }
    }

    if (guilt <= 2 && resistance <= 2 && player.peopleTrust < 45 && player.empireTrust < 45) {
        return {
            title: '이름 없는 사람',
            verdict: '당신은 살아남았다. 그러나 시대는 당신을 지나쳐 갔다.',
            note: '큰 죄도 큰 저항도 남기지 않았지만 누구의 기억에도 깊게 남지 못했습니다.',
        }
    }

    return {
        title: '회색의 생존자',
        verdict: '역사는 당신을 단정하지 못했다.',
        note: '죄책과 저항, 생존과 회피가 뒤섞여 가장 애매한 기록으로 남았습니다.',
    }
}

const statCards = [
    { key: 'money', label: '재산', Icon: Coins, max: 160 },
    { key: 'family', label: '가족 안정', Icon: Users, max: 100 },
    { key: 'status', label: '사회적 지위', Icon: Landmark, max: 100 },
    { key: 'conscience', label: '양심', Icon: HeartPulse, max: 100 },
    { key: 'information', label: '정보력', Icon: Radio, max: 100 },
    { key: 'risk', label: '위험도', Icon: ShieldAlert, max: 100 },
] as const

const toneLabel: Record<Choice['tone'], string> = {
    cooperate: '협력',
    resist: '저항',
    neutral: '중립',
    gray: '회색',
}

export default function MoralDilemmaGame() {
    const [player, setPlayer] = useState<Player>(initialPlayer)
    const [eventIndex, setEventIndex] = useState(0)
    const [history, setHistory] = useState<HistoryItem[]>([])
    const [lastResult, setLastResult] = useState<string | null>(null)
    const [finished, setFinished] = useState(false)
    const event = events[eventIndex]
    const ending = useMemo(() => getEnding(player), [player])

    const choose = (choice: Choice) => {
        const updated = applyEffects(player, choice.effects)
        const nextAge = eventIndex >= events.length - 1 ? updated.age : events[eventIndex + 1].age
        const flags = Array.from(new Set([...updated.flags, ...(choice.flags ?? [])]))
        const nextPlayer = {
            ...updated,
            flags,
            age: nextAge,
            year: updated.year + 1,
            chapter: getChapter(nextAge),
            job: getJob({ ...updated, flags }),
        }

        setHistory((items) => [
            ...items,
            {
                year: player.year,
                age: event.age,
                title: event.title,
                choice: choice.text,
                result: choice.result,
                tone: choice.tone,
            },
        ])
        setLastResult(choice.result)
        setPlayer(nextPlayer)

        if (eventIndex >= events.length - 1 || nextPlayer.risk >= 95 || nextPlayer.family <= 0) {
            setFinished(true)
            return
        }

        setEventIndex((index) => index + 1)
    }

    const restart = () => {
        setPlayer(initialPlayer)
        setEventIndex(0)
        setHistory([])
        setLastResult(null)
        setFinished(false)
    }

    return (
        <main className="min-h-screen bg-[#ece7dc] text-[#1c1a17]">
            <section className="relative overflow-hidden border-b-2 border-[#1c1a17] bg-[#2d302f] text-[#f7f0e3]">
                <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:44px_44px]" />
                <div className="game-container relative grid min-h-[calc(100svh-56px)] items-end gap-10 pb-10 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:pb-16">
                    <div className="pb-2">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d1a846]">GRAARE Prototype</p>
                        <h1 className="mt-4 text-[44px] font-black leading-[0.96] tracking-normal text-[#f7f0e3] md:text-[72px]">
                            회색의 시대
                        </h1>
                        <p className="mt-5 max-w-xl text-lg font-semibold leading-relaxed text-[#f7f0e3]/78">
                            가족을 지키는 합리적인 선택이 어떤 기록으로 남는지 따라가는 도덕 선택 시뮬레이션입니다.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <span className="border-2 border-[#f7f0e3] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#f7f0e3]">
                                Hidden Route /GRAARE
                            </span>
                            <span className="border-2 border-[#d1a846] bg-[#d1a846] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#1c1a17]">
                                {finished ? 'Record Opened' : `Age ${event.age}`}
                            </span>
                        </div>
                    </div>

                    <div className="relative min-h-[360px] md:min-h-[460px]">
                        <div className="absolute left-2 top-8 h-[270px] w-[210px] rotate-[-8deg] border-2 border-[#1c1a17] bg-[#cfc4ae] p-5 shadow-[8px_8px_0_rgba(0,0,0,.3)] md:h-[330px] md:w-[260px]">
                            <p className="border-b-2 border-[#1c1a17] pb-2 text-center text-xs font-black uppercase tracking-[0.18em] text-[#1c1a17]">
                                Official Bulletin
                            </p>
                            <div className="mt-5 space-y-3">
                                <div className="h-3 bg-[#1c1a17]/70" />
                                <div className="h-3 w-4/5 bg-[#1c1a17]/50" />
                                <div className="h-3 w-11/12 bg-[#1c1a17]/60" />
                                <div className="mt-7 h-24 border-2 border-[#1c1a17]/60 bg-[#8f978d]" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-0 h-[300px] w-[250px] rotate-[5deg] border-2 border-[#1c1a17] bg-[#f4ead8] p-6 shadow-[10px_10px_0_rgba(0,0,0,.34)] md:h-[380px] md:w-[330px]">
                            <div className="flex items-center justify-between border-b-2 border-[#1c1a17] pb-3">
                                <Archive className="h-7 w-7" />
                                <p className="text-xs font-black uppercase tracking-[0.18em]">Record File</p>
                            </div>
                            <p className="mt-8 text-3xl font-black leading-none tracking-normal text-[#1c1a17] md:text-5xl">GRAY</p>
                            <p className="mt-2 text-3xl font-black leading-none tracking-normal text-[#1c1a17] md:text-5xl">AGE</p>
                            <div className="mt-8 grid grid-cols-3 gap-2">
                                {[0, 1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="h-8 border-2 border-[#1c1a17] bg-[#d1a846]/70" />
                                ))}
                            </div>
                            <div className="mt-8 h-16 border-2 border-[#8b2f2f] p-2 text-center text-sm font-black uppercase tracking-[0.16em] text-[#8b2f2f]">
                                Classified
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#ece7dc] py-8 md:py-12">
                <div className="game-container grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
                    <div className="border-2 border-[#1c1a17] bg-[#f7f0e3] shadow-[0_8px_0_#1c1a17]">
                        {!finished ? (
                            <div className="grid min-h-[620px] grid-rows-[auto_1fr_auto]">
                                <div className="border-b-2 border-[#1c1a17] bg-[#d1a846] px-4 py-3 md:px-6">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <p className="text-sm font-black uppercase tracking-[0.14em] text-[#1c1a17]">
                                            {event.age}세 / Chapter {event.chapter} / {event.place}
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-black text-[#1c1a17]">
                                            <BriefcaseBusiness className="h-4 w-4" />
                                            {player.job}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 md:p-7">
                                    {lastResult && (
                                        <div className="mb-5 border-2 border-[#1c1a17] bg-[#e2d3b8] p-4 text-sm font-bold leading-relaxed text-[#4d4132]">
                                            {lastResult}
                                        </div>
                                    )}

                                    <div className="border-b-2 border-[#1c1a17] pb-5">
                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b2f2f]">News</p>
                                        <p className="mt-2 text-base font-bold leading-relaxed text-[#4d4132]">{event.news}</p>
                                    </div>

                                    <h2 className="mt-7 text-3xl font-black leading-tight tracking-normal text-[#1c1a17] md:text-5xl">
                                        {event.title}
                                    </h2>
                                    <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-[#51483b]">
                                        {event.description}
                                    </p>

                                    <div className="mt-7 border-l-4 border-[#8b2f2f] bg-[#eee1cc] px-5 py-4">
                                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">{event.speaker}</p>
                                        <p className="mt-2 text-lg font-black leading-relaxed text-[#1c1a17]">“{event.dialogue}”</p>
                                    </div>
                                </div>

                                <div className="grid gap-3 border-t-2 border-[#1c1a17] bg-[#ded2bd] p-4 md:grid-cols-2 md:p-5">
                                    {event.choices.map((choice) => (
                                        <button
                                            key={choice.id}
                                            type="button"
                                            onClick={() => choose(choice)}
                                            className="min-h-[132px] border-2 border-[#1c1a17] bg-[#f7f0e3] p-4 text-left shadow-[0_5px_0_#1c1a17] transition-transform hover:-translate-y-0.5 hover:bg-white active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                                        >
                                            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#8b2f2f]">
                                                {toneLabel[choice.tone]}
                                            </span>
                                            <span className="mt-2 block text-lg font-black leading-snug text-[#1c1a17]">{choice.text}</span>
                                            <span className="mt-3 block text-sm font-bold leading-relaxed text-[#5b5143]">{choice.hint}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="p-5 md:p-8">
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b2f2f]">Ending</p>
                                <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal md:text-6xl">{ending.title}</h2>
                                <p className="mt-6 max-w-3xl text-xl font-black leading-relaxed text-[#1c1a17]">{ending.verdict}</p>
                                <p className="mt-4 max-w-3xl text-base font-bold leading-relaxed text-[#5b5143]">{ending.note}</p>

                                <div className="mt-8 grid gap-3 md:grid-cols-4">
                                    {[
                                        ['죄책 기록', player.guiltRecord],
                                        ['저항 기록', player.resistanceRecord],
                                        ['기회주의 기록', player.opportunistRecord],
                                        ['매몰비용', player.sunkCost],
                                    ].map(([label, value]) => (
                                        <div key={label} className="border-2 border-[#1c1a17] bg-[#eee1cc] p-4">
                                            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8b2f2f]">{label}</p>
                                            <p className="mt-2 text-3xl font-black">{value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 border-2 border-[#1c1a17] bg-[#2d302f] p-4 text-[#f7f0e3]">
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d1a846]">Record Archive</p>
                                    <div className="mt-4 max-h-[360px] space-y-3 overflow-y-auto pr-1">
                                        {history.map((item) => (
                                            <article key={`${item.age}-${item.title}`} className="border border-[#f7f0e3]/25 p-3">
                                                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#d1a846]">
                                                    {item.age}세 / {toneLabel[item.tone]}
                                                </p>
                                                <p className="mt-1 font-black">{item.title}</p>
                                                <p className="mt-1 text-sm font-semibold text-[#f7f0e3]/75">{item.choice}</p>
                                            </article>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={restart}
                                    className="mt-8 inline-flex min-h-12 items-center gap-2 border-2 border-[#1c1a17] bg-[#d1a846] px-5 text-sm font-black text-[#1c1a17] shadow-[0_5px_0_#1c1a17] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1c1a17]"
                                >
                                    <RefreshCcw className="h-4 w-4" />
                                    다시 시작
                                </button>
                            </div>
                        )}
                    </div>

                    <aside className="space-y-5">
                        <div className="border-2 border-[#1c1a17] bg-[#f7f0e3] p-4 shadow-[0_8px_0_#1c1a17]">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b2f2f]">Status</p>
                            <div className="mt-4 space-y-4">
                                {statCards.map(({ key, label, Icon, max }) => {
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

                        <div className="border-2 border-[#1c1a17] bg-[#2d302f] p-4 text-[#f7f0e3] shadow-[0_8px_0_#1c1a17]">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d1a846]">Reputation</p>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="border border-[#f7f0e3]/25 p-3">
                                    <p className="text-xs font-bold text-[#f7f0e3]/65">제국 신뢰</p>
                                    <p className="mt-1 text-2xl font-black">{player.empireTrust}</p>
                                </div>
                                <div className="border border-[#f7f0e3]/25 p-3">
                                    <p className="text-xs font-bold text-[#f7f0e3]/65">민중 신뢰</p>
                                    <p className="mt-1 text-2xl font-black">{player.peopleTrust}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm font-semibold leading-relaxed text-[#f7f0e3]/70">
                                죄책, 저항, 기회주의 기록은 엔딩에서만 공개됩니다.
                            </p>
                        </div>

                        <div className="border-2 border-[#1c1a17] bg-[#f7f0e3] p-4 shadow-[0_8px_0_#1c1a17]">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b2f2f]">Choice Log</p>
                            <div className="mt-4 space-y-3">
                                {history.slice(-5).length === 0 ? (
                                    <p className="text-sm font-bold leading-relaxed text-[#5b5143]">아직 기록된 선택이 없습니다.</p>
                                ) : (
                                    history.slice(-5).map((item) => (
                                        <div key={`${item.age}-${item.choice}`} className="border-l-4 border-[#8b2f2f] pl-3">
                                            <p className="text-xs font-black text-[#8b2f2f]">{item.age}세</p>
                                            <p className="text-sm font-black leading-snug">{item.choice}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    )
}
