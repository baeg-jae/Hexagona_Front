import {
  CenterCardAnim,
  CenterCardAnimRes,
  FlexRowDiv,
  RightCardAnim,
  RightCardAnimRes,
  RightRightCardAnim,
} from "components/Common/GlobalStyles";
import { CARD_ANIMATION_TIME } from "shared/data";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Smile from "assets/img/smile.webp";
import Sad from "assets/img/sad.webp";
import TodayLiked from "components/Chat/TodayLiked";
import { useCallback } from "react";
import useCategory from "components/Hooks/useCategory";
import GoalShotButtons from "./GoalShotButtons";

const GoalShotCards = ({
  data,
  count,
  chooseOne,
  chooseTwo,
  setCount,
  isChooseOne,
  isChooseTwo,
}) => {
  const cardTrigger = useCallback(() => {
    if (chooseOne || chooseTwo) return true;
  }, [chooseOne, chooseTwo]);
  const getCategory = useCategory({ category: data[count]?.category });
  const getCategoryRight = useCategory({ category: data[count + 1]?.category });

  return (
    <StContainer>
      <StCardContainer>
        {/* 좌측카드 */}
        <StLeftCard img={data[count - 1]?.photoUrl} differ flag={cardTrigger()}>
          <div className="gradient">
            <span className="category">{getCategory}</span>
            <span className="postContent">{data[count - 1]?.postContent}</span>
          </div>
        </StLeftCard>
        {/* 중간카드 */}
        <StCard img={data[count]?.photoUrl} flag={cardTrigger()}>
          <StGradient top>
            <HeaderDiv>
              <FlexRowDiv>
                <StProfile img={data[count]?.profile_img} />
                <StTextDiv>
                  <span className="titleText">갓생 입문자</span>
                  <span>{data[count]?.nickname}</span>
                </StTextDiv>
              </FlexRowDiv>
            </HeaderDiv>
          </StGradient>
          <StGradient>
            <BottomWarp>
              <BottomDiv>
                <span className="category">{getCategory}</span>
                <span className="postContent">{data[count]?.postContent}</span>
              </BottomDiv>
            </BottomWarp>
          </StGradient>
        </StCard>
        {/* 우측카드 */}
        <StRightCard
          img={data[count + 1]?.photoUrl}
          differ
          flag={cardTrigger()}
        >
          <div>
            <span className="category">{getCategoryRight}</span>
            <span className="postContent">{data[count + 1]?.postContent}</span>
          </div>
        </StRightCard>
      </StCardContainer>

      <GoalShotButtons
        count={count}
        setCount={setCount}
        data={data}
        chooseOne={chooseOne}
        chooseTwo={chooseTwo}
        isChooseOne={isChooseOne}
        isChooseTwo={isChooseTwo}
      />
    </StContainer>
  );
};

export default GoalShotCards;

const StContainer = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  height: calc(100% - 68px);
  background-color: #192126;
  @media screen and (max-width: 1024px) {
    overflow: hidden;
  }
`;

const StCardContainer = styled.div`
  ${flex({
    gap: "10px",
    align: "flex-start",
  })}/* @media screen and (max-width: 1024px) {
    overflow: hidden;
  } */
`;

const StCard = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-end",
    align: "flex-start",
  })}
  min-width: 312px;
  height: 447.13px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 23px;
  margin-top: ${(props) => (props.differ ? "150px" : "98px")};
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
  @media screen and (max-width: 350px) {
    min-width: 230px;
    animation: ${(props) => props.flag && CenterCardAnimRes()}
      ${CARD_ANIMATION_TIME}s ease;
  }
  @media screen and (max-height: 820px) {
    height: 400px;
  }
  @media screen and (max-height: 700px) {
    height: 350px;
    margin-top: ${(props) => (props.differ ? "120px" : "68px")};
  }
`;

const StRightCard = styled(StCard)`
  animation: ${(props) => props.flag && RightCardAnim()} ${CARD_ANIMATION_TIME}s
    ease;
  @media screen and (max-width: 350px) {
    animation: ${(props) => props.flag && RightCardAnimRes()}
      ${CARD_ANIMATION_TIME}s ease;
  }
`;

const StLeftCard = styled(StCard)`
  animation: ${(props) => props.flag && RightCardAnim()} ${CARD_ANIMATION_TIME}s
    ease;
  @media screen and (max-width: 350px) {
    animation: ${(props) => props.flag && RightCardAnimRes()}
      ${CARD_ANIMATION_TIME}s ease;
  }
`;

const StGradient = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  justify-content: ${(props) => (props.top ? "flex-start" : "flex-end")};
  width: 100%;
  height: 50%;
  border-radius: 16px;
  background: linear-gradient(
    ${(props) =>
      props.top
        ? "var(--black), rgba(0, 0, 0, 0) 40%"
        : "356.37deg, var(--black) -2.75%, rgba(104, 104, 104, 0) 66.82%"}
  );
`;

const HeaderDiv = styled.div`
  ${flex({ justify: "space-between", align: "flex-start" })}
  margin: 20px 0 0 20px;
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`;

const StTextDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  line-height: 130%;
  color: var(--white);
  .titleText {
    font-size: 12px;
  }
`;

const BottomWarp = styled.div`
  ${flex({ direction: "row", justify: "space-between" })}
  width: 95%;
  .imgWrap {
    ${flex({ direction: "row" })}
  }
`;

const BottomDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  color: var(--white);
  font-weight: 600;
  .titleText {
    font-size: 16px;
  }
  .nameText {
    font-size: 24px;
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
