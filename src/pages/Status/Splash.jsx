import { fadeAnimation } from "components/Common/GlobalStyles";
import { SPLASH_FADE_ANIMATION } from "shared/data";
import { StWrap } from "components/Common/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSplash from "components/Hooks/useSplash";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Splash = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  useSplash(setFlag);
  const onClickToLogin = () => {
    navigate("/home");
  };
  return (
    <>
      {!flag ? (
        <StWrapFlex>
          <span className="smallSpan">이번엔 꼭 내 인생을 갓생으로</span>
          <span className="bigSpan">갓생메이커</span>
        </StWrapFlex>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>
            <button onClick={onClickToLogin}>확인하기</button>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default Splash;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  animation: ${fadeAnimation} ${SPLASH_FADE_ANIMATION}s ease;
  color: var(--brown);
  .bigSpan {
    font-weight: 700;
    font-size: 64px;
    line-height: 130%;
    margin-bottom: 6px;
  }
  .smallSpan {
    font-size: 20px;
    line-height: 130%;
    color: var(--gray);
  }
`;
