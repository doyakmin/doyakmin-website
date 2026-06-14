import type { Metadata } from 'next';
import AccountDeleteFormPage from '@/components/account_delete_form_page';
import { createSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = createSeoMetadata({
  title: 'Gratella 계정 삭제 요청 | 도약민',
  description: 'Gratella 서비스 계정 삭제를 요청하는 도약민 공식 페이지입니다.',
  path: '/delete-account/gratella',
  keywords: ['Gratella 계정 삭제', 'Gratella 탈퇴'],
});

export default function DeleteAccountGratellaPage() {
  return (
    <AccountDeleteFormPage
      service="gratella"
      serviceLabel="Gratella"
      title="계정 삭제 요청"
      description="Gratella 서비스의 계정 삭제를 원하시면 아래 정보를 입력해주세요."
      fields={[
        {
          id: 'phone',
          name: 'phone',
          label: '휴대폰 번호',
          type: 'tel',
          placeholder: '010-1234-5678',
          required: true,
        },
        {
          id: 'nickname',
          name: 'nickname',
          label: '닉네임 또는 이름',
          type: 'text',
          placeholder: '앱에서 사용하는 이름',
          required: true,
        },
        {
          id: 'kakao',
          name: 'kakao',
          label: '카카오 닉네임 (선택사항)',
          type: 'text',
          placeholder: '카카오 로그인 사용 시 입력',
        },
        {
          id: 'email',
          name: 'email',
          label: '이메일 주소 (선택사항)',
          type: 'email',
          placeholder: 'your-email@example.com',
        },
      ]}
      links={[
        { href: '/delete-account', label: '한국지로 이동' },
        { href: '/delete-account/namgu', label: 'walker홀릭으로 이동' },
      ]}
    />
  );
}
