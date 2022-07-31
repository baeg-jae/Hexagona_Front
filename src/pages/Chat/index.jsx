import styled from "@emotion/styled";
import { StWrap } from "components/Common/GlobalStyles";
import { Helmet } from "react-helmet";
import NavigatorBar from "components/Common/NavigatorBar";
import Search from "components/Feed/Search";
import TodayLiked from "components/Chat/TodayLiked";
import useGetUser from "components/Hooks/User/useGetUser";
import ChatList from "components/Chat/ChatList";
import { useDebounce } from "components/Hooks/useDebounce";
import { useEffect } from "react";
import { __getUser } from "redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
  const text = "";
  const [debounceInput, setDebounceInput] = useDebounce(text, 300);
  const { userId } = useSelector((state) => state.userReducer);
  const { data } = useGetUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getUser());
  }, [dispatch]);

  return (
    <StCalculatedWrap>
      <Helmet>
        <title>채팅: 갓생메이커</title>
      </Helmet>
      <StChatMainContent>
        <Search text="이름을 검색해주세요." setKeyword={setDebounceInput} />
        <div style={{ width: "500px", height: "77px" }} />
        <div>
          <StLikeTitle>좋아요 표시한 게시글</StLikeTitle>
          <TodayLiked userData={data} />
        </div>
        <StLikeTitle>채팅</StLikeTitle>
        {/* props로 유저 정보를 넘겨줍니다. */}
        {userId !== 0 && <ChatList keyword={debounceInput} userId={userId} />}
      </StChatMainContent>
      <NavigatorBar />
    </StCalculatedWrap>
  );
};

export default Chat;

const StCalculatedWrap = styled(StWrap)``;

const StChatMainContent = styled.div`
  height: calc(100% - 68px);
  overflow-y: scroll;
  overflow-x: hidden;
`;

const StLikeTitle = styled.div`
  font-weight: 700;
  font-family: Pretendard_Bold;
  font-size: 18px;
  color: var(--gray-10);
  margin: 20px 0 0 19px;
`;
