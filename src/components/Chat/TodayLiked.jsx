import GetTodayLikes from "components/Hooks/Like/useTodayLikes";
import styled from "@emotion/styled";
import useCreateChatRoom from "components/Hooks/ChatList/useCreateChatRoom";
import Swal from "sweetalert2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../GoalShot/styles.css";
import "swiper/css/autoplay";

const TodayLiked = ({ userData }) => {
  const todayLikes = GetTodayLikes();
  const { mutate } = useCreateChatRoom();

  const onClickHandler = (opponentId) => {
    //  유저정보가 없을경우
    if (userData === undefined) return;
    // 나와의 채팅 불가
    if (userData.userId === opponentId) {
      alert("나와는 대화할수 없습니다.");
    }
    // 채팅이 진행되면 확인버튼을 올려준다
    else {
      Swal.fire({
        title: "채팅을 하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#43e63e",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          //  확인버튼이 눌리면 채팅방 생성 진행
          mutate({
            senderId: userData.userId,
            receiverId: opponentId,
          });
        }
      });
    }
  };

  return (
    <Swiper
      slidesPerView={3}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 1000 }}
      className="mySwiper"
    >
      {todayLikes !== undefined ? (
        todayLikes?.map((v, i) => {
          return (
            <SwiperSlide key={i} onClick={() => onClickHandler(v.userId)}>
              <StTodayLIked img={v.photoUrl} />
            </SwiperSlide>
          );
        })
      ) : (
        <>
          <SwiperSlide>
            <StSkeleton />
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
};

export default TodayLiked;

const StTodayLIked = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

const StSkeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: var(--skeleton);
`;
