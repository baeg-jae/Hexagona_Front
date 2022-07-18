import {
  CenterCardAnim,
  RightCardAnim,
  RightRightCardAnim,
} from "components/Common/GlobalStyles";
import { GOALSHOT_RANDOM_CARD, CARD_ANIMATION_TIME } from "shared/data";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const GoalShotCards = ({ data, count, chooseOne, chooseTwo }) => {
  const cardTrigger = () => {
    if (chooseOne || chooseTwo) return true;
  };
  return (
    <StCardContainer>
      {data !== undefined ? (
        data?.length < GOALSHOT_RANDOM_CARD ? (
          <StLastCard flag={cardTrigger()}>
            <span className="innerText">평가 하기에</span>
            <span className="innerText">게시글이 부족합니다.</span>
          </StLastCard>
        ) : (
          <>
            <StLeftCard />

            {/* 좌측카드 */}
            <StLeftCard
              img={data[count - 1]?.photoUrl}
              differ
              flag={cardTrigger()}
            >
              <div className="gradient">
                <span className="category">{data[count]?.category}</span>
                <span className="postContent">{data[count]?.postContent}</span>
              </div>
            </StLeftCard>

            {/* 중간카드 */}
            {count === GOALSHOT_RANDOM_CARD ? (
              <StLastCard flag={cardTrigger()}>
                <span className="innerText">주어진 카드에 대해서</span>
                <span className="innerText">모두 평가를 완료했습니다!</span>
              </StLastCard>
            ) : (
              <StCard img={data[count]?.photoUrl} flag={cardTrigger()}>
                <div className="gradient">
                  <span className="category">{data[count]?.category}</span>
                  <span className="postContent">
                    {data[count]?.postContent}
                  </span>
                </div>
              </StCard>
            )}

            {/* 우측카드 */}
            {count === GOALSHOT_RANDOM_CARD - 1 ? (
              <StLastCard flag={cardTrigger()} differ>
                <span className="innerText">주어진 카드에 대해서</span>
                <span className="innerText">모두 평가를 완료했습니다!</span>
              </StLastCard>
            ) : (
              <StRightCard
                img={data[count + 1]?.photoUrl}
                differ
                flag={cardTrigger()}
              >
                <div className="gradient">
                  <span className="category"></span>
                  <span className="postContent"></span>
                </div>
              </StRightCard>
            )}

            {/* 최우측카드 */}
            {count === GOALSHOT_RANDOM_CARD - 2 ? (
              <StLastLastCard flag={cardTrigger()} differ>
                <span className="innerText">주어진 카드에 대해서</span>
                <span className="innerText">모두 평가를 완료했습니다!</span>
              </StLastLastCard>
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
  width: 100%;
  height: 537px;
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
  filter: drop-shadow(0px 43px 40px rgba(0, 0, 0, 0.2));
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
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 21px;
  }
  .category {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .gradient {
    ${flex({ direction: "column", justify: "flex-end", align: "flex-start" })}
    width: 100%;
    height: 50%;
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      rgba(30, 5, 5, 0) -2.31%,
      var(--gradient)
    );
  }
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
  ${flex({ direction: "column" })}
  min-width: 285px;
  height: 480px;
  border-radius: 20px;
  border: 1px solid black;
  filter: drop-shadow(0px 43px 40px rgba(0, 0, 0, 0.2));
  opacity: ${(props) => (props.differ ? "0.6" : "1")};
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
  animation: ${(props) => props.flag && RightCardAnim()} ${CARD_ANIMATION_TIME}s
    ease;
  .innerText {
    color: #956c4a;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;

const StLastLastCard = styled(StLastCard)`
  animation: ${(props) => props.flag && RightRightCardAnim()}
    ${CARD_ANIMATION_TIME}s ease;
`;
