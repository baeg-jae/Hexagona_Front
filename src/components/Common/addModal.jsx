import React, { useCallback } from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { FlexRowDiv } from "./GlobalStyles";
import useAddMission from "components/Hooks/useAddMission";
import { badWords } from "components/SignUp/IntroPageTexts";

const AddModal = ({ setContent, content, category, setFlag }) => {
  const { mutate } = useAddMission();

  const onAddMissionHandler = useCallback(() => {
    mutate({
      missionContent: content,
      category: category,
    });
    setFlag((value) => !value);
  }, [category, mutate, content, setFlag]);

  const onCancelBtnHandler = useCallback(() => {
    setFlag((value) => !value);
  }, [setFlag]);

  //욕설탐지기
  const bogusCheck = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      content.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      alert("미션을 제대로 적어주세요.");
    } else {
      // 욕설탐지기에 안걸리면 실행
      onAddMissionHandler();
    }
  }, [content, onAddMissionHandler]);
  return (
    <StModal>
      <div className="StInnerContainer">
        <div className="InfoContainer">
          <span className="missionTitle">목표 생성하기</span>
          <input
            className="missionInput"
            type="text"
            placeholder="ex) 매일 런닝 30분"
            onChange={(e) => setContent(e.target.value)}
            maxLength={12}
          />
          <FlexRowDiv>
            <StButton onClick={onCancelBtnHandler}>취소</StButton>
            <StButton color="brown" onClick={() => bogusCheck()}>
              등록하기
            </StButton>
          </FlexRowDiv>
        </div>
      </div>
    </StModal>
  );
};

export default AddModal;

const StModal = styled.button`
  ${flex({})}
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  .StInnerContainer {
    ${flex({})}
    width: 320px;
    height: 251px;
    background: #ffffff;
    border-radius: 8px;
    .InfoContainer {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      width: 272px;
      height: 179px;
      .missionTitle {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #292e41;
        margin-bottom: 24px;
      }
      .missionInput {
        width: 242px;
        height: 61px;
        background: #f7f7f7;
        border-radius: 8px;
        border: none;
        margin-bottom: 24px;
        padding: 16px;
        &::placeholder {
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
          color: #b5b5b5;
        }
      }
    }
  }
`;

const StButton = styled.button`
  width: 131.94px;
  height: 48px;
  border-radius: 8px;
  margin: 0 4.06px 0 4.06px;
  border: 1px solid ${(props) => (props.color === "brown" ? "none" : "#CACDD3")};
  background-color: ${(props) =>
    props.color === "brown" ? "#956C4A" : "var(--white)"};
  color: ${(props) => (props.color === "brown" ? "#fff" : "#4C525C")};
`;
