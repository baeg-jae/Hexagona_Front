import useGetUser from "components/Hooks/useGetUser";
import Loading from "pages/Status/Loading";
import DropDownMenu from "./DropDownMenu";
import styled from "@emotion/styled";
import flex from "./flex";

const Header = () => {
  const { data, isLoading } = useGetUser();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <StWrap>
      <StWrapFlex>
        <HeaderWrap>
          <div className="LeftDiv">
            <StProfileImgDiv pic={data?.profile_img} />
            <div className="textDiv">
              <span>갓생러 {data?.nickname}</span>
            </div>
          </div>
          <DropDownMenu
            text="사진 변경"
            text2="닉네임 변경"
            margin="40"
            click="nickname"
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
    margin-left: 15px;
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

const StProfileImgDiv = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-image: url(${(props) => props.pic});
  background-size: cover;
  background-position: center;
`;
