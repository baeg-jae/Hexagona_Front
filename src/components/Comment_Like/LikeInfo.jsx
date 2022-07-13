import { useCallback } from "react";
import useGetAllLIkes from "components/Hooks/Like/useGetAllLIkes";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

const LikeInfo = ({ postId }) => {
  const { data, isFetching } = useGetAllLIkes({ postId: Number(postId) });

  const picAmountHandler = useCallback(() => {
    const arr = [1, 2, 3, 4, 5];
    if (data?.length < 5) {
      return arr.map((_, i) => {
        return (
          <>
            <StImg img={data[i]?.profile_img} key={i} />
          </>
        );
      });
    } else {
      return data?.map((v, i) => {
        return <StImg img={v.profile_img} key={i} />;
      });
    }
  }, [data]);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <StWrap>
          {picAmountHandler()}
          <span>{data?.length - 5 < 1 ? "" : data?.length - 5}</span>
        </StWrap>
      )}
    </>
  );
};

export default LikeInfo;

const StWrap = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 100%;
  margin-left: 50px;
`;

const StImg = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;
