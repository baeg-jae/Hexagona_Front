import { COMMENT_MAX_LENGTH } from "shared/data";
import { badWordsComment } from "shared/TextsData";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";
import useAddComment from "components/Hooks/Comment/useAddComment";
import AlertComponent from "components/Common/AlertComponent";
import useGetUser from "components/Hooks/User/useGetUser";
import styled from "@emotion/styled";
import flex from "../Common/flex";

const CommentInput = ({ postId }) => {
  const { data, isFetching } = useGetUser();
  const [comment, setComment] = useState("");
  const { mutate } = useAddComment();
  const inputRef = useRef(null);
  const addComment = useCallback(() => {
    if (comment !== "") {
      mutate({
        comment: comment,
        postId: postId,
      });
    } else {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 댓글을 입력해주세요",
      });
    }
    inputRef.current.value = "";
  }, [comment, mutate, postId]);

  const bogusCheck = useCallback(() => {
    const foundSwears = badWordsComment.filter((word) =>
      comment.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 댓글을 입력해주세요",
      });
    } else {
      addComment();
    }
  }, [comment, addComment]);

  return (
    <StWrapFlex>
      {isFetching ? (
        <></>
      ) : (
        <>
          <StProfile profile_img={data?.profile_img} />
          <StDiv>
            <input
              type="text"
              className="commentInput"
              placeholder="인증샷에 대한 감상평을 남겨주세요."
              onChange={(e) => setComment(e.target.value)}
              maxLength={COMMENT_MAX_LENGTH}
              ref={inputRef}
            />
            <button className="commentButton" onClick={bogusCheck}>
              게시
            </button>
          </StDiv>
        </>
      )}
    </StWrapFlex>
  );
};

export default CommentInput;

const StWrapFlex = styled.div`
  ${flex({})}
  position: fixed;
  top: calc(100% - 150px);
  width: 100%;
  height: 92px;
  background-color: var(--white);
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.profile_img});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;

const StDiv = styled.div`
  ${flex({ justify: "space-around" })}
  width: 274px;
  height: 48px;
  margin-left: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  .commentInput {
    border: none;
    background-color: transparent;
    white-space: normal;
    text-align: justify;
    margin-left: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 13px;
    }
  }
  .commentButton {
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4876ef;
    margin-right: 20px;
  }
`;
