import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { handleMainTutorial } from "components/Common/ButtonPropsHandler";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "pages/Status/styles.css";

const MainTutorial = ({ set }) => {
  const onTutorialMain = () => {
    set((value) => !value);
  };
  return (
    <StWrap>
      <div className="modal_div">
        <StButton left onClick={onTutorialMain}>
          SKIP
        </StButton>
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
          <SwiperSlide className="slider">
            <StImgDiv pic="one" />
            <span>텍스트</span>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <StImgDiv pic="two" />
            <span>텍스트</span>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <StImgDiv pic="three" />
            <span>텍스트</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </StWrap>
  );
};

export default MainTutorial;

const StWrap = styled.div`
  ${flex({ direction: "column" })}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  .modal_div {
    ${flex({
      direction: "column",
      align: "flex-end",
      justify: "space-between",
    })}
    width: 350px;
    height: 400px;
    background: var(--white);
    border-radius: 15px;
    border: 1px solid #cecece;
  }
  .modal_content {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    margin-top: 16px;
  }
  .slider {
    ${flex({ direction: "column" })}
    width: 90%;
    height: 300px;
  }
`;
const StImgDiv = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => handleMainTutorial(props.pic)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StButton = styled.button`
  width: 80px;
  height: 42px;
  margin: 10px 10px 0 0;
  span {
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;
  }
`;
