import styled from '@emotion/styled';
import { StWrap } from 'components/Common/GlobalStyles';
// import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavigatorBar from 'components/Common/NavigatorBar';
import Search from 'components/Feed/Search';
import SkeletonChat from 'components/Skeletons/SkeletonMain';
// import loadable from '@loadable/component';
import useGetUser from 'components/Hooks/User/useGetUser';
import GetTodayLikes from 'components/Hooks/Like/useTodayLikes';
// const Chats = loadable(() => import('./Chats'));
// const ChatRoom = loadable(() => import('pages/ChatRoom'));

const Chat = () => {
    const { isLoading } = useGetUser();
    const todayLikes = GetTodayLikes();
    console.log(todayLikes);
    return (
        <StCalculatedWrap className="main_three">
            {isLoading ? (
                <>
                    <SkeletonChat />
                </>
            ) : (
                <>
                    <Search text="이름x을 검색해주세요." />
                    <Helmet>
                        <title>채팅: 갓생메이커</title>
                    </Helmet>
                    <ImgChatLink url="/chat/room" />
                    {/* <Routes>
                        <Route path="/chat" element={<Chats />} />
                        <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
                    </Routes> */}
                    <ChatListLink />
                </>
            )}
            <NavigatorBar />
        </StCalculatedWrap>
    );
};

export default Chat;

const StCalculatedWrap = styled(StWrap)`
    height: calc(100vh - 60px);
    overflow-y: scroll;
`;
const ImgChatLink = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-size: cover;
    background-position: center;
    margin-right: 7px;
`;
const ChatListLink = styled.div``;
