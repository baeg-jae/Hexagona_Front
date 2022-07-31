import { useEffect } from "react";
import { CARD_BUTTON_TIME } from "shared/data";
import AddDislikeButton from "./AddDislikeButton";
import AddLikeButton from "./AddLikeButton";
import Button from "components/Common/Button";
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
          <Button
            theme="dark"
            text="다른 사람들의 목표 인증 보러 가기"
            click={onClickBtnHandler}
          />
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
  bottom: 10%;
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
    margin-top: 27px;
  }
`;
