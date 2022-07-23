import HeaderProfile from "components/MainPage/HeaderProfile";
import DropDownMenu from "./DropDownMenu";
import styled from "@emotion/styled";
import flex from "./flex";

const Header = ({ data }) => {
  const profile_img = data?.profile_img;
  return (
    <StWrap className="main">
      <StWrapFlex>
        <HeaderWrap>
          <div className="LeftDiv">
            <HeaderProfile profile_img={profile_img} />
            <div className="textDiv">
              <span>갓생러 {data?.nickname}</span>
            </div>
          </div>
          <DropDownMenu
            text="프로필사진 변경"
            text2="닉네임 변경"
            margin="40"
            click2="nickname"
            click="image"
          />
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
