import React, { useState } from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { StInput } from "components/Common/GlobalStyles";
import Button from "components/Common/Button";
import IntroPage from "./IntroPage";

const MAX_LENGTH = 15;

const SignUpPage = () => {
  const [flag, setFlag] = useState();
  const onClickBtnHandler = () => {
    setFlag((value) => !value);
  };
  return (
    <>
      {!flag ? (
        <StWrap>
          <span>회원님을 뭐라고 부를까요?</span>
          <StInput
            placeholder="닉네임을 입력해주세요."
            maxLength={MAX_LENGTH}
          />

          <Button text="입력완료" theme="dark" click={onClickBtnHandler} />
        </StWrap>
      ) : (
        <IntroPage></IntroPage>
      )}
    </>
  );
};

export default SignUpPage;

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 4rem;
  span {
    margin-bottom: 4rem;
  }
`;
