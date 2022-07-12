import { useState } from "react";
import styled from "@emotion/styled";
import flex from "../Common/flex";
import likeImg from "assets/img/like.png";
import unlikeImg from "assets/img/unlike.png";
import button from "assets/img/button.png";
import useCategory from "components/Hooks/useCategory";
import useAddLike from "components/Hooks/useAddLike";

const CommentImg = ({ category, postContent, img, profile, name, postId }) => {
  const [like, setLike] = useState(false);
  const getCategory = useCategory({ category });
  const { mutate } = useAddLike();
  const addLike = () => {
    mutate({
      postId: postId,
    });
    setLike((value) => !value);
  };

  return (
    <StWrapFlex img={img}>
      <div className="gradient">
        <HeaderDiv>
          <StProfile img={profile} />
          <StTextDiv>
            <span className="titleText">갓생 입문자</span>
            <span className="nameText">{name}</span>
          </StTextDiv>
        </HeaderDiv>
        <BottomWarp>
          <BottomDiv>
            <span className="titleText">{getCategory}</span>
            <span className="nameText">{postContent}</span>
          </BottomDiv>
          <div className="imgWrap">
            {like ? (
              <LikeButton onClick={() => addLike()} img={likeImg} />
            ) : (
              <LikeButton onClick={() => addLike()} img={unlikeImg} />
            )}
            <PutButton />
          </div>
        </BottomWarp>
      </div>
    </StWrapFlex>
  );
};

export default CommentImg;

const StWrapFlex = styled.div`
  ${flex({
    direction: "column",
    justify: "space-between",
  })}
  width: 325px;
  height: 440px;
  margin-top: 59px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  .gradient {
    ${flex({ direction: "column", align: "flex-start", justify: "flex-end" })}
    width: 100%;
    height: 440px;
    border-radius: 20px;
    background: linear-gradient(
      0.14deg,
      #000000 0.09%,
      rgba(0, 0, 0, 0) 32.15%
    );
  }
`;

const HeaderDiv = styled.div`
  ${flex({ justify: "flex-start", align: "flex-start" })}
  width: 100%;
  height: 100%;
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
  letter-spacing: -0.02em;
  line-height: 130%;
  margin-left: 8px;
  color: #212121;
  .titleText {
    font-weight: 400;
    font-size: 13px;
  }
  .nameText {
    font-weight: 700;
    font-size: 15px;
  }
`;

const BottomDiv = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  letter-spacing: -0.02em;
  margin: 0 0 20px 20px;
  color: var(--white);
  .titleText {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .nameText {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
`;

const BottomWarp = styled.div`
  ${flex({ direction: "row", justify: "space-between" })}
  width: 90%;
  .imgWrap {
    ${flex({ direction: "row" })}
  }
`;

const LikeButton = styled.div`
  width: 20px;
  height: 18.75px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  margin-right: 16px;
`;
const PutButton = styled.div`
  width: 1.5px;
  height: 12px;
  background-image: url(${button});
  background-size: cover;
  background-position: center;
`;
