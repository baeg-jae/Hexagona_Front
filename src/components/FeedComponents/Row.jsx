import React from "react";
import styled from "@emotion/styled";
import Dog from "assets/img/Dog.png";

const Row = ({ scrollRef }) => {
  return (
    <StRow ref={scrollRef}>
      <div />
      <div />
      <div />
      <div />
    </StRow>
  );
};

export default Row;
const StRow = styled.div`
  width: 100%;
  height: 211.75px;
  overflow-x: scroll;
  white-space: nowrap;
  div {
    display: inline-block;
    width: 126.57px;
    height: 200px;
    margin-right: 3.64px;
    border-radius: 8.59893px;
    background-image: url(${Dog});
    background-size: cover;
    background-position: center;
  }
  &:last-child {
    margin-bottom: 135px;
  }
`;
