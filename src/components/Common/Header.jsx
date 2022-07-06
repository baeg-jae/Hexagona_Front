import React from "react";
import styled from "@emotion/styled";
import flex from "./flex";

import Dog from "assets/img/Dog.png";
import SmallMenu from "assets/img/smallMenu.png";

const Header = () => {
  return (
    <StWrapFlex>
      <HeaderWrap>
        <div className="LeftDiv">
          <div className="ProfilePic" />
          <div className="textDiv">
            <span className="secondaryText">갓생 입문자</span>
            <span>김갓생</span>
          </div>
        </div>
        <StImg src={SmallMenu} alt="" />
      </HeaderWrap>
    </StWrapFlex>
  );
};

export default Header;

const StWrapFlex = styled.div`
  ${flex({ align: "flex-start" })}
  width: 310px;
  height: 80px;
  margin-top: 60px;
`;

const HeaderWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 100%;
  height: 100%;

  .LeftDiv {
    ${flex({})}
    margin-left: 33px;
  }
  .ProfilePic {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background-image: url(${Dog});
    background-size: cover;
    background-position: center;
  }
  .textDiv {
    ${flex({ direction: "column", align: "flex-start" })}
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    margin-left: 7.5px;
    color: #212121;
    .secondaryText {
      font-weight: 400;
      font-size: 13px;
      line-height: 130%;
      color: #888888;
    }
  }
`;

const StImg = styled.img`
  width: 3px;
  height: 12px;
`;
