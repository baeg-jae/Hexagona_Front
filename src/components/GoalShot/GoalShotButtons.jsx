import { FlexRowDiv } from "components/Common/GlobalStyles";
import useAddLike from "components/Hooks/Like/useAddLike";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import heart from "assets/img/heart.png";
import x from "assets/img/x.png";

const GoalShotButtons = ({ count, setCount, data }) => {
  const { mutate } = useAddLike();

  const addLike = () => {
    mutate({
      postId: data[count]?.postId,
    });
  };

  const onLike = () => {
    if (count < data?.length - 1) {
      setCount((value) => value + 1);
      addLike();
    } else {
      return;
    }
  };
  const onDisLike = () => {
    if (count > -1) {
      setCount((value) => value - 1);
    } else {
      return;
    }
  };
  return (
    <FlexRowDiv style={{ gap: "16px" }}>
      <StButton onClick={onDisLike}>
        <StImageDiv />
      </StButton>
      <StButton onClick={onLike} red>
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
`;

const StImageDiv = styled.div`
  width: 35px;
  height: 35px;
  background-image: ${(props) => (props.heart ? `url(${heart})` : `url(${x})`)};
  background-position: center;
  background-size: cover;
`;
