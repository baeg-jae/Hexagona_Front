import React from "react";
import styled from "@emotion/styled";
import flex from "./flex";
import useGetUser from "components/Hooks/useGetUser";

import Dog from "assets/img/Dog.png";
import SmallMenu from "assets/img/smallMenu.png";

const Header = () => {
  const { data, isLoading } = useGetUser();
  return (
    <StWrap>
      <StWrapFlex>
        <HeaderWrap>
          <div className="LeftDiv">
            <div className="ProfilePic" />
            <div className="textDiv">
              <span>갓생러 {data?.nickname}</span>
            </div>
          </div>
          <StImg src={SmallMenu} alt="" />
        </HeaderWrap>
      </StWrapFlex>
    </StWrap>
  );
};

export default Header;

const StWrap = styled.div`
  ${flex({})}
  width: 100%;
`;

const StWrapFlex = styled.div`
  ${flex({ align: "flex-start" })}
  width: 342px;
  height: 56px;
  margin-top: 62px;
`;

const HeaderWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 100%;
  height: 100%;

  .LeftDiv {
    ${flex({})}
    margin-left: 15px;
  }
  .ProfilePic {
    width: 56px;
    height: 56px;
    border-radius: 100px;
    background-image: url(${Dog});
    background-size: cover;
    background-position: center;
  }
  .textDiv {
    ${flex({ direction: "column", align: "flex-start" })}
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
    margin-left: 12px;
    color: #4f514a;
  }
`;

const StImg = styled.img`
  width: 3px;
  height: 12px;
`;
