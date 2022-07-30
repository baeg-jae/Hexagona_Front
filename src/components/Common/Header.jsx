import HeaderProfile from "components/MainPage/HeaderProfile";
import DropDownMenu from "./DropDownMenu";
import styled from "@emotion/styled";
import flex from "./flex";

const Header = ({ data }) => {
  const profile_img = data?.profile_img;
  return (
    <StWrap>
      <StWrapFlex>
        <HeaderWrap>
          <div className="LeftDiv">
            <HeaderProfile profile_img={profile_img} />
            <div className="textDiv">
              <span>갓생러 {data?.nickname}</span>
            </div>
          </div>
          <DropDownMenu
            text={!data?.picChange ? "프로필 등록" : "프로필 변경"}
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
  .LeftDiv {
    ${flex({})}
  }
  .textDiv {
    ${flex({ direction: "column", align: "flex-start" })}
    font-weight: 700;
    font-family: Pretendard_Bold;
    font-size: 14px;
    margin-left: 12px;
    color: var(--gray-7);
  }
`;
