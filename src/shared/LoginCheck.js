// 로그인, 회원가입 유효성 검사 파일

// 닉네임 형식 검사
export const idRegCheck = (id) => {
  const regPass = /^(?=.*[0-9a-zA-Z가-힣])[가-힣a-zA-Z0-9-_.]{2,15}$/;
  return regPass.test(id);
};

// 정규식
// ^ => 시작
// (?=.*\d) => 0~9까지의 숫자 표현
// (?=.*[a-zA-Z]) => 알파벳
