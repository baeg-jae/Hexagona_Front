import styled from '@emotion/styled';
import flex from 'components/Common/flex';
import Splash1 from 'assets/img/splash_01.webp';
import NewLikeImg from './NewLikeImg';
import useGetUser from 'components/Hooks/User/useGetUser';

const Chats = () => {
    const { data } = useGetUser();
    const onClickChatRoomHandler = () => {};

    return (
        <>
            <NewLikeImg />
            {data.userId.map((_, i) => {
                return (
                    <StChat key={i} onClick={onClickChatRoomHandler}>
                        <div className="Chats_firstRow">
                            <div className="Chats_Profile" />
                            <div className="Chats_Name">백재님</div>
                        </div>
                        <div className="Chat_secondRow">
                            채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공
                            합시당.채팅에 꼭 성공 합시당 채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공
                            합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당 채팅에 꼭 성공 합시당.채팅에 꼭 성공
                            합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당 채팅에 꼭 성공
                            합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공
                            합시당 채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공
                            합시당.채팅에 꼭 성공 합시당 채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공
                            합시당.채팅에 꼭 성공 합시당.채팅에 꼭 성공 합시당
                        </div>
                    </StChat>
                );
            })}
        </>
    );
};

export default Chats;

const StChat = styled.div`
    ${flex({ direction: 'column', align: 'flex-start' })}
    width: 339px;
    height: 109px;
    border-bottom: 1px solid #e9e9e9;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    .Chats_firstRow {
        ${flex({ justify: 'flex-start' })}
        width: 100%;
        .Chats_Profile {
            width: 45px;
            height: 45px;
            border-radius: 100%;
            background-image: url(${Splash1});
            background-size: cover;
            background-position: center;
        }
        .Chats_Name {
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: #393939;
            margin-left: 5px;
        }
    }
    .Chat_secondRow {
        width: 339px;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
    }
`;
