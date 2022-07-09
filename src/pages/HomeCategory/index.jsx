import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { StWidth } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import EmptyMission from "assets/img/noMission.png";
import useCategory from "components/Hooks/useCategory";
import useGetMission from "components/Hooks/useGetMission";
import Loading from "pages/Status/Loading";
import { useParams } from "react-router-dom";
import AddModal from "components/Common/addModal";

const HomeCategory = () => {
  const [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const { category } = useParams();
  const categoryCheck = useCategory();
  const { data, isLoading } = useGetMission();

  const list = data
    ?.map((v, i) => {
      return category === v.category && v;
    })
    .filter((v) => {
      return v !== false;
    });

  const onToggleModal = useCallback(() => {
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
        <AddModal
          setContent={setContent}
          content={content}
          category={category}
          setFlag={setFlag}
        />
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
