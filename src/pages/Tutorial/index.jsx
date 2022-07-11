import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useQueryClient, useMutation } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const __newUserCheck = async () => {
  const data = await apis.newOldUser();

  return data;
};

const Tutorial = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigate = useNavigate();
  const onSkipHandler = () => {
    userSignUpMutation.mutate({});
  };
  const queryClient = useQueryClient();

  const userSignUpMutation = useMutation(__newUserCheck, {
    onSuccess: (data) => {
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("users");
      // 회원가입에 통과되면 화면전환
      Swal.fire({
        icon: "success",
        text: "스킵되었습니다",
        showConfirmButton: false,
        timer: 1500,
      });
      if (data) navigate("/home");
    },
  });
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {arr.map((_, i) => {
        return (
          <SwiperSlide key={i}>
            <button onClick={onSkipHandler}>스킵버튼</button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Tutorial;
