import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { StWidth, FlexRowDiv } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import EmptyMission from "assets/img/noMission.png";

const HomeCategory = () => {
  const [flag, setFlag] = useState(false);
  const onAddMissionHandler = useCallback((id) => {
    setFlag((value) => !value);
  }, []);

  const onCancelBtnHandler = useCallback(() => {
    setFlag((value) => !value);
  }, []);

  return (
    <StWrap>
      <StContainer>
        <div className="category">
          <span>전체</span>
          <span>수행중</span>
          <span>수행완료</span>
        </div>
        <div className="missions">
          <div className="mission" onClick={() => onAddMissionHandler(1)}>
            <StImg />
            <span class="innerText">목표를 생성해주세요.</span>
          </div>
          <div className="mission" onClick={() => onAddMissionHandler(2)}>
            <StImg />
            <span class="innerText">목표를 생성해주세요.</span>
          </div>
          <div className="mission" onClick={() => onAddMissionHandler(3)}>
            <StImg />
            <span class="innerText">목표를 생성해주세요.</span>
          </div>
          <div className="mission" onClick={() => onAddMissionHandler(4)}>
            <StImg />
            <span class="innerText">목표를 생성해주세요.</span>
          </div>
        </div>
      </StContainer>
      {flag && (
        <StModal>
          <div className="StInnerContainer">
            <div className="InfoContainer">
              <span className="missionTitle">목표 생성하기</span>
              <input
                className="missionInput"
                type="text"
                placeholder="ex) 매일 런닝 30분"
              />
              <FlexRowDiv>
                <StButton onClick={onCancelBtnHandler}>취소</StButton>
                <StButton color="brown">등록하기</StButton>
              </FlexRowDiv>
            </div>
          </div>
        </StModal>
      )}
    </StWrap>
  );
};

export default HomeCategory;

const StWrap = styled(StWidth)`
  ${flex({ direction: "column" })}
`;

const StContainer = styled.div`
  ${flex({
    direction: "column",
    justify: "space-between",
    align: "flex-start",
  })}
  width: 345px;
  height: 497px;
  margin-top: 40px;
  .category {
    ${flex({ justify: "flex-start" })}
    width: 201px;
    height: 27px;
    &:first-child {
      margin-left: 9px;
    }
    span {
      margin-right: 19px;
      font-weight: 700;
      font-size: 13px;
      line-height: 130%;
      color: #b7b7b7;
    }
  }
  .missions {
    width: 345px;
    height: 444px;
    .mission {
      position: relative;
      width: 345px;
      height: 105px;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      margin-bottom: 8px;
      .innerText {
        position: absolute;
        right: 24px;
        bottom: 24px;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: -0.02em;
        color: #727272;
      }
    }
  }
`;

const StModal = styled.div`
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
        width: 272px;
        height: 61px;
        background: #f7f7f7;
        border-radius: 8px;
        border: none;
        margin-bottom: 24px;
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

const StImg = styled.div`
  margin-top: 24.25px;
  margin-left: 31.5px;
  overflow: hidden;
  width: 105px;
  height: 76px;
  background-image: url(${EmptyMission});
  background-size: contain;
  background-position: center;
`;
