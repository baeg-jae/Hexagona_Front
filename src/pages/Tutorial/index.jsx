import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useNewUserCheck from "components/Hooks/useNewUserCheck";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Tutorial = () => {
  const skipHandler = useNewUserCheck();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {arr.map((_, i) => {
        return (
          <SwiperSlide key={i}>
            <button onClick={skipHandler}>튜토리얼 스킵</button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Tutorial;
