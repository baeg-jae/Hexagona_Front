import {
  CenterCardAnim,
  RightCardAnim,
  RightRightCardAnim,
} from "components/Common/GlobalStyles";
import { GOALSHOT_RANDOM_CARD, CARD_ANIMATION_TIME } from "shared/data";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Smile from "assets/img/smile.webp";
import Sad from "assets/img/sad.webp";
import TodayLiked from "components/Chat/TodayLiked";
import { useCallback } from "react";
import useCategory from "components/Hooks/useCategory";

const GoalShotCards = ({ data, count, chooseOne, chooseTwo }) => {
  const cardTrigger = useCallback(() => {
    if (chooseOne || chooseTwo) return true;
  }, [chooseOne, chooseTwo]);
  const getCategory = useCategory({ category: data[count]?.category });
  const getCategoryRight = useCategory({ category: data[count + 1]?.category });

  return (
    <StCardContainer>
      {data !== undefined ? (
        data?.length < GOALSHOT_RANDOM_CARD ? (
          <StLastCard flag={cardTrigger()}>
            <StEmoji sad mar />
            <div className="innerTextDiv">
              <span className="innerText">평가하기에</span>
              <span className="innerText">게시물이 부족합니다</span>
            </div>
            <span className="smallText">
              다른 이들의 게시물을 둘러보러갈까요?
            </span>
          </StLastCard>
        ) : (
          <>
            {/* 최좌측카드 */}
            <StLeftCard />

            {/* 좌측카드 */}
            <StLeftCard
              img={data[count - 1]?.photoUrl}
              differ
              flag={cardTrigger()}
            >
              <div className="gradient">
                <span className="category">{getCategory}</span>
                <span className="postContent">{data[count]?.postContent}</span>
              </div>
            </StLeftCard>

            {/* 중간카드 */}
            {count === GOALSHOT_RANDOM_CARD ? (
              <StLastCard flag={cardTrigger()} dashed bg center>
                <StEmoji smile />
                <div className="innerTextDiv">
                  <span className="innerText">오늘의 평가가</span>
                  <span className="innerText">끝이 났어요!</span>
                </div>
                <span className="smallText">
                  이런 인증샷들을 좋아요 누르셨네요!
                </span>
                <div className="likedPicsDiv">
                  <TodayLiked />
                </div>
              </StLastCard>
            ) : (
              <StCard img={data[count]?.photoUrl} flag={cardTrigger()}>
                <div className="gradient">
                  <span className="category">{getCategory}</span>
                  <span className="postContent">
                    {data[count]?.postContent}
                  </span>
                </div>
              </StCard>
            )}

            {/* 우측카드 */}
            {count === GOALSHOT_RANDOM_CARD - 1 ? (
              <StLastCard flag={cardTrigger()} dashed bg>
                <StEmoji smile />
                <div className="innerTextDiv">
                  <span className="innerText">오늘의 평가가</span>
                  <span className="innerText">끝이 났어요!</span>
                </div>
                <span className="smallText">
                  이런 인증샷들을 좋아요 누르셨네요!
                </span>
                <div className="likedPicsDiv">
                  <TodayLiked />
                </div>
              </StLastCard>
            ) : count === GOALSHOT_RANDOM_CARD ? (
              <StRightCard
                img={data[count + 1]?.photoUrl}
                differ
                flag={cardTrigger()}
              >
                <div>
                  <span className="category">{getCategoryRight}</span>
                  <span className="postContent">
                    {data[count + 1]?.postContent}
                  </span>
                </div>
              </StRightCard>
            ) : (
              <StRightCard
                img={data[count + 1]?.photoUrl}
                differ
                flag={cardTrigger()}
              >
                <div className="gradient">
                  <span className="category">{getCategoryRight}</span>
                  <span className="postContent">
                    {data[count + 1]?.postContent}
                  </span>
                </div>
              </StRightCard>
            )}

            {/* 최우측카드 */}
            {count === GOALSHOT_RANDOM_CARD - 2 ? (
              <StLastCard flag={cardTrigger()} dashed bg>
                <StEmoji smile />
                <div className="innerTextDiv">
                  <span className="innerText">오늘의 평가가</span>
                  <span className="innerText">끝이 났어요!</span>
                </div>
                <span className="smallText">
                  이런 인증샷들을 좋아요 누르셨네요!
                </span>
                <div className="likedPicsDiv">
                  <TodayLiked />
                </div>
              </StLastCard>
            ) : (
              <StRightRightCard
                img={data[count + 2]?.photoUrl}
                differ
                flag={cardTrigger()}
              />
            )}
          </>
        )
      ) : (
        <></>
      )}
    </StCardContainer>
  );
};

export default GoalShotCards;

const StCardContainer = styled.div`
  ${flex({ gap: "10px", align: "flex-start" })}
  height: 600px;
  @media screen and (max-width: 1024px) {
    overflow: hidden;
  }
`;

const StCard = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-end",
    align: "flex-start",
  })}
  min-width: 285px;
  height: 480px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
  opacity: ${(props) => (props.differ ? "0.6" : "1")};
  animation: ${(props) => props.flag && CenterCardAnim()}
    ${CARD_ANIMATION_TIME}s ease;
  span {
    margin-left: 20px;
  }
  .postContent {
    font-weight: 600;
    font-size: 24px;
    color: var(--white);
    margin-bottom: 21px;
  }
  .category {
    color: var(--white);
    margin-bottom: 5px;
  }
  .gradient {
    ${flex({ direction: "column", justify: "flex-end", align: "flex-start" })}
    width: 100%;
    height: 50%;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(30, 5, 5, 0) -2%, var(--gradient));
  }
`;

const StEmoji = styled.div`
  width: 127px;
  height: 127px;
  background-image: url(${(props) => (props.smile ? `${Smile}` : `${Sad}`)});
  background-position: center;
  background-size: cover;
  margin-top: ${(props) => (props.mar ? "120px" : "15px")};
`;

const StRightCard = styled(StCard)`
  animation: ${(props) => props.flag && RightCardAnim()} ${CARD_ANIMATION_TIME}s
    ease;
`;

const StLeftCard = styled(StCard)`
  animation: ${(props) => props.flag && RightCardAnim()} ${CARD_ANIMATION_TIME}s
    ease;
`;

const StRightRightCard = styled(StCard)`
  animation: ${(props) => props.flag && RightRightCardAnim()}
    ${CARD_ANIMATION_TIME}s ease;
`;

const StLastCard = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  min-width: 285px;
  height: 480px;
  border-radius: 20px;
  opacity: ${(props) => (props.differ ? "0.6" : "1")};
  margin-top: ${(props) => (props.center ? "57px" : "107px")};
  animation: ${(props) => props.flag && RightCardAnim()} ${CARD_ANIMATION_TIME}s
    ease;
  border: 1px ${(props) => (props.dashed ? "dashed" : "none")} #cccccc;
  background: ${(props) =>
    props.bg ? "linear-gradient(0deg, #f9f9f9, #f9f9f9)" : "none"};
  .innerTextDiv {
    ${flex({ direction: "column" })}
    margin-top: 28px;
  }
  .innerText {
    color: var(--black);
    font-weight: 600;
    font-size: 24px;
  }
  .smallText {
    font-size: 14px;
    color: var(--gray-7);
    margin-top: 20px;
  }
  .likedPicsDiv {
    width: 100%;
  }
`;
