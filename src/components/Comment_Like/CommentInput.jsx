import { COMMENT_MAX_LENGTH } from "shared/data";
import { badWordsComment } from "shared/TextsData";
import { useCallback, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { CommentAddError } from "redux/modules/modal";
import useAddComment from "components/Hooks/Comment/useAddComment";
import useGetUser from "components/Hooks/User/useGetUser";
import styled from "@emotion/styled";
import flex from "../Common/flex";
import { StInputDivGlobal } from "components/Common/GlobalStyles";

const CommentInput = ({ postId }) => {
  const { data } = useGetUser();
  const [comment, setComment] = useState("");
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const { mutate } = useAddComment();
  const dispatch = useDispatch();
  const addComment = useCallback(() => {
    if (comment !== "") {
      mutate({
        comment: comment,
        postId: postId,
      });
    } else {
      dispatch(CommentAddError(true));
    }
    inputRef.current.value = "";
  }, [comment, mutate, postId, dispatch]);

  const bogusCheck = useCallback(() => {
    const foundSwears = badWordsComment.filter((word) =>
      comment.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      dispatch(CommentAddError(true));
    } else {
      addComment();
    }
  }, [comment, addComment, dispatch]);

  return (
    <>
      <StWrapFlex>
        <StProfile profile_img={data?.profile_img} />
        <StInputDivGlobal>
          <input
            type="text"
            className="commentInput"
            placeholder="인증샷에 대한 감상평을 남겨주세요."
            onChange={(e) => setComment(e.target.value)}
            maxLength={COMMENT_MAX_LENGTH}
            ref={inputRef}
          />
          <button
            className="commentButton"
            onClick={bogusCheck}
            ref={buttonRef}
          >
            게시
          </button>
        </StInputDivGlobal>
      </StWrapFlex>
    </>
  );
};

export default CommentInput;

const StWrapFlex = styled.div`
  ${flex({})}
  position: absolute;
  width: calc(100% - 32px);
  height: 50px;
  bottom: 84px;
  background-color: var(--white);
  @media screen and (max-width: 300px) {
    width: 260px;
    .commentInput {
      width: 140px !important;
      &::placeholder {
        font-size: 1px !important;
      }
      font-size: 12px !important;
    }
    .commentButton {
      font-size: 8px !important;
    }
  }
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.profile_img});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;
