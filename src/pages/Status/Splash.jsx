import { fadeAnimation } from "components/Common/GlobalStyles";
import { handleSplashTutorial } from "components/Common/ButtonPropsHandler";
import { SPLASH_FADE_ANIMATION } from "shared/data";
import { StWrap } from "components/Common/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSplash from "components/Hooks/useSplash";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

import { AUTO_PLAY_TIME } from "shared/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "pages/Status/styles.css";
import Button from "components/Common/Button";

const Splash = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  useSplash(setFlag);
  const onClickToLogin = () => {
    navigate("/home");
  };
  return (
    <StOutDiv>
      {!flag ? (
        <StWrapFlex>
          <span className="smallSpan">이번엔 꼭 내 인생을 갓생으로</span>
          <span className="bigSpan">갓생메이커</span>
        </StWrapFlex>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // autoplay={{ delay: AUTO_PLAY_TIME }}
          loop={true}
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
              <span className="smallSpan">
                만들고싶은 갓생루틴을 정해보세요.
              </span>
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
      )}
    </StOutDiv>
  );
};

export default Splash;

const StOutDiv = styled.div`
  .slider {
    ${flex({ direction: "column", justify: "flex-start", align: "flex-start" })}
    width: 90%;
    height: 90vh;
    color: #141414;
    line-height: 130%;
    .bigSpanDiv {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      margin: 84px 0 0 26px;
    }
    .smallSpanDiv {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      margin: 24px 0 0 26px;
    }
    .imgDiv {
      ${flex({
        direction: "column",
      })}
      width: 100%;
    }
    .smallSpan {
      font-size: 16px;
    }
    .bigSpan {
      font-weight: 700;
      font-size: 32px;
      margin-top: 20px;
    }
    button {
      margin-top: 10px;
    }
  }
`;

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

const StImgDiv = styled.div`
  ${flex({ direction: "column" })}
  width: 339px;
  height: 339px;
  background-image: url(${(props) => handleSplashTutorial(props.pic)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
