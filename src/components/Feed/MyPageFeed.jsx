import { shuffleArray } from "shared/shuffleArray";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetMyPosts from "components/Hooks/User/GetMyPosts";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { useCallback } from "react";
const MyPageFeed = () => {
  const [myPostContainer, setMyPostContainer] = useState([]);
  const myPosts = GetMyPosts();
  const navigate = useNavigate();

  useEffect(() => {
    setMyPostContainer(shuffleArray(myPosts));
  }, [myPosts]);

  const randomMyPost = myPostContainer?.filter((v, i) => {
    return i === 0 ? v : "";
  });

  const onClickHandler = useCallback(() => {
    navigate("/myFeed");
  }, [navigate]);
  return (
    <>
      {randomMyPost?.map((v, i) => {
        return (
          <StMyPage img={v.photoUrl} key={i} onClick={onClickHandler}>
            <StMySpan>내 사진</StMySpan>
            <StMySpan>모아보기</StMySpan>
            <StMySpan small>총 {myPosts?.length} 개의 사진</StMySpan>
          </StMyPage>
        );
      })}
    </>
  );
};

export default MyPageFeed;

const StMyPage = styled.div`
  ${flex({ direction: "column" })}
  width: 166px;
  height: 225px;
  border-radius: 20px;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.6) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

const StMySpan = styled.span`
  font-weight: ${(props) => (props.small ? "400" : "700")};
  font-size: ${(props) => (props.small ? "14px" : "16px")};
  line-height: ${(props) => (props.small ? "16px" : "19px")};
  color: #1c1c1c;
`;
