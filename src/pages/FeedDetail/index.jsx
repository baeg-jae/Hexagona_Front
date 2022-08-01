import { StWrap } from "components/Common/GlobalStyles";
import { useParams } from "react-router-dom";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPostDetail from "components/Hooks/Detail/useGetPostDetail";
import CommentInput from "components/Comment_Like/CommentInput";
import CommentImg from "components/Comment_Like/CommentImg";
import CommentLists from "components/Comment_Like/CommentLists";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import WebTitle from "components/Common/WebTitle";
import Loading from "pages/Status/Loading";

const FeedDetail = () => {
  const { postId } = useParams();
  const { data, isFetching } = useGetPostDetail({
    postId: postId,
  });

  return (
    <StWrapFlex>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <StWrapComment>
            <WebTitle text="피드: 갓생메이커" />
            hi
            <CommentImg
              category={data?.category}
              postContent={data?.postContent}
              img={data?.photoUrl}
              profile={data?.profile_img}
              name={data?.nickname}
              postId={postId}
              nickname={data?.nickname}
              userId={data?.userId}
            />
            <CommentLists postId={postId} />
          </StWrapComment>
        </>
      )}
      <CommentInput postId={data?.postId} />
      <NavigatorBar />
    </StWrapFlex>
  );
};

export default FeedDetail;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  position: relative;
  max-height: 1000px;
`;
const StWrapComment = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 160px;
`;
