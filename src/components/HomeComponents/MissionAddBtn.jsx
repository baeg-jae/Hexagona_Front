import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";

const MissionAddBtn = () => {
  return (
    <>
      <AddBtn>
        <span>+</span>
      </AddBtn>
    </>
  );
};

export default MissionAddBtn;

const AddBtn = styled.div`
  ${flex({})}
  position: fixed;
  width: 60px;
  height: 60px;
  left: 283px;
  top: 692px;
  font-size: 1.5rem;
  font-weight: 300;
  background: #212121;
  box-shadow: 8px 7px 17px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  span {
    color: #fff;
  }
`;
