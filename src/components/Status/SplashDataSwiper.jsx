import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Button from "components/Common/Button";
import { useNavigate } from "react-router-dom";
import { handleSplashTutorial } from "components/Common/ButtonPropsHandler";
import PwaButton from "components/Common/PwaButton";
//Swiper
import { AUTO_PLAY_TIME } from "shared/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "pages/Status/styles.css";

const SplashDataSwiper = () => {
  const navigate = useNavigate();
  const onClickToLogin = () => {
    navigate("/home");
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{ delay: AUTO_PLAY_TIME }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="slider">
        <div className="bigSpanDiv">
          <span className="bigSpan">내 인생을</span>
          <span className="bigSpan">갓생으로</span>
        </div>
        <div className="smallSpanDiv">
          <span className="smallSpan">달성하고 싶은 목표를 정해보세요</span>
          <span className="smallSpan">
            4가지의 갓생 카테고리를 준비했답니다.
          </span>
        </div>
        <div className="imgDiv">
          <StImgDiv pic="one" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="slider">
        <div className="bigSpanDiv">
          <span className="bigSpan">말로 하는 갓생은 그만!</span>
          <span className="bigSpan">목표를 달성하고 </span>
          <span className="bigSpan">사진으로 인증해요.</span>
        </div>
        <div className="smallSpanDiv">
          <span className="smallSpan">목표를 완료하려면 인증이 필요해요.</span>
          <span className="smallSpan">내가 오늘 하루 이룬 목표가 무엇인지</span>
          <span className="smallSpan">사진으로 공유해요.</span>
        </div>
        <div className="imgDiv">
          <StImgDiv pic="two" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="slider">
        <div className="bigSpanDiv">
          <span className="bigSpan">내 목표를</span>
          <span className="bigSpan">공유해요</span>
        </div>
        <div className="smallSpanDiv">
          <span className="smallSpan">나만 알기 아까운</span>
          <span className="smallSpan">나의 목표를 공유하고</span>
          <span className="smallSpan">사람들과 소통해보세요.</span>
        </div>
        <div className="imgDiv">
          <StImgDiv pic="three" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="slider">
        <div className="bigSpanDiv">
          <span className="bigSpan">다른 이들의</span>
          <span className="bigSpan">갓생을</span>
          <span className="bigSpan">응원해줄수도 있어요!</span>
        </div>
        <div className="smallSpanDiv">
          <span className="smallSpan">
            다른 이들의 갓생 사진을 보고 좋아요를 눌러보세요!
          </span>
          <span className="smallSpan">
            좋아요를 누른 분들과 채팅으로 이야기를 나눠보세요.
          </span>
        </div>
        <StFourthContainer className="imgDiv">
          <StImgDiv pic="four" />

          <Button click={onClickToLogin} text="갓생 시작하기" />
          <PwaButton />
        </StFourthContainer>
      </SwiperSlide>
    </Swiper>
  );
};

export default SplashDataSwiper;

const StImgDiv = styled.div`
  width: 339px;
  height: 339px;
  background-image: url(${(props) => handleSplashTutorial(props.pic)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StFourthContainer = styled.div`
  ${flex({ direction: "column" })}
  width: 339px;
  height: 600px;
`;
