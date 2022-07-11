import flex from "components/Common/flex";
import styled from "@emotion/styled";

const CommentLists = ({ comment }) => {
  return (
    <StWrap>
      {comment?.map((v, i) => {
        return (
          <StReplyWrap>
            <StProfile img={v.profile_img} />
            <div className="reply">
              <div>
                <div className="replyUser">{v.nickname}</div>
                <div className="replyDay">{v.createdAtDateOnly}</div>
              </div>
              <div className="replyText">{v.comment}</div>
            </div>
          </StReplyWrap>
        );
      })}
    </StWrap>
  );
};

export default CommentLists;

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 140px;
  margin-top: 35px;
  overflow-y: scroll;
`;

const StReplyWrap = styled.div`
  ${flex({ justify: "flex-start", direction: "row", align: "flex-start" })}
  margin: 10px;
  white-space: nowrap;
  .reply {
    width: 280px;
    .replyUser {
      font-weight: 700;
      font-size: 14px;
      line-height: 130%;
    }
    .replyDay {
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      color: #b4b4b4;
    }
  }
  .relyText {
    font-weight: 400;
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
