import { useGetMyPosts } from "components/Hooks/User/GetMyPosts";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import NavigatorBar from "components/Common/NavigatorBar";
import Search from "components/Feed/Search";
import styled from "@emotion/styled";

const MyFeed = () => {
  const [keyword, setKeyword] = useState("");
  const { data } = useGetMyPosts();
  const navigate = useNavigate();
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );
  return (
    <>
      <Helmet>
        <title>내사진보기: 갓생메이커</title>
      </Helmet>
      <Search setKeyword={setKeyword} />
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
      <NavigatorBar />
    </>
  );
};

export default MyFeed;

const StDiv = styled.div`
  display: grid;
  justify-content: center;
  gap: 10px;
  grid-template-columns: 166px 166px;
  margin-top: 80px;
  overflow-y: scroll;
`;

const StImgDiv = styled.div`
  height: 225.72px;
  border-radius: 20px;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;
