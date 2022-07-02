import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Button from "components/Common/Button";

const IntroPageComponents = ({
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  length,
  index,
}) => {
  return (
    <StWrap>
      <div className="container">
        <span className="firstSpan">{first}</span>
        <span>{second}</span>
        <span>{third}</span>
        <span className="smallTitle secondSpan">{fourth}</span>
        <span className="smallTitle">{fifth}</span>
        <span className="smallTitle">{sixth}</span>
      </div>
      {index === length - 1 ? (
        <Button theme="dark" text="갓생 시작하기"></Button>
      ) : (
        <></>
      )}
    </StWrap>
  );
};

export default IntroPageComponents;

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem;
  .firstSpan {
    margin-top: 3rem;
  }
  .secondSpan {
    margin-top: 1rem;
  }
  .smallTitle {
    font-size: 1rem;
    font-weight: 300;
  }
  .container {
    ${flex({ direction: "column", justify: "flex-start", align: "flex-start" })}
    margin-bottom: 25rem;
  }
`;
