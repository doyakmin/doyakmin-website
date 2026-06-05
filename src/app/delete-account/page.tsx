import AccountDeleteFormPage from '@/components/account_delete_form_page';

export default function DeleteAccountPage() {
  return (
    <AccountDeleteFormPage
      service="hangukji"
      serviceLabel="한국지"
      title="계정 삭제 요청"
      description="한국지 서비스의 계정 삭제를 원하시면 아래 정보를 입력해주세요."
      fields={[
        {
          id: 'email',
          name: 'email',
          label: '이메일 주소',
          type: 'email',
          placeholder: 'your-email@example.com',
          required: true,
        },
        {
          id: 'nickname',
          name: 'nickname',
          label: '닉네임',
          type: 'text',
          placeholder: '게임에서 사용하는 닉네임',
          required: true,
        },
        {
          id: 'uid',
          name: 'uid',
          label: 'UID (선택사항)',
          type: 'text',
          placeholder: '게임 설정 화면에서 확인 가능한 경우 입력',
        },
      ]}
      links={[
        { href: '/delete-account/namgu', label: 'walker홀릭으로 이동' },
        { href: '/delete-account/gratella', label: 'Gratella로 이동' },
      ]}
    />
  );
}
