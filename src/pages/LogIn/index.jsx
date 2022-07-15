import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "shared/socialAuth";
import { SocialButton } from "components/SignIn/SocialButton";
import LoginImg from "assets/img/LoginImg.webp";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const LogIn = () => {
  return (
    <StFirstPageDiv>
      <div className="gradient">
        <span>이번엔 꼭 내 인생을 갓생으로</span>
        <span className="bigFont">갓생메이커</span>
        <SocialButton
          link={KAKAO_AUTH_URL}
          name="kakao"
          text="카카오 계정으로 시작하기"
        />
        <SocialButton name="naver" text="네이버 계정으로 시작하기" />
        <SocialButton
          link={GOOGLE_AUTH_URL}
          name=""
          text="Google 계정으로 계속하기"
        />
      </div>
    </StFirstPageDiv>
  );
};

export default LogIn;

const StFirstPageDiv = styled.div`
  ${flex({ direction: "column", justify: "flex-end" })}
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url(${LoginImg});
  font-size: 20px;
  color: var(--white);
  text-align: center;
  letter-spacing: -0.02em;
  .bigFont {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 13px;
    opacity: 1;
  }
  & > Button {
    margin: 25px 0 58px 0;
  }
  .gradient {
    ${flex({ direction: "column", justify: "flex-end" })}
    width: 100%;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(30, 5, 5, 0) -9.31%,
      var(--gradient) 72.46%
    );
  }
`;
