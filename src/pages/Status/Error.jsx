import React from "react";
import { StWrap } from "components/Common/GlobalStyles";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Button from "components/Common/Button";

const Error = () => {
  return (
    <StWrapFlex>
      <span className="bigSpan">앗!</span>
      <span className="smallSpan">오류가 발생했어요. </span>
      <Button text="뒤로가기" theme="dark" />
    </StWrapFlex>
  );
};

export default Error;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  .bigSpan {
    font-weight: 700;
    font-size: 64px;
    line-height: 130%;
    margin-bottom: 6px;
  }
  .smallSpan {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 42px;
  }
`;
