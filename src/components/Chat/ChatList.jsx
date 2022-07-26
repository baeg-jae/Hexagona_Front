import styled from '@emotion/styled';
import flex from 'components/Common/flex';
import useGetChatListSetting from 'components/Hooks/ChatList/useGetChatListSetting';

const ChatList = () => {
    const { data } = useGetChatListSetting();
    const onClickChatRoomHandler = () => {};
    console.log(data);
    return (
        <StChatWrap>
            <StChat onClick={onClickChatRoomHandler}>
                <StChatHeader>
                    <StChatHeaderImg otherProfileImg={data?.otherProfileImg} />
                    <span>{data?.otherNickName}</span>
                </StChatHeader>
                <StChatDec>{data?.lastChat}</StChatDec>
            </StChat>
        </StChatWrap>
    );
};

export default ChatList;
const StChatWrap = styled.div`
    ${flex({ direction: 'column', justify: 'flex-start' })}
`;
const StChat = styled.div`
    ${flex({ direction: 'column', justify: 'flex-start' })}
    width: calc(100% - 32px);
    height: 81px;
    margin-top: 18px;
    border-bottom: 1px solid #e9e9e9;
    background-color: tomato;
`;
const StChatHeader = styled.div`
    width: 100%;
    ${flex({ direction: 'row', justify: 'flex-start' })}
    .span {
        font-size: 18px;
    }
`;
const StChatHeaderImg = styled.div`
    width: 45px;
    height: 45px;
    background-image: url(${(data) => data.profile_img});
    background-size: cover;
    background-position: center;
    margin-right: 9px;
`;
const StChatDec = styled.div`
    margin-top: 7.8px;
    width: 97%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
