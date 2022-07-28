import styled from "@emotion/styled";
import { StWrap } from "components/Common/GlobalStyles";
import { Helmet } from "react-helmet";
import NavigatorBar from "components/Common/NavigatorBar";
import Search from "components/Feed/Search";
import TodayLiked from "components/Chat/TodayLiked";
import useGetUser from "components/Hooks/User/useGetUser";
import ChatList from "components/Chat/ChatList";
import { useState } from "react";

const Chat = () => {
  const [keyword, setKeyword] = useState("");
  const { data } = useGetUser();
  return (
    <StCalculatedWrap>
      <Helmet>
        <title>채팅: 갓생메이커</title>
      </Helmet>
      <>
        <Search text="이름을 검색해주세요." setKeyword={setKeyword} />
        <div style={{ width: "500px", height: "77px" }} />
        <div>
          <StLikeTitle>Goal Shot I Like</StLikeTitle>
          <TodayLiked userData={data} />
        </div>
        <StLikeTitle>Chatting</StLikeTitle>
        {/* props로 유저 정보를 넘겨줍니다. */}
        <ChatList keyword={keyword} />
      </>
      <NavigatorBar />
    </StCalculatedWrap>
  );
};

export default Chat;

const StCalculatedWrap = styled(StWrap)`
  height: calc(100vh - 60px);
  overflow-y: scroll;
`;

const StLikeTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: var(--gray-10);
  margin: 20px 0 0 19px;
`;
