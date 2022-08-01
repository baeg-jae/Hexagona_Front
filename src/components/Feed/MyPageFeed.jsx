import { useGetMyPosts } from "components/Hooks/User/GetMyPosts";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { SkeletonAnim } from "components/Common/GlobalStyles";

const MyPageFeed = () => {
  const navigate = useNavigate();
  const { data } = useGetMyPosts();
  const onClickHandler = useCallback(() => {
    navigate("/feed/myFeed");
  }, [navigate]);
  return (
    <>
      {data !== undefined ? (
        data?.length === 0 ? (
          <StMyPageDisabled>
            <StMySpan>목표를</StMySpan>
            <StMySpan>해볼까요!</StMySpan>
            <StMySpan small>내 사진이 0개예요</StMySpan>
          </StMyPageDisabled>
        ) : (
          <StMyPage img={data[0]?.photoUrl} onClick={onClickHandler}>
            <StMySpan>내 사진</StMySpan>
            <StMySpan>모아보기</StMySpan>
            <StMySpan small>총 {data?.length} 개의 사진</StMySpan>
          </StMyPage>
        )
      ) : (
        <StSkeleton>
          <StMySpan>내 사진</StMySpan>
          <StMySpan>모아보기</StMySpan>
        </StSkeleton>
      )}
    </>
  );
};

export default MyPageFeed;

const StMyPageDisabled = styled.div`
  ${flex({ direction: "column" })}
  height: 225px;
  border-radius: 16px;
  margin: 5px 5px 5px 5px;
  background-color: var(--gray-3);
`;

const StMyPage = styled.div`
  ${flex({ direction: "column" })}
  height: 225px;
  border-radius: 16px;
  margin: 5px 5px 5px 5px;
  cursor: pointer;
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

const StSkeleton = styled.div`
  ${flex({ direction: "column" })}
  width: 97%;
  height: 225px;
  border-radius: 16px;
  margin: 5px 5px 5px 5px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;
