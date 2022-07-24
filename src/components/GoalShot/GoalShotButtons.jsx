import { FlexRowDiv } from "components/Common/GlobalStyles";
import { useEffect } from "react";
import { CARD_BUTTON_TIME } from "shared/data";
import AddDislikeButton from "./AddDislikeButton";
import AddLikeButton from "./AddLikeButton";
import { GOALSHOT_RANDOM_CARD } from "shared/data";
import Button from "components/Common/Button";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
  const disableHandler = () => {
    if (chooseOne || chooseTwo) return true;
    // if (data?.length < 11) return true;
    return false;
  };
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

  const onClickBtnHanlder = () => {
    navigate("/feed");
  };

  return (
    <FlexRowDiv style={{ gap: "16px" }}>
      {data?.length < GOALSHOT_RANDOM_CARD ? (
        <StButtonDiv>
          <Button
            theme="dark"
            text="다른 이들의 미션 인증샷 보러가기"
            click={onClickBtnHanlder}
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
  position: fixed;
  bottom: 10%;
`;
