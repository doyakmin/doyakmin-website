import AccountDeleteFormPage from '@/components/account_delete_form_page';

export default function DeleteAccountNamguPage() {
  return (
    <AccountDeleteFormPage
      service="namgu-walkerholic"
      serviceLabel="walker홀릭"
      title="계정 삭제 요청"
      description="walker홀릭 서비스의 계정 삭제를 원하시면 아래 정보를 입력해주세요."
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
          label: '닉네임 또는 사용자명',
          type: 'text',
          placeholder: '앱에서 사용하는 닉네임 또는 사용자명',
          required: true,
        },
        {
          id: 'uid',
          name: 'uid',
          label: 'UID (선택사항)',
          type: 'text',
          placeholder: '앱 설정 화면에서 확인 가능한 경우 입력',
        },
        {
          id: 'phone',
          name: 'phone',
          label: '휴대폰 번호 (선택사항)',
          type: 'tel',
          placeholder: '010-1234-5678',
        },
      ]}
      links={[{ href: '/delete-account', label: '한국지로 이동' }]}
    />
  );
}
