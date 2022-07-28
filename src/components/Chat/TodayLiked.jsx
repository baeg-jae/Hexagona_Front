import GetTodayLikes from "components/Hooks/Like/useTodayLikes";
import useCreateChatRoom from "components/Hooks/ChatList/useCreateChatRoom";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { ChatJoinModal } from "redux/modules/modal";
import { HiCursorClick } from "react-icons/hi";
import { useDispatch } from "react-redux";
import loadable from "@loadable/component";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../GoalShot/styles.css";
import "swiper/css/autoplay";
import { CARD_BUTTON_TIME } from "shared/data";
import { useCallback } from "react";
import { ChatJoinModalError } from "redux/modules/modal";

const Loading = loadable(() => import("pages/Status/Loading"));

const TodayLiked = ({ userData }) => {
  const todayLikes = GetTodayLikes();
  const { mutate } = useCreateChatRoom();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = useCallback(
    (opponentId) => {
      //  유저정보가 없을경우
      if (userData === undefined) return;
      // 나와의 채팅 불가
      if (userData.userId === opponentId) {
        dispatch(ChatJoinModalError(true));
      }
      // 채팅이 진행되면 확인버튼을 올려준다
      else {
        dispatch(ChatJoinModal(true));
        mutate({
          senderId: userData.userId,
          receiverId: opponentId,
        });
      }
    },
    [dispatch, mutate, userData]
  );

  const onMoveToGoalShot = useCallback(() => {
    navigate("/goalshot");
  }, [navigate]);

  return (
    <>
      {todayLikes?.length === 0 ? (
        <StEmptyLiked onClick={onMoveToGoalShot}>
          <span>좋아요를 표시한 분들과</span>
          <span>채팅이 가능합니다.</span>
          <span className="confirm">
            좋아요를 누르러 가볼까요?
            <HiCursorClick className="clickIcon" />
          </span>
        </StEmptyLiked>
      ) : (
        <Swiper
          slidesPerView={3}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: `${CARD_BUTTON_TIME}` }}
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
            <Loading />
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

const StEmptyLiked = styled(StDupModel)`
  ${flex({ direction: "column" })}
  height: 150px;
  margin-top: 35px;
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: var(--brown-3);
  }
  .confirm {
    margin-top: 10px;
    font-size: 18px;
    color: var(--black);
  }
`;
