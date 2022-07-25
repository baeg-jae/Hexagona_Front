import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Button from "components/Common/Button";
import { useNavigate } from "react-router-dom";
import { handleSplashTutorial } from "components/Common/ButtonPropsHandler";
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
          <span className="smallSpan">만들고싶은 갓생루틴을 정해보세요.</span>
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
          <span className="bigSpan">말로하는 갓생은 그만!</span>
          <span className="bigSpan">사진으로 인증을 남겨요.</span>
        </div>
        <div className="smallSpanDiv">
          <span className="smallSpan">
            갓생루틴을 완료하려면 인증이 필요해요.
          </span>
          <span className="smallSpan">
            내가 오늘 하루 이룬 ‘갓생루틴'이 무엇인지
          </span>
          <span className="smallSpan">사진으로 공유해요.</span>
        </div>
        <div className="imgDiv">
          <StImgDiv pic="two" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="slider">
        <div className="bigSpanDiv">
          <span className="bigSpan">내 갓생루틴을</span>
          <span className="bigSpan">공유해요</span>
        </div>
        <div className="smallSpanDiv">
          <span className="smallSpan">나만 알기 아까운</span>
          <span className="smallSpan">나의 갓생 루틴을 공유하고</span>
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
            좋아요가 된다면 채팅까지도 할 수 있답니다.
          </span>
        </div>
        <div className="imgDiv">
          <StImgDiv pic="four" />
          <Button click={onClickToLogin} text="갓생 시작하기" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SplashDataSwiper;

const StImgDiv = styled.div`
  ${flex({ direction: "column" })}
  width: 339px;
  height: 339px;
  background-image: url(${(props) => handleSplashTutorial(props.pic)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;