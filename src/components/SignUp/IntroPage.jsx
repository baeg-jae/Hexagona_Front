import { useCallback } from "react";
import { StWrap } from "components/Common/GlobalStyles";
import { useNavigate } from "react-router-dom";
import flex from "components/Common/flex";
import Button from "components/Common/Button";
import useGetUser from "components/Hooks/User/useGetUser";
import loadable from "@loadable/component";
import styled from "@emotion/styled";

const Loading = loadable(() => import("pages/Status/Loading"));

const IntroPage = () => {
  // 유저정보 받아오기
  const { data, isLoading } = useGetUser();
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StWrapFlex>
          <div style={{ marginTop: "125px" }}>
            <span className="OrangeText">{data?.nickname}</span>
            <span> 갓생러!</span>
          </div>
          <span style={{ marginBottom: "16px" }}>반갑습니다!</span>
          <span className="subTitle">
            갓생메이커 함께 갓생살기 시작해볼까요?
          </span>
          <span className="subTitle">먼저, 목표를 정해보세요!</span>
          <Button theme="dark" text="목표 정하러 가기" click={onClickHandler} />
        </StWrapFlex>
      )}
    </>
  );
};

export default IntroPage;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  font-weight: 700;
  font-family: Pretendard-Bold;
  font-size: 34px;
  line-height: 130%;
  .OrangeText {
    color: #956c4a;
  }
  .subTitle {
    font-weight: 400;
    color: var(--gray-6);
    font-family: Pretendard;
    font-size: 15px;
    line-height: 140%;
  }
  & > Button {
    margin-top: 54px;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;
