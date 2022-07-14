import { StWrap } from "components/Common/GlobalStyles";
import NavigatorBar from "components/Common/NavigatorBar";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import useGetPost from "components/Hooks/useGetPost";
import { useState } from "react";
import useAddLike from "components/Hooks/Like/useAddLike";

const GoalShot = () => {
  const [count, setCount] = useState(1);
  const { data } = useGetPost();
  const { mutate } = useAddLike();
  console.log(data);

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
              <StCard img={data[count - 1]?.photoUrl} differ="40" />
              <StCard img={data[count]?.photoUrl} />
              <StCard img={data[count + 1]?.photoUrl} differ="40" />
            </>
          ) : (
            <></>
          )}
        </StCardContainer>
        <button onClick={onLike}>좋아요</button>
        <button onClick={onDisLike}>싫어요</button>
      </StWrapFlex>
      <NavigatorBar />
    </>
  );
};

export default GoalShot;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
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
  margin-top: ${(props) => props.differ}px;
`;
