import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect } from "react";
import { StImgDiv } from "./styles";
import { useDebounce } from "components/Hooks/useDebounce";
import useGetPost from "components/Hooks/useGetPost";
import Search from "./Search";
import styled from "@emotion/styled";
import MyPageFeed from "./MyPageFeed";
import SkeletonFeed from "components/Skeletons/SkeletonFeed";

const FeedContainer = () => {
  const navigate = useNavigate();
  const text = "";
  const [debounceInput, setDebounceInput] = useDebounce(text, 300);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useGetPost();
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/feed/${postId}`);
    },
    [navigate]
  );
  useEffect(() => {
    // 무한스크롤 마지막페이지에선느 안부르기
    if (
      data?.pages[data?.pages[0].data.pageTotalSize - 1]?.currentPage ===
        data?.pages[0].data.pageTotalSize + 1 ||
      data?.pages[data?.pages[0].data.pageTotalSize - 1]?.currentPage ===
        undefined
    ) {
      if (inView) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage, inView, data?.pages]);

  return (
    <>
      <Search
        setKeyword={setDebounceInput}
        text="유저이름 or 키워드를 입력해주세요."
      />
      <StScrollWrapper>
        <Grid>
          <MyPageFeed />
          {data?.pages?.map((page) => {
            return page?.data?.postResponseDtoList
              .filter((v) => {
                console.log();
                if (debounceInput === "") {
                  return v;
                } else if (
                  v.postContent
                    .toLowerCase()
                    .includes(debounceInput.toLowerCase()) ||
                  v.nickname.toLowerCase().includes(debounceInput.toLowerCase())
                ) {
                  return v;
                }
                return v;
              })
              .map((v, i) => {
                return (
                  (v.postContent
                    .toLowerCase()
                    .includes(debounceInput.toLowerCase()) ||
                    v.nickname
                      .toLowerCase()
                      .includes(debounceInput.toLowerCase())) && (
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
  max-height: 900px;
  overflow-y: scroll;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 80px 8px 0 8px;
`;
