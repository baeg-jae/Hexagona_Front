import React, { useState } from "react";
import styled from "@emotion/styled";
import { StWrap, FlexColumnDiv } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import Button from "components/Common/Button";

const Modal = () => {
  const [category, setCategory] = useState("");
  const arr = ["운동하기", "생활습관", "학습", "취미생활"];
  const [flag, setFlag] = useState(false);
  const [firstMission, setFirstMission] = useState("");
  const [secondMission, setSecondMission] = useState("");
  const [thirdMission, setThirdMission] = useState("");

  const onClickBtnHandler = (v) => {
    setCategory(v);
    setFlag((value) => !value);
  };

  const buttonList = arr.map((v, i) => {
    return (
      <StButton key={i} onClick={() => onClickBtnHandler(v)}>
        <span className="buttonSpan">{v}</span>
      </StButton>
    );
  });

  const onSubmitBtnHandler = () => {
    // 서버랑 통신이 필요
    // 목표 보내주기
  };

  const onDisableBtnHandler = () => {
    if (firstMission !== "" || secondMission !== "" || thirdMission !== "")
      return false;
    return true;
  };

  return (
    <StWrapFlex>
      <StModalWrap>
        {!flag ? (
          <>
            <span className="innerText">어떤 목표를 골라볼까요?</span>
            <FlexColumnDiv style={{ gap: "8px" }}>{buttonList}</FlexColumnDiv>
          </>
        ) : (
          <>
            <span className="innerText">{category} 목표 추가하기 ✨</span>
            <FlexColumnDiv style={{ gap: "8px" }}>
              <StInput
                placeholder="목표를 입력해주세요."
                onChange={(e) => setFirstMission(e.target.value)}
              />
              <StInput
                placeholder="목표를 입력해주세요."
                onChange={(e) => setSecondMission(e.target.value)}
              />
              <StInput
                placeholder="목표를 입력해주세요."
                onChange={(e) => setThirdMission(e.target.value)}
              />
              <div style={{ margin: "37px 0 0 24px" }}>
                <Button
                  text="입력완료"
                  theme="dark"
                  disabled={onDisableBtnHandler()}
                  click={onSubmitBtnHandler}
                />
              </div>
            </FlexColumnDiv>
          </>
        )}
      </StModalWrap>
    </StWrapFlex>
  );
};

export default Modal;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-end" })}
  background-color:  rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StModalWrap = styled.div`
  ${flex({ direction: "column", align: "flex-start", justify: "flex-start" })}
  width: 375px;
  height: 394px;
  background-color: var(--white);
  border-radius: 20px 20px 0px 0px;

  .innerText {
    margin: 24px 0 24px 24px;

    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
`;

const StButton = styled.button`
  ${flex({ justify: "flex-start" })}
  width: 327px;
  height: 61px;
  background: #f4f4f4;
  margin-left: 24px;
  border-radius: 8px;
  &:active {
    background-color: var(--black);
    color: #fff;
  }

  .buttonSpan {
    margin-left: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
`;

const StInput = styled.input`
  ${flex({ justify: "flex-start" })}
  margin-left: 24px;
  width: 327px;
  height: 61px;
  border: 1px solid #b7b7b7;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  padding: 20px;

  &:focus {
    outline: none;
    border: 1px solid #212121;
  }
`;
