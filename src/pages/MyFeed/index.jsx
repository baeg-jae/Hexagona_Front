import { useGetMyPosts } from "components/Hooks/User/GetMyPosts";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import WebTitle from "components/Common/WebTitle";
import NavigatorBar from "components/Common/NavigatorBar";
import Search from "components/Feed/Search";
import styled from "@emotion/styled";
import { StWrap } from "components/Common/GlobalStyles";

const MyFeed = () => {
  const [keyword, setKeyword] = useState("");
  const { data } = useGetMyPosts();
  const navigate = useNavigate();
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/feed/${postId}`);
    },
    [navigate]
  );
  return (
    <StCalculatedWrap>
      <WebTitle text="내사진보기: 갓생메이커" />
      <Search setKeyword={setKeyword} text="키워드를 입력해주세요." />
      <StScrollWrapper>
        <StDiv>
          {data
            ?.filter((v) => {
              if (keyword === "") {
                return v;
              } else if (
                v.postContent.toLowerCase().includes(keyword.toLowerCase())
              ) {
                return v;
              }
              return v;
            })
            .map((v, i) => {
              return (
                v.postContent.toLowerCase().includes(keyword.toLowerCase()) && (
                  <StImgDiv
                    key={i}
                    img={v.photoUrl}
                    onClick={() => onClickHandler(v?.postId)}
                  />
                )
              );
            })
            .reverse()}
        </StDiv>
      </StScrollWrapper>
      <NavigatorBar />
    </StCalculatedWrap>
  );
};

export default MyFeed;

const StDiv = styled.div`
  display: grid;
  justify-content: center;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin: 85px 16px 0 16px;
  overflow-y: scroll;
`;

const StImgDiv = styled.div`
  height: 225.72px;
  border-radius: 16px;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const StScrollWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: scroll;
`;

const StCalculatedWrap = styled(StWrap)`
  position: relative;
  height: 100vh;
`;
