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
              <span className="emptySpan">아직 쓰여진 댓글이 없습니다.</span>
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
                      <div className="replyDay">dd{v.createdAtDateOnly}</div>
                    </div>
                    <div className="replyText">{v.comment}</div>
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
    font-size: 14px;
    line-height: 130%;
    color: #a3a3a3;
  }
`;

const StReplyWrap = styled.div`
  ${flex({ justify: "flex-start", direction: "row", align: "flex-start" })}
  margin: 10px;
  width: calc(100% - 32px);
  margin-top: 30px;
  white-space: wrap;
  .reply {
    width: 280px;
    .replyUser {
      ${flex({ justify: "space-between" })}
      font-weight: 700;
      font-size: 14px;
      line-height: 130%;
    }
    .replyDay {
      font-size: 12px;
      line-height: 130%;
      color: #b4b4b4;
    }
  }
  .replyText {
    font-size: 14px;
    line-height: 24px;
    margin-top: 3px;
  }
`;

const StProfile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
  margin-right: 7px;
`;
