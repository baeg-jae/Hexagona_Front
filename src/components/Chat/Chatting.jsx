import React from 'react';
// import useGetUser from 'components/Hooks/User/useGetUser';
// import useGetChatListSetting from 'components/Hooks/ChatList/useGetChatListSetting';
// import useCreateChatRoom from 'components/Hooks/ChatList/useCreateChatRoom';
import NewLikeImg from './NewLikeImg';

//골샷 아이 라잌, 채팅리스트 가져오기
//1  api 연결해준다.
//2. api main작성 이름은 getChatSetting
//3. 쿼리로 쓸꺼면 저희는 따로 쿼리 커스텀훅 만들기
//4. 커스텀훅 적용시키기
//5. 컴토넌트 만들기

//문제점
//usemutation 하면

const Chatting = () => {
    // const { data } = useGetUser();
    // const { mutate, data } = useCreateChatRoom();

    return (
        <div>
            <NewLikeImg />
        </div>
    );
};

export default Chatting;
