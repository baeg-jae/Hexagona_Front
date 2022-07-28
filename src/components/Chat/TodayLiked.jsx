import GetTodayLikes from "components/Hooks/Like/useTodayLikes";
import styled from "@emotion/styled";
import useCreateChatRoom from "components/Hooks/ChatList/useCreateChatRoom";
import Swal from "sweetalert2";
import flex from "components/Common/flex";
import { HiCursorClick } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../GoalShot/styles.css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import { ChatJoinModal } from "redux/modules/modal";

const TodayLiked = ({ userData }) => {
  const todayLikes = GetTodayLikes();
  const { mutate } = useCreateChatRoom();
  const dispatch = useDispatch();
  const onClickHandler = (opponentId) => {
    //  유저정보가 없을경우
    if (userData === undefined) return;
    // 나와의 채팅 불가
    if (userData.userId === opponentId) {
      alert("나와는 대화할수 없습니다.");
    }
    // 채팅이 진행되면 확인버튼을 올려준다
    else {
      dispatch(ChatJoinModal(true));
      mutate({
        senderId: userData.userId,
        receiverId: opponentId,
      });
    }
  };

  const navigate = useNavigate();
  const onMoveToGoalShot = () => {
    navigate("/goalshot");
  };

  return (
    <>
      {todayLikes?.length === 0 ? (
        <StEmptyLiked onClick={onMoveToGoalShot}>
          <span>좋아요를 누른 분들하고만</span>
          <span>채팅이 가능해요!</span>
          <span className="confirm">
            좋아요를 누르러 가볼까요?
            <HiCursorClick className="clickIcon" />
          </span>
        </StEmptyLiked>
      ) : (
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
              <SwiperSlide>
                <StSkeleton />
              </SwiperSlide>
              <SwiperSlide>
                <StSkeleton />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      )}
    </>
  );
};

export default TodayLiked;

const StDupModel = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const StTodayLIked = styled(StDupModel)`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

const StSkeleton = styled(StDupModel)`
  background: var(--skeleton);
`;

const StEmptyLiked = styled(StDupModel)`
  ${flex({ direction: "column" })}
  width: 100%;
  height: 150px;
  margin-top: 35px;
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #956c4a;
  }
  .confirm {
    margin-top: 10px;
    font-size: 18px;
    color: #292e41;
  }
  .clickIcon {
  }
`;
