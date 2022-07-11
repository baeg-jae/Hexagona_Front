import { StWrap } from "components/Common/GlobalStyles";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import flex from "components/Common/flex";

import NavigatorBar from "components/Common/NavigatorBar";
import useGetPostDetail from "components/Hooks/useGetPostDetail";
import CommentInput from "components/CommentComponents/CommentInput";
import CommentImg from "components/CommentComponents/CommentImg";
import Loading from "pages/Status/Loading";

const FeedDetail = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostDetail({ postId: postId });
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
          <CommentInput />
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
