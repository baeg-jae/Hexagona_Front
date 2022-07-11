import { StWrap } from "components/Common/GlobalStyles";
import { useParams } from "react-router-dom";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPostDetail from "components/Hooks/useGetPostDetail";
import CommentInput from "components/CommentComponents/CommentInput";
import CommentImg from "components/CommentComponents/CommentImg";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

const FeedDetail = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostDetail({ postId: postId });
  console.log(data);
  return (
    <StWrapFlex>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CommentImg
            category={data?.category}
            postContent={data?.postContent}
            img={data?.photoUrl}
          />
          <CommentInput postId={data?.postId} />
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
