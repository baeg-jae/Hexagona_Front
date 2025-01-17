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
            text3="로그아웃"
            margin="40"
            click="image"
            click2="nickname"
          />
        </HeaderWrap>
      </StWrapFlex>
    </StWrap>
  );
};

export default Header;

const StWrap = styled.div`
  ${flex({})}
`;

const StWrapFlex = styled.div`
  ${flex({ align: "flex-start" })}
  width: 342px;
  margin-top: 62px;
  @media screen and (max-height: 700px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 350px) {
    width: 250px;
  }
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
