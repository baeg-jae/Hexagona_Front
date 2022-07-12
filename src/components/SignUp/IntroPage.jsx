import React, { useCallback } from "react";
import { StWrap } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import Button from "components/Common/Button";
import { useNavigate } from "react-router-dom";
import useGetUser from "components/Hooks/useGetUser";
import styled from "@emotion/styled";
import Loading from "pages/Status/Loading";

const IntroPage = () => {
  // 유저정보 받아오기
  const { data, isLoading } = useGetUser();
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate("/tutorial");
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
            목표를 이루는 여정을 갓생메이커와 함께해요!
          </span>
          <span className="subTitle">먼저, 목표를 정하러 가볼까요?</span>
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
  font-size: 34px;
  line-height: 130%;
  .OrangeText {
    color: #956c4a;
  }
  .subTitle {
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
  }
  & > Button {
    margin-top: 54px;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
`;
