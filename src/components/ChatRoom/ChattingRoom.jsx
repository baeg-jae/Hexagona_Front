import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import React, { useParams, useEffect, useState } from 'react';

//1. 이전채팅 불러오기(쿼리 get)
//2. 채팅하기(소켓)
//3. 김갓생(상대 정보는 백엔드에서 받아오기)
//4. 프로필 사진, useGetUser로 데이터 들고오기.
//5. 먼저 메세지를 보내는것
//6. 만약 받을때 메세지는? 백에서 또 이야기해서 받아야한다.(소켓)

//메세지 데이터를 소켓으로하고 나중에 겟할때 어떤식으로 저장하고 보여줄것인가
//어떻게 배열을 만들건지 고민해보자 useState, redux

const ChattingRoom = () => {
    const { chatRoomId } = useParams();
    const SockJs = new SockJS('/ws-stomp');
    const StompClient = Stomp.over(SockJs);
    const token = localStorage.getItem('Authorization');
    // const [message, setMessage] = useState('');
    const recMesage = () => {};
    useEffect(() => {
        StompClient.connect(
            { token },
            () => {
                StompClient.subscribe(`/sub/chat/room/${data.chatroomId}`, (message) => {
                    const data = JSON.parse(message.body);
                    recMessage(data);
                });
            },
            (error) => {
                alert('에러요', error);
            }
        );
        const cleanup = () => {
            StompClient.disconnect();
        };
        return cleanup();
    }, []);
    const sendMessage = (data, message) => {
        StompClient.send(
            `소켓 메세지 주소`,
            { token },
            JSON.stringify({
                userId: data.userId,
                chatRoomId: message.chatRoomId,
                modifiedAt: message.modifiedAt,
                message: message,
            })
        );
    };

    return <div></div>;
};

export default ChattingRoom;
