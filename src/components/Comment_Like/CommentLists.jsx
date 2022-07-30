import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { FlexColumnDiv } from "components/Common/GlobalStyles";
import useGetComment from "components/Hooks/Comment/useGetComment";
import DropDownMenu from "components/Common/DropDownMenu";
import LikeInfo from "./LikeInfo";
import UserInfo from "components/Feed/UserInfo";

const CommentLists = ({ postId }) => {
  const { data, isFetching } = useGetComment({ postId: postId });
  const userInfo = UserInfo();

  return (
    <>
      {isFetching ? (
        ""
      ) : (
        <StWrap>
          <LikeInfo postId={postId} />
          {data?.length === 0 ? (
            <FlexColumnDiv style={{ height: "100%" }}>
              <span className="emptySpan">아직 댓글이 없습니다</span>
              <span className="emptySpan">첫 댓글을 등록해보세요!</span>
            </FlexColumnDiv>
          ) : (
            data?.map((v, i) => {
              return (
                <StReplyWrap key={i}>
                  <StProfile img={v.profile_img} />
                  <div className="reply">
                    <div>
                      <div className="replyUser">
                        {v.nickname}
                        {v.userId !== userInfo?.userId ? (
                          <></>
                        ) : (
                          <DropDownMenu
                            postId={postId}
                            commentId={v.commentId}
                            text="댓글 삭제"
                            margin="40"
                            click="commentD"
                          />
                        )}
                      </div>
                      <div className="replyDay">{v.createdAtDateOnly}</div>
                    </div>
                    <div>{v.comment}</div>
                  </div>
                </StReplyWrap>
              );
            })
          )}
        </StWrap>
      )}
    </>
  );
};

export default CommentLists;

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 140px;
  .emptySpan {
    line-height: 130%;
    color: var(--gray-5);
  }
`;

const StReplyWrap = styled.div`
  ${flex({ justify: "flex-start", direction: "row", align: "flex-start" })}
  width: calc(100% - 32px);
  margin-top: 15px;
  line-height: 130%;
  border-bottom: 1px solid var(--gray-1);
  .reply {
    width: calc(100% - 50px);
    .replyUser {
      ${flex({ justify: "space-between" })}
      font-weight: 700;
      font-family: Pretendard_Bold;
    }
    .replyDay {
      font-size: 12px;
      color: var(--gray-5);
    }
  }
`;

const StProfile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
  margin-right: 8px;
`;
