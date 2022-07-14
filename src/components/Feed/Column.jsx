import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import useGetPost from "components/Hooks/useGetPost";
import SkeletonFeed from "./SkeletonFeed";
import styled from "@emotion/styled";
import flex from "components/Common/flex";

const Column = () => {
  const { data, isFetching } = useGetPost();
  const navigate = useNavigate();
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );

  return (
    <>
      {isFetching ? (
        <SkeletonFeed data={data} />
      ) : (
        <StWrap>
          <StRowFirst>
            {data?.map((v, i) => {
              return i % 2 === 0 ? (
                i === 0 ? (
                  <StMyPage />
                ) : (
                  <StImgDiv
                    className="imgDiv"
                    onClick={() => onClickHandler(v?.postId)}
                    coverImg={v?.photoUrl}
                    style={{ marginRight: "4.5px" }}
                    key={i}
                  />
                )
              ) : (
                ""
              );
            })}
          </StRowFirst>
          <StRowSecond>
            {data?.map((v, i) => {
              return i % 2 === 1 ? (
                <StImgDiv
                  className="imgDiv"
                  onClick={() => onClickHandler(v?.postId)}
                  coverImg={v?.photoUrl}
                  style={{ marginLeft: "4.5px" }}
                  key={i}
                />
              ) : (
                ""
              );
            })}
          </StRowSecond>
        </StWrap>
      )}
    </>
  );
};

export default Column;

const StWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const StImgDiv = styled.div`
  width: 166px;
  height: 225px;
  background-image: url(${(props) => props.coverImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin-top: 10px;
`;

const StMyPage = styled.div`
  width: 166px;
  height: 225px;
  border-radius: 20px;
  background-color: tomato;
`;

const StRowFirst = styled.div`
  width: 166px;
  margin-top: 80px;
  margin-right: 5px;
`;

const StRowSecond = styled.div`
  width: 166px;
  margin-left: 5px;
`;
