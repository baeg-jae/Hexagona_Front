import { FlexRowDiv } from "components/Common/GlobalStyles";
import { StWrap } from "components/Common/GlobalStyles";
import { useState } from "react";
import NavigatorBar from "components/Common/NavigatorBar";
import useAddLike from "components/Hooks/Like/useAddLike";
import useGetPost from "components/Hooks/useGetPost";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import heart from "assets/img/heart.png";
import x from "assets/img/x.png";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data } = useGetPost();
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
    <>
      <StWrapFlex>
        <StCardContainer>
          {data !== undefined ? (
            <>
              <StCard img={data[count - 1]?.photoUrl} differ />
              <StCard img={data[count]?.photoUrl} />
              <StCard img={data[count + 1]?.photoUrl} differ />
            </>
          ) : (
            <></>
          )}
        </StCardContainer>
        <FlexRowDiv style={{ gap: "16px" }}>
          <StButton onClick={onDisLike}>
            <StImageDiv />
          </StButton>
          <StButton onClick={onLike} red>
            <StImageDiv heart />
          </StButton>
        </FlexRowDiv>
      </StWrapFlex>
      <NavigatorBar />
    </>
  );
};

export default GoalShot;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  overflow: hidden;
  width: 100%;
`;

const StCardContainer = styled.div`
  ${flex({ gap: "10px" })}
  width: 100%;
`;

const StCard = styled.div`
  min-width: 285px;
  height: 480px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0px 43px 40px rgba(0, 0, 0, 0.2));
  border-radius: 20px;
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
`;

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
