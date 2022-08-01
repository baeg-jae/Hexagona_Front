import { useState, useCallback, useEffect } from "react";
import { FlexRowDiv } from "components/Common/GlobalStyles";
import styled from "@emotion/styled";
import flex from "../Common/flex";
import likeImg from "assets/img/like.webp";
import unlikeImg from "assets/img/unlike.webp";
import useCategory from "components/Hooks/useCategory";
import useAddLike from "components/Hooks/Like/useAddLike";
import DropDownMenu from "components/Common/DropDownMenu";
import useGetIfLiked from "components/Hooks/Like/useGetIfLiked";
import UserInfo from "components/Feed/UserInfo";

const CommentImg = ({
  category,
  postContent,
  img,
  profile,
  name,
  postId,
  userId,
}) => {
  const [like, setLike] = useState(false);
  const getCategory = useCategory({ category });
  const { mutate } = useAddLike();
  const { data } = useGetIfLiked({ postId: Number(postId) });
  const userInfo = UserInfo();

  useEffect(() => {
    setLike(data);
  }, [data]);

  const addLike = useCallback(() => {
    mutate({
      postId: postId,
    });
    setLike((value) => !value);
  }, [mutate, postId]);

  return (
    <>
      <StWrapFlex img={img}>
        <StGradient top>
          <HeaderDiv>
            <FlexRowDiv>
              <StProfile img={profile} />
              <StTextDiv>
                <span className="titleText">갓생 입문자</span>
                <span>{name}</span>
              </StTextDiv>
            </FlexRowDiv>
          </HeaderDiv>
        </StGradient>
        <StGradient>
          <BottomWarp>
            <BottomDiv>
              <span className="titleText">{getCategory}</span>
              <span className="nameText">{postContent}</span>
            </BottomDiv>
            <div className="imgWrap">
              {data !== undefined ? (
                <LikeButton onClick={() => addLike()} like={like} />
              ) : (
                <></>
              )}
              {userId !== userInfo?.userId ? (
                <></>
              ) : (
                <DropDownMenu
                  text="게시글 삭제"
                  margin="40"
                  click="detailD"
                  color="white"
                  postId={postId}
                />
              )}
            </div>
          </BottomWarp>
        </StGradient>
      </StWrapFlex>
    </>
  );
};

export default CommentImg;

const StWrapFlex = styled.div`
  ${flex({
    direction: "column",
    justify: "space-between",
  })}
  width: calc(100% - 32px);
  height: 440px;
  margin-top: 59px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 16px;
  @media screen and (max-height: 700px) {
    height: 304px;
  }
`;

const StGradient = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  justify-content: ${(props) => (props.top ? "flex-start" : "flex-end")};
  width: 100%;
  height: 50%;
  border-radius: 16px;
  background: linear-gradient(
    ${(props) =>
      props.top
        ? "var(--black), rgba(0, 0, 0, 0) 40%"
        : "0.14deg, var(--black), rgba(0, 0, 0, 0) 60%"}
  );
`;

const HeaderDiv = styled.div`
  ${flex({ justify: "space-between", align: "flex-start" })}
  margin: 20px 0 0 20px;
`;

const StProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`;

const StTextDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  line-height: 130%;
  margin-left: 8px;
  color: var(--white);
  .titleText {
    font-size: 12px;
  }
`;

const BottomDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  margin: 0 0 20px 20px;
  color: var(--white);
  font-weight: 600;
  .titleText {
    font-size: 16px;
  }
  .nameText {
    font-size: 24px;
  }
`;

const BottomWarp = styled.div`
  ${flex({ direction: "row", justify: "space-between" })}
  width: 95%;
  .imgWrap {
    ${flex({ direction: "row" })}
  }
`;

const LikeButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: ${(props) =>
    props.like ? `url(${likeImg})` : `url(${unlikeImg})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 16px;
`;
