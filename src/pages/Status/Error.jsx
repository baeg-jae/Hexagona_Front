import React from "react";
import { StWrapFlex } from "components/Common/GlobalStyles";
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
