import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { StWidth, FlexRowDiv } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import EmptyMission from "assets/img/noMission.png";
import useCategory from "components/Hooks/useCategory";
import useAddMission from "components/Hooks/useAddMission";
import useGetMission from "components/Hooks/useGetMission";
import Loading from "pages/Status/Loading";
import { useParams } from "react-router-dom";

const HomeCategory = () => {
  const [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const { category } = useParams();
  const categoryCheck = useCategory();
  const { mutate } = useAddMission();
  const { data, isLoading } = useGetMission();

  const list = data
    ?.map((v, i) => {
      return category === v.category && v;
    })
    .filter((v) => {
      return v !== false;
    });

  console.log(list);

  const onToggleModal = useCallback(() => {
    setFlag((value) => !value);
  }, []);

  const onAddMissionHandler = useCallback(() => {
    mutate({
      missionContent: content,
      category: category,
    });
    setFlag((value) => !value);
  }, [category, mutate, content]);

  const onCancelBtnHandler = useCallback(() => {
    setFlag((value) => !value);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StWrap>
      <StContainer>
        <div className="category">
          <span>{categoryCheck}</span>
        </div>
        <div className="missions">
          {list[0] !== undefined ? (
            <div className="mission">
              <StImg />
              <span className="innerText">{list[0]?.missionContent}</span>
            </div>
          ) : (
            <div className="mission" onClick={onToggleModal}>
              <StImg />
              <span className="innerText">목표를 생성해주세요.</span>
            </div>
          )}
          {list[1] !== undefined ? (
            <div className="mission">
              <StImg />
              <span className="innerText">{list[1]?.missionContent}</span>
            </div>
          ) : (
            <div className="mission" onClick={onToggleModal}>
              <StImg />
              <span className="innerText">목표를 생성해주세요.</span>
            </div>
          )}
          {list[2] !== undefined ? (
            <div className="mission">
              <StImg />
              <span className="innerText">{list[2]?.missionContent}</span>
            </div>
          ) : (
            <div className="mission" onClick={onToggleModal}>
              <StImg />
              <span className="innerText">목표를 생성해주세요.</span>
            </div>
          )}
          {list[3] !== undefined ? (
            <div className="mission">
              <StImg />
              <span className="innerText">{list[3]?.missionContent}</span>
            </div>
          ) : (
            <div className="mission" onClick={onToggleModal}>
              <StImg />
              <span className="innerText">목표를 생성해주세요.</span>
            </div>
          )}
        </div>
      </StContainer>
      {flag && (
        <>
          <StModal>
            <div className="StInnerContainer">
              <div className="InfoContainer">
                <span className="missionTitle">목표 생성하기</span>
                <input
                  className="missionInput"
                  type="text"
                  placeholder="ex) 매일 런닝 30분"
                  onChange={(e) => setContent(e.target.value)}
                />
                <FlexRowDiv>
                  <StButton onClick={onCancelBtnHandler}>취소</StButton>
                  <StButton color="brown" onClick={() => onAddMissionHandler()}>
                    등록하기
                  </StButton>
                </FlexRowDiv>
              </div>
            </div>
          </StModal>
        </>
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

    &:first-of-type {
      margin-left: 9px;
    }
    span {
      margin-right: 19px;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      color: #202020;
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
