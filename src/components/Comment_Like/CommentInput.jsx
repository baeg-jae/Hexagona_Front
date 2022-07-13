import { COMMENT_MAX_LENGTH } from "shared/data";
import { useState } from "react";
import { useRef } from "react";
import useGetUser from "components/Hooks/User/useGetUser";
import loadable from "@loadable/component";
import styled from "@emotion/styled";
import flex from "../Common/flex";
import useAddComment from "components/Hooks/Comment/useAddComment";
import { useCallback } from "react";

const Loading = loadable(() => import("pages/Status/Loading"));

const CommentInput = ({ postId }) => {
  const { data, isFetching } = useGetUser();
  const [comment, setComment] = useState("");
  const { mutate } = useAddComment();
  const inputRef = useRef(null);

  const addComment = useCallback(() => {
    mutate({
      comment: comment,
      postId: postId,
    });
    inputRef.current.value = "";
  }, [comment, mutate, postId]);

  return (
    <StWrapFlex>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <StProfile profile_img={data?.profile_img} />
          <StDiv>
            <textarea
              type="text"
              className="commentInput"
              placeholder="인증샷에 대한 감상평을 남겨주세요."
              onChange={(e) => setComment(e.target.value)}
              maxLength={COMMENT_MAX_LENGTH}
              ref={inputRef}
            />
            <button className="commentButton" onClick={addComment}>
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
    width: 60%;
    padding: 8px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      padding: 8px;
      font-size: 10px;
    }
  }
  .commentButton {
    background-color: transparent;
    letter-spacing: -0.538462px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4876ef;
  }
`;
