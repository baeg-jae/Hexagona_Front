import { useCallback } from "react";
import useGetAllLIkes from "components/Hooks/Like/useGetAllLIkes";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import loadable from "@loadable/component";
import { LIKE_MAX_SHOW } from "shared/data";

const Loading = loadable(() => import("pages/Status/Loading"));

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
    } else {
      return data?.map((v, i) => {
        return <StImg img={v.profile_img} key={i} />;
      });
    }
  }, [data]);

  return (
    <>
      {isFetching ? (
        ""
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
