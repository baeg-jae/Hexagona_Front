import { ButtonClicked, FlexRowDiv } from "components/Common/GlobalStyles";
import { useState } from "react";
import useAddLike from "components/Hooks/Like/useAddLike";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import heart from "assets/img/heart.png";
import x from "assets/img/x.png";
import { useEffect } from "react";

const GoalShotButtons = ({
  count,
  setCount,
  data,
  chooseOne,
  chooseTwo,
  isChooseOne,
  isChooseTwo,
}) => {
  const { mutate } = useAddLike();

  const disableHandler = () => {
    if (chooseOne || chooseTwo) return true;
    return false;
  };

  const addLike = () => {
    mutate({
      postId: data[count]?.postId,
    });
  };

  const onDisLike = () => {
    if (count > -1) {
      isChooseOne(true);
    } else {
      return;
    }
  };

  const onLike = () => {
    if (count < data?.length - 1) {
      isChooseTwo(true);
      addLike();
    } else {
      return;
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (chooseOne) {
        isChooseOne(false);
        setCount((value) => value - 1);
      } else if (chooseTwo) {
        isChooseTwo(false);
        setCount((value) => value + 1);
      }
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [chooseOne, chooseTwo, setCount, isChooseOne, isChooseTwo]);

  return (
    <FlexRowDiv style={{ gap: "16px" }}>
      <StButton
        onClick={onDisLike}
        flag={chooseOne}
        disabled={disableHandler()}
      >
        <StImageDiv />
      </StButton>
      <StButton
        onClick={onLike}
        red
        flag={chooseTwo}
        disabled={disableHandler()}
      >
        <StImageDiv heart />
      </StButton>
    </FlexRowDiv>
  );
};

export default GoalShotButtons;

const StButton = styled.button`
  ${flex({})}
  width: 95.38px;
  height: 95.38px;
  margin-top: 63px;
  background: ${(props) =>
    props.red ? `linear-gradient(180deg, #FF0000 0%, #FF6B00 100%)` : `#fff`};
  border: 1px solid #f5f0f0;
  box-shadow: 6px 11px 17px rgba(0, 0, 0, 0.13);
  border-radius: 48.0529px;
  animation: ${(props) => props.flag && ButtonClicked()} 1s ease;
  &:disabled {
    background-color: inherit;
  }
`;

const StImageDiv = styled.div`
  width: 35px;
  height: 35px;
  background-image: ${(props) => (props.heart ? `url(${heart})` : `url(${x})`)};
  background-position: center;
  background-size: cover;
`;
