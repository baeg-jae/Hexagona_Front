import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { StInput } from "components/Common/GlobalStyles";

const SignUpPage = () => {
  return (
    <StWrap>
      <span>회원님을 뭐라고 부를까요?</span>
      <StInput />
    </StWrap>
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
`;
