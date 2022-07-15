import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import SkeletonFeed from "./SkeletonFeed";
import styled from "@emotion/styled";
import LeftFeed from "./LeftFeed";
import RightFeed from "./RightFeed";
import Search from "./Search";

const FeedContainer = ({ data, isFetching }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );

  return (
    <>
      <Search setKeyword={setKeyword} />
      {isFetching ? (
        <SkeletonFeed data={data} />
      ) : (
        <StWrap>
          <LeftFeed
            data={data}
            keyword={keyword}
            onClickHandler={onClickHandler}
          />
          <RightFeed
            data={data}
            keyword={keyword}
            onClickHandler={onClickHandler}
          />
        </StWrap>
      )}
    </>
  );
};

export default FeedContainer;

const StWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: scroll;
`;
