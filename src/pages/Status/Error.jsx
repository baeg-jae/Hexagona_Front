import React from "react";
import { StWrapFlex } from "components/Common/GlobalStyles";
import Button from "components/Common/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(-1);
  };
  return (
    <StWrapFlex>
      <span className="bigSpan">앗!</span>
      <span className="smallSpan">오류가 발생했어요. </span>
      <Button text="뒤로가기" theme="dark" click={onClickHandler} />
    </StWrapFlex>
  );
};

export default Error;
