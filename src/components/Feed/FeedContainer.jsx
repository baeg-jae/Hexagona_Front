import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useCallback, useState, useEffect } from "react";
import { StImgDiv } from "./styles";
import useGetPost from "components/Hooks/useGetPost";
import Search from "./Search";
import styled from "@emotion/styled";
import MyPageFeed from "./MyPageFeed";
import SkeletonFeed from "components/Skeletons/SkeletonFeed";

const FeedContainer = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useGetPost();

  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/feed/${postId}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      <Search setKeyword={setKeyword} text="키워드를 입력해주세요." />
      <StScrollWrapper>
        <Grid>
          <MyPageFeed />
          {data?.pages?.map((page) => {
            return page?.data
              .filter((v) => {
                if (keyword === "") {
                  return v;
                } else if (
                  v.postContent.toLowerCase().includes(keyword.toLowerCase())
                ) {
                  return v;
                }
                return v;
              })
              .map((v, i) => {
                return (
                  v.postContent
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) && (
                    <StImgDiv
                      className="imgDiv"
                      onClick={() => onClickHandler(v?.postId)}
                      coverImg={v?.photoUrl}
                      style={{ marginRight: "4.5px" }}
                      key={i}
                    />
                  )
                );
              });
          })}

          {/* 무한스크롤 스켈레톤 */}
          {isFetchingNextPage === true && <SkeletonFeed />}
        </Grid>
        <div ref={ref} />
      </StScrollWrapper>
    </>
  );
};

export default FeedContainer;

const StScrollWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: scroll;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 16px 0 16px;
`;
