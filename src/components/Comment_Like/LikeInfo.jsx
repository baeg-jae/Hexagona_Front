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
      return <span style={{ opacity: "0" }}>근영님바보</span>;
    } else {
      return data?.map((v, i) => {
        return <StImg img={v.profile_img} key={i} />;
      });
    }
  }, [data]);

  return (
    <>
      {isFetching ? (
        <span style={{ opacity: "0" }}>근영님바보</span>
      ) : (
        <StWrap>
          {picAmountHandler()}
          <span>
            {data?.length - LIKE_MAX_SHOW < 1
              ? ""
              : `+${data?.length - LIKE_MAX_SHOW}`}
          </span>
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
`;

const StImg = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;
