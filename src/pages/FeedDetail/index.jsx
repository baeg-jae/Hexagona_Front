import { StWrap } from "components/Common/GlobalStyles";
import { useParams } from "react-router-dom";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPostDetail from "components/Hooks/Detail/useGetPostDetail";
import CommentInput from "components/Comment_Like/CommentInput";
import CommentImg from "components/Comment_Like/CommentImg";
import CommentLists from "components/Comment_Like/CommentLists";
import loadable from "@loadable/component";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const Loading = loadable(() => import("pages/Status/Loading"));

const FeedDetail = () => {
  const { postId } = useParams();
  const { data, isFetching } = useGetPostDetail({
    postId: postId,
  });
  console.log(data);

  return (
    <StWrapFlex>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <StWrapComment>
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
            <CommentLists postId={postId} userId={data?.userId} />
            <CommentInput postId={data?.postId} />
          </StWrapComment>
        </>
      )}

      <NavigatorBar />
    </StWrapFlex>
  );
};

export default FeedDetail;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  position: relative;
`;
const StWrapComment = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 160px;
`;
