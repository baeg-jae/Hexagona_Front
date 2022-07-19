import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { StWrap } from "./styles";
import useGetPost from "components/Hooks/useGetPost";
import SkeletonFeed from "components/Skeletons/SkeletonFeed";
import LeftFeed from "./LeftFeed";
import RightFeed from "./RightFeed";
import Search from "./Search";

const FeedContainer = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { data, isFetching } = useGetPost({ size: 9, page: 0 });
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
