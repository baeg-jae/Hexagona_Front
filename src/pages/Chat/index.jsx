// import styled from '@emotion/styled';
// import { StWrap } from 'components/Common/GlobalStyles';
// import { Routes, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import NavigatorBar from 'components/Common/NavigatorBar';
// import Search from 'components/Feed/Search';
// import SkeletonChat from 'components/Skeletons/SkeletonMain';
// import loadable from '@loadable/component';
// import useGetUser from 'components/Hooks/User/useGetUser';

// const Chats = loadable(() => import('./chat'));
// const ChatRoom = loadable(() => import('chat/ChatRoom'));

// const Chat = () => {
//     const { isLoading } = useGetUser();
//     return (
//         <StCalculatedWrap className="main_three">
//             {isLoading ? (
//                 <>
//                     <SkeletonChat />
//                 </>
//             ) : (
//                 <>
//                     <Search text="이름x을 검색해주세요." />
//                     <Helmet>
//                         <title>채팅: 갓생메이커</title>
//                     </Helmet>
//                     <Routes>
//                         <Route path="/chat" element={<Chats />} />
//                         <Route path="/chat/:userId" element={<ChatRoom />} />
//                     </Routes>
//                 </>
//             )}
//             <NavigatorBar />
//         </StCalculatedWrap>
//     );
// };

// export default Chat;

// const StCalculatedWrap = styled(StWrap)`
//     height: calc(100vh - 60px);
//     overflow-y: scroll;
// `;
