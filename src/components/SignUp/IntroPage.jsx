import React from "react";
import IntroPageComponents from "./IntroPageComponents";
import { first, second, third, fourth, fifth, sixth } from "./IntroPageTexts";
import { StWrap } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import Button from "components/Common/Button";
import { useNavigate } from "react-router-dom";
import useGetUser from "components/Hooks/useGetUser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./swiperStyle.css";
import styled from "@emotion/styled";

const IntroPage = () => {
  const lists = first.map((v, i) => {
    return (
      <SwiperSlide key={i}>
        <IntroPageComponents
          first={first[i]}
          second={second[i]}
          third={third[i]}
          fourth={fourth[i]}
          fifth={fifth[i]}
          sixth={sixth[i]}
          length={first.length}
          index={i}
        ></IntroPageComponents>
      </SwiperSlide>
    );
  });
  // 유저정보 받아오기
  const { data } = useGetUser();
  const navigate = useNavigate();
  const onClickHanlder = () => {
    navigate("/home");
  };
  return (
    <>
      {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {lists}
      </Swiper> */}
      <StWrapFlex>
        <div style={{ marginTop: "125px" }}>
          <span className="OrangeText">{data?.nickname}</span>
          <span>님</span>
        </div>
        <span style={{ marginBottom: "16px" }}>반갑습니다!</span>
        <span className="subTitle">
          목표를 이루는 여정을 갓생메이커와 함께해요!
        </span>
        <span className="subTitle">먼저, 목표를 정하러 가볼까요?</span>
        <Button
          theme="dark"
          text="갓생 목표 정하러 가기"
          click={onClickHanlder}
        />
      </StWrapFlex>
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
    color: #ff7a00;
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
