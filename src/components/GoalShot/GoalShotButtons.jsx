import { useEffect } from "react";
import { CARD_BUTTON_TIME } from "shared/data";
import AddDislikeButton from "./AddDislikeButton";
import AddLikeButton from "./AddLikeButton";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import flex from "components/Common/flex";

const GoalShotButtons = ({
  count,
  setCount,
  data,
  chooseOne,
  chooseTwo,
  isChooseOne,
  isChooseTwo,
}) => {
  const navigate = useNavigate();
  const disableHandler = useCallback(() => {
    if (chooseOne || chooseTwo) return true;
    return false;
  }, [chooseOne, chooseTwo]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (chooseOne) {
        isChooseOne(false);
        setCount((value) => value + 1);
      } else if (chooseTwo) {
        isChooseTwo(false);
        setCount((value) => value + 1);
      }
    }, CARD_BUTTON_TIME);
    return () => {
      clearTimeout(interval);
    };
  }, [chooseOne, chooseTwo, setCount, isChooseOne, isChooseTwo]);

  const onClickBtnHandler = useCallback(() => {
    navigate("/feed");
  }, [navigate]);

  return (
    <FlexRowDiv>
      {data?.length === count ? (
        <StButtonDiv>
          <Btn onClick={onClickBtnHandler}>
            <span>다른 이들의 미션 인증샷 보러가기</span>
          </Btn>
        </StButtonDiv>
      ) : (
        <>
          <AddDislikeButton
            data={data}
            count={count}
            isChooseOne={isChooseOne}
            chooseOne={chooseOne}
            disableHandler={disableHandler}
          />
          <AddLikeButton
            data={data}
            count={count}
            isChooseTwo={isChooseTwo}
            chooseTwo={chooseTwo}
            disableHandler={disableHandler}
          />
        </>
      )}
    </FlexRowDiv>
  );
};

export default GoalShotButtons;

const StButtonDiv = styled.div`
  position: absolute;
  bottom: 88px;

  @media screen and (max-height: 770px) {
    bottom: 11%;
  }
  @media screen and (max-height: 670px) {
    bottom: 12%;
  }
`;

const FlexRowDiv = styled.div`
  ${flex({ gap: "16px" })}
  margin-top: 47px;
  @media screen and (max-height: 770px) {
    margin-top: 0 !important;
  }
  @media screen and (max-height: 820px) {
    margin-top: 0 !important;
  }
`;

const Btn = styled.button`
  width: 343px;
  height: 64px;
  background: #ffffff;
  border-radius: 10px;
  span {
    color: #192126;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
`;
