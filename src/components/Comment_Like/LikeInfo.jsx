import { useCallback } from "react";
import useGetAllLIkes from "components/Hooks/Like/useGetAllLIkes";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { LIKE_MAX_SHOW } from "shared/data";

const LikeInfo = ({ postId }) => {
  const { data, isFetching } = useGetAllLIkes({ postId: Number(postId) });

  const picAmountHandler = useCallback(() => {
    const arr = [1, 2, 3, 4, 5];
    if (data?.length > LIKE_MAX_SHOW) {
      return arr.map((_, i) => {
        return (
          <div key={i}>
            <StImg img={data[i]?.profile_img} />
          </div>
        );
      });
    } else if (data?.length === 0) {
      return <StHidedText>근영님바보</StHidedText>;
    } else {
      return data?.map((v, i) => {
        return <StImg img={v.profile_img} key={i} />;
      });
    }
  }, [data]);

  return (
    <>
      {isFetching ? (
        <StWrap>
          <StHidedText>근영님바보</StHidedText>
        </StWrap>
      ) : (
        <StWrap>
          {picAmountHandler()}
          <StLikeSpan>
            {data?.length - LIKE_MAX_SHOW < 1
              ? ""
              : `님 외 ${data?.length - LIKE_MAX_SHOW}명이 좋아합니다.`}
          </StLikeSpan>
        </StWrap>
      )}
    </>
  );
};

export default LikeInfo;

const StWrap = styled.div`
  ${flex({ justify: "flex-start" })}
  width: calc(100% - 32px);
  margin-top: 9px;
  margin-left: 8px;
  margin-bottom: 16px;
`;

const StImg = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;

const StHidedText = styled.div`
  width: 20px;
  height: 20px;
  opacity: 0;
`;

const StLikeSpan = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #212121;
`;
