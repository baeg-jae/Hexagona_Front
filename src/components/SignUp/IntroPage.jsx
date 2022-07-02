import React from "react";
import IntroPageComponents from "./IntroPageComponents";
import { first, second, third, fourth, fifth, sixth } from "./IntroPageTexts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./swiperStyle.css";

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
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {lists}
      </Swiper>
    </>
  );
};

export default IntroPage;
