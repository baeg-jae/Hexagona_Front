import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { KAKAO_AUTH_URL } from "shared/kakao/kakao";
import { GOOGLE_AUTH_URL } from "shared/google/google";
import LoginImg from "assets/img/LoginImg.png";

const handleButtonColor = (color) => {
  switch (color) {
    case "kakao":
      return "#FFCF54;";
    case "naver":
      return "#00A857";
    default:
      return "#fff";
  }
};

const handleTextColor = (color) => {
  switch (color) {
    case "kakao":
      return "#513F00";
    case "naver":
      return "#fff";
    default:
      return "#555";
  }
};

const LogIn = () => {
  return (
    <StFirstPageDiv>
      <span>이번엔 꼭 내 인생을 갓생으로</span>
      <span className="bigFont">갓생메이커</span>
      <StButtonDiv name="kakao">
        <a href={KAKAO_AUTH_URL}>
          <span className="innerText">카카오 계정으로 시작하기</span>
        </a>
      </StButtonDiv>
      <StButtonDiv name="naver">
        <a href={GOOGLE_AUTH_URL}>
          <span className="innerText">네이버 계정으로 시작하기</span>
        </a>
      </StButtonDiv>
      <StButtonDiv name="">
        <a href={GOOGLE_AUTH_URL}>
          <span className="innerText">Google 계정으로 계속하기</span>
        </a>
      </StButtonDiv>
    </StFirstPageDiv>
  );
};

export default LogIn;

const StFirstPageDiv = styled.div`
  ${flex({ direction: "column", justify: "flex-end" })}
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: linear-gradient(
      180deg,
      rgba(30, 5, 5, 0) -9.31%,
      #1e1818 70.22%
    ),
    url(${LoginImg});
  font-size: 20px;
  color: var(--white);
  text-align: center;
  letter-spacing: -0.02em;
  .bigFont {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 13px;
  }
  & > Button {
    margin: 25px 0 58px 0;
  }
`;

const StButtonDiv = styled.div`
  ${flex({ direction: "column" })}
  width: 327px;
  height: 56px;
  border-radius: 30px;
  margin-top: 8px;
  background-color: ${(props) => handleButtonColor(props.name)};
  color: ${(props) => handleTextColor(props.name)};
  .innerText {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;
