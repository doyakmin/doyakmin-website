import type { Metadata } from 'next';
import Link from 'next/link';
import PopIn from '@/components/PopInAnimation';
import {
  Shield,
  Database,
  Clock,
  Users,
  Building2,
  Trash2,
  UserCheck,
  MapPin,
  Heart,
  Fingerprint,
  Mail,
  History,
  ExternalLink,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Walker홀릭 개인정보처리방침 | 도약민',
  description:
    'Walker홀릭 서비스의 개인정보처리방침입니다. 주식회사 도약민은 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리합니다.',
};

const sections = [
  { id: 'article-1', label: '수집 항목', icon: Database },
  { id: 'article-2', label: '이용 목적', icon: Shield },
  { id: 'article-3', label: '보유 기간', icon: Clock },
  { id: 'article-4', label: '제3자 제공', icon: Users },
  { id: 'article-5', label: '처리 위탁', icon: Building2 },
  { id: 'article-6', label: '파기 절차', icon: Trash2 },
  { id: 'article-7', label: '이용자 권리', icon: UserCheck },
  { id: 'article-8', label: '위치정보', icon: MapPin },
  { id: 'article-9', label: '건강 데이터', icon: Heart },
  { id: 'article-10', label: '자동 수집', icon: Fingerprint },
  { id: 'article-11', label: '보호책임자', icon: Mail },
  { id: 'article-12', label: '개정 이력', icon: History },
];

function SectionHeading({
  icon: Icon,
  id,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  id: string;
  title: string;
}) {
  return (
    <div id={id} className="flex items-center gap-3.5 scroll-mt-28">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-100">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <h2 className="text-base font-semibold tracking-tight text-gray-900 md:text-lg">{title}</h2>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-5 overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50/60">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, i) => (
            <tr key={i} className="transition-colors duration-200 hover:bg-gray-50/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KeyValueTable({ data }: { data: { label: string; value: React.ReactNode }[] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-gray-100">
      <dl className="divide-y divide-gray-50">
        {data.map(({ label, value }) => (
          <div key={label} className="flex">
            <dt className="w-24 shrink-0 bg-gray-50/60 px-4 py-3 text-xs font-medium uppercase tracking-wider text-gray-400 sm:w-28">
              {label}
            </dt>
            <dd className="px-4 py-3 text-sm text-gray-600">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ArticleCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <PopIn delay={delay}>
      <article className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8">
        {children}
      </article>
    </PopIn>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50/30 font-sans text-gray-900" style={{ scrollBehavior: 'smooth' }}>
      {/* Hero — Halo Effect: 50ms 첫인상 */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-5 pb-14 pt-16 sm:px-8 md:pb-16 md:pt-20 lg:px-10">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
            <Shield className="h-4 w-4" />
            <span>Privacy Policy</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Walker홀릭
            <br />
            <span className="text-emerald-600">개인정보처리방침</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-500 shadow-sm">
              <CalendarDays className="h-3 w-3" />
              시행일: 2026.02.16
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 shadow-sm">
              v1.0
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 md:py-14 lg:px-10">
        {/* Table of Contents */}
        <PopIn>
          <nav className="mb-12 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-300">목차</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-3">
              {sections.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group/toc flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-500 transition-all duration-200 hover:bg-emerald-50/80 hover:text-emerald-700"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-gray-300 transition-colors duration-200 group-hover/toc:text-emerald-500" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          </nav>
        </PopIn>

        {/* Intro */}
        <PopIn delay={80}>
          <div className="mb-10 rounded-2xl border border-gray-100 bg-white p-6 text-sm leading-7 text-gray-500 shadow-sm md:p-8 md:text-base">
            주식회사 도약민(이하 &quot;회사&quot;)은 「개인정보 보호법」 및 관련 법령에 따라 이용자의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을
            수립·공개합니다.
          </div>
        </PopIn>

        {/* Articles — Cognitive Fluency: 넉넉한 여백, 1섹션 1목표 */}
        <div className="space-y-8">
          {/* 제1조 */}
          <ArticleCard>
            <SectionHeading icon={Database} id="article-1" title="제1조 (수집하는 개인정보 항목 및 수집 방법)" />
            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              회사는 Walker홀릭 서비스 제공을 위해 아래와 같이 개인정보를 수집합니다.
            </p>

            <h3 className="mt-8 text-sm font-semibold text-gray-700">1) 회원가입 시 수집 항목</h3>
            <DataTable
              headers={['수집 항목', '수집 방법', '목적']}
              rows={[
                ['이메일 주소, 이름, 프로필 사진', 'Google 로그인', '회원 식별 및 서비스 제공'],
                ['이메일 주소, 이름, 프로필 사진', 'Apple 로그인', '회원 식별 및 서비스 제공'],
                ['이메일 주소, 닉네임, 프로필 사진', '카카오 로그인', '회원 식별 및 서비스 제공'],
                ['이메일 주소, 비밀번호', '이메일 직접 가입', '회원 식별 및 서비스 제공'],
              ]}
            />

            <h3 className="mt-8 text-sm font-semibold text-gray-700">2) 서비스 이용 중 수집 항목</h3>
            <DataTable
              headers={['수집 항목', '수집 방법', '목적']}
              rows={[
                ['닉네임, 성별, 연령대', '앱 내 직접 입력', '프로필 관리 및 서비스 개인화'],
                ['걸음수 (신체 활동 데이터)', '스마트폰 센서 / Health Connect', '미션 달성 측정 및 쿠폰 발급'],
                ['현재 위치 정보 (GPS)', '기기 GPS 센서 (이용 중에만)', '주변 제휴 상점 안내'],
                ['기기 알림 토큰 (FCM Token)', 'Firebase Cloud Messaging', '미션 달성·쿠폰 발급 푸시 알림'],
              ]}
            />

            <h3 className="mt-8 text-sm font-semibold text-gray-700">3) 구독 결제 관련</h3>
            <div className="mt-4 rounded-xl bg-gray-50/80 p-5 text-sm leading-7 text-gray-500 md:text-base">
              <p>
                구독 결제 처리는 <strong className="font-semibold text-gray-600">Google Play 스토어</strong> 및{' '}
                <strong className="font-semibold text-gray-600">Apple App Store</strong>에서 직접 처리됩니다.
              </p>
              <p className="mt-2">회사는 카드번호, 계좌번호 등 결제 수단 정보를 직접 수집·저장하지 않습니다.</p>
              <p className="mt-2">구독 상태(구독 여부, 만료일)만 서비스 제공 목적으로 저장됩니다.</p>
            </div>
          </ArticleCard>

          {/* 제2조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Shield} id="article-2" title="제2조 (개인정보의 수집 및 이용 목적)" />
            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              회사는 수집한 개인정보를 다음 목적에 한하여 이용합니다.
            </p>
            <div className="mt-5 space-y-2">
              {[
                { title: '서비스 제공', desc: '회원 가입, 로그인, 미션 관리, 쿠폰 발급 및 사용' },
                { title: '걸음수 측정 및 미션 달성', desc: '일일 걸음수 측정을 통한 미션 완료 여부 확인' },
                { title: '위치 기반 서비스', desc: '현재 위치 기준 주변 제휴 상점 안내' },
                { title: '알림 서비스', desc: '미션 달성, 쿠폰 발급, 이벤트 정보 푸시 알림' },
                { title: '구독 서비스 관리', desc: '프리미엄 구독 상태 확인 및 혜택 제공' },
                { title: '서비스 개선', desc: '오류 분석 및 서비스 품질 개선' },
              ].map(({ title, desc }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-gray-50/80"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-600">
                    {i + 1}
                  </span>
                  <div className="text-sm md:text-base">
                    <span className="font-semibold text-gray-700">{title}</span>
                    <span className="mx-2 text-gray-200">|</span>
                    <span className="text-gray-500">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </ArticleCard>

          {/* 제3조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Clock} id="article-3" title="제3조 (개인정보의 보유 및 이용 기간)" />
            <div className="mt-5 space-y-2 text-sm leading-7 text-gray-500 md:text-base">
              <p>회사는 회원 탈퇴 시 또는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
              <p>단, 관련 법령에 따라 아래 정보는 일정 기간 보관합니다.</p>
            </div>
            <DataTable
              headers={['보관 정보', '보관 기간', '근거 법령']}
              rows={[
                ['계약 또는 청약철회 등에 관한 기록', '5년', '전자상거래법'],
                ['대금결제 및 재화 공급에 관한 기록', '5년', '전자상거래법'],
                ['소비자 불만 또는 분쟁처리에 관한 기록', '3년', '전자상거래법'],
                ['접속에 관한 기록', '3개월', '통신비밀보호법'],
              ]}
            />
          </ArticleCard>

          {/* 제4조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Users} id="article-4" title="제4조 (개인정보의 제3자 제공)" />
            <div className="mt-5 space-y-2 text-sm leading-7 text-gray-500 md:text-base">
              <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
              <p>다음의 경우에 한해 예외적으로 제공할 수 있습니다.</p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {[
                '이용자가 사전에 동의한 경우',
                '법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-500 md:text-base">
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ArticleCard>

          {/* 제5조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Building2} id="article-5" title="제5조 (개인정보 처리 위탁)" />
            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              회사는 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁합니다.
            </p>
            <DataTable
              headers={['수탁업체', '위탁 업무', '보유 및 이용 기간']}
              rows={[
                ['Google LLC (Firebase)', '인증, 데이터베이스, 푸시 알림, 서버 운영', '회원 탈퇴 시 또는 위탁 계약 종료 시'],
                ['Google LLC (Google Play)', '구독 결제 처리', '결제 관련 법령 보관 기간'],
              ]}
            />
          </ArticleCard>

          {/* 제6조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Trash2} id="article-6" title="제6조 (개인정보의 파기 절차 및 방법)" />
            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              개인정보는 수집 및 이용 목적이 달성된 후 아래와 같은 방법으로 지체 없이 파기합니다.
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: '전자적 형태', desc: '복구 불가능한 방법으로 영구 삭제' },
                { label: '종이 문서', desc: '분쇄기로 분쇄하거나 소각' },
              ].map(({ label, desc }) => (
                <li key={label} className="flex items-start gap-3 text-sm text-gray-500 md:text-base">
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-300" />
                  <span>
                    <strong className="font-semibold text-gray-600">{label}</strong>: {desc}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-emerald-100/80 bg-emerald-50/40 p-5">
              <p className="text-sm leading-7 text-gray-600 md:text-base">
                회원 탈퇴를 원하실 경우 앱 내{' '}
                <code className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-gray-600 shadow-sm">
                  설정 &gt; 계정 탈퇴
                </code>{' '}
                또는 아래 링크를 이용하세요.
              </p>
              <Link
                href="/delete-account/namgu"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition-all duration-200 hover:gap-2.5 hover:text-emerald-700"
              >
                계정 삭제 요청 페이지
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ArticleCard>

          {/* 제7조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={UserCheck} id="article-7" title="제7조 (이용자의 권리 및 행사 방법)" />
            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                '개인정보 열람 요청',
                '개인정보 정정·삭제 요청',
                '개인정보 처리 정지 요청',
                '개인정보 동의 철회 (서비스 탈퇴)',
              ].map((right, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 px-4 py-3 transition-all duration-200 hover:border-emerald-100 hover:bg-emerald-50/30"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-600">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600">{right}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              권리 행사는 아래 개인정보 보호책임자에게 서면, 이메일로 요청할 수 있으며, 지체 없이 조치하겠습니다.
            </p>
          </ArticleCard>

          {/* 제8조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={MapPin} id="article-8" title="제8조 (위치정보 관련)" />
            <div className="mt-5 space-y-2.5 text-sm leading-7 text-gray-500 md:text-base">
              <p>위치 정보는 앱 사용 중에만 수집되며, 백그라운드에서는 수집되지 않습니다.</p>
              <p>위치 정보 제공에 동의하지 않으셔도 걸음수 측정, 미션, 쿠폰 기능은 정상 이용 가능합니다.</p>
              <p>위치 정보 동의는 스마트폰 설정에서 언제든지 철회할 수 있습니다.</p>
            </div>
          </ArticleCard>

          {/* 제9조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Heart} id="article-9" title="제9조 (건강 데이터 관련)" />
            <div className="mt-5 space-y-2.5 text-sm leading-7 text-gray-500 md:text-base">
              <p>걸음수 데이터는 오직 미션 달성 측정 목적으로만 사용됩니다.</p>
              <p>
                Android 기기에서는 신체 활동 권한(ACTIVITY_RECOGNITION), Health Connect 연동을 통해
                수집합니다.
              </p>
              <p>걸음수 데이터는 제3자에게 제공되지 않으며, 회원 탈퇴 시 삭제됩니다.</p>
            </div>
          </ArticleCard>

          {/* 제10조 */}
          <ArticleCard delay={40}>
            <SectionHeading
              icon={Fingerprint}
              id="article-10"
              title="제10조 (개인정보 자동 수집 장치의 설치·운영 및 거부)"
            />
            <div className="mt-5 space-y-2.5 text-sm leading-7 text-gray-500 md:text-base">
              <p>
                회사는 서비스 개선을 위해 Firebase Analytics, Crashlytics를 통해 앱 사용 패턴 및 오류 정보를
                수집합니다.
              </p>
              <p>
                이는 개인을 식별하는 정보를 포함하지 않으며, 스마트폰 설정 &gt; 앱 &gt; 광고 ID 재설정을
                통해 거부할 수 있습니다.
              </p>
            </div>
          </ArticleCard>

          {/* 제11조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={Mail} id="article-11" title="제11조 (개인정보 보호책임자)" />
            <KeyValueTable
              data={[
                { label: '성명', value: '정민영' },
                { label: '직책', value: '대표' },
                {
                  label: '이메일',
                  value: (
                    <a
                      href="mailto:doyakmin@gmail.com"
                      className="font-medium text-emerald-600 transition-colors duration-200 hover:text-emerald-700"
                    >
                      doyakmin@gmail.com
                    </a>
                  ),
                },
                { label: '문의', value: '앱 내 설정 > 고객지원 또는 위 이메일로 문의' },
              ]}
            />
            <p className="mt-7 text-sm leading-7 text-gray-500 md:text-base">
              개인정보 관련 불만 처리 및 피해구제는 아래 기관에 문의하실 수 있습니다.
            </p>
            <div className="mt-4 space-y-2.5">
              {[
                {
                  name: '개인정보 침해신고센터',
                  url: 'https://privacy.kisa.or.kr',
                  domain: 'privacy.kisa.or.kr',
                  tel: '118',
                },
                {
                  name: '개인정보 분쟁조정위원회',
                  url: 'https://www.kopico.go.kr',
                  domain: 'www.kopico.go.kr',
                  tel: '1833-6972',
                },
              ].map(({ name, url, domain, tel }) => (
                <div
                  key={name}
                  className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 rounded-xl border border-gray-100 px-5 py-3 transition-all duration-200 hover:border-gray-200 hover:shadow-sm"
                >
                  <span className="text-sm font-semibold text-gray-600">{name}</span>
                  <span className="text-gray-200">|</span>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-emerald-600 transition-all duration-200 hover:gap-1.5 hover:text-emerald-700"
                  >
                    {domain}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span className="text-gray-200">|</span>
                  <span className="text-sm text-gray-400">{tel}</span>
                </div>
              ))}
            </div>
          </ArticleCard>

          {/* 제12조 */}
          <ArticleCard delay={40}>
            <SectionHeading icon={History} id="article-12" title="제12조 (개정 이력)" />
            <DataTable
              headers={['버전', '시행일', '주요 변경 사항']}
              rows={[['v1.0', '2026.02.16', '최초 제정']]}
            />
          </ArticleCard>
        </div>

        {/* Page Footer — Peak-End Rule: 마지막 인상 */}
        <PopIn delay={60}>
          <div className="mt-14 border-t border-gray-100 pt-8 text-center">
            <p className="text-sm text-gray-400">본 방침은 2026년 2월 16일부터 시행됩니다.</p>
            <p className="mt-1.5 text-xs text-gray-300">주식회사 도약민 | doyakmin@gmail.com</p>
          </div>
        </PopIn>
      </div>
    </main>
  );
}
