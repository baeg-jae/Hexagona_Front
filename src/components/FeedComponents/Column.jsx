import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { FlexRowDiv } from "components/Common/GlobalStyles";
import Dog from "assets/img/Dog.png";

const Column = ({ scrollRef }) => {
  // 전체 게시글 정보를 여기서 get 한다음에 아래 div에 채워준다
  const onClickHandler = useCallback(() => {
    // onclick event
  }, []);
  return (
    <StWrap>
      <StRowFirst>
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <EmptyDiv />
      </StRowFirst>
      <StRowSecond>
        <EmptyDiv />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <div className="imgDiv" />
        <EmptyDiv />
      </StRowSecond>
    </StWrap>
  );
};

export default Column;

const StWrap = styled(FlexRowDiv)`
  width: 100%;
  overflow-y: scroll;
  white-space: nowrap;
`;

const StRowFirst = styled.div`
  display: grid;
  grid-template-columns: 158px;
  gap: 9px;
  margin-right: 4.5;
  .imgDiv {
    height: 213.91px;
    background-image: url(${Dog});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    margin-right: 4.5px;
  }
`;

const StRowSecond = styled.div`
  display: grid;
  grid-template-columns: 158px;
  gap: 9px;
  margin-right: 4.5;
  .imgDiv {
    height: 213.91px;
    background-image: url(${Dog});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    margin-left: 4.5px;
  }
`;
const EmptyDiv = styled.div`
  width: 158px;
  height: 50px;
`;
