import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { FlexColumnDiv } from "components/Common/GlobalStyles";
import useGetChatListSetting from "components/Hooks/ChatList/useGetChatListSetting";
import { useNavigate } from "react-router-dom";

const ChatList = ({ keyword, userId }) => {
  const navigate = useNavigate();

  const { data } = useGetChatListSetting({ userId: userId });

  const onClickChatRoomHandler = (RoomId) => {
    if (data.chatRoomList !== undefined) navigate(`/chat/${RoomId}`);
  };
  return (
    <StChatWrap>
      {data?.chatRoomList?.map((v, i) => {
        return (
          v.otherNickName.toLowerCase().includes(keyword.toLowerCase()) && (
            <StChat
              onClick={() => onClickChatRoomHandler(v.chatRoomId)}
              key={i}
            >
              <StChatHeader>
                <StFlexRow>
                  <StChatHeaderImg otherProfileImg={v.otherProfileImg} />
                  <FlexColumnDiv style={{ marginLeft: "16px" }}>
                    <span className="title">{v.otherNickName}</span>
                    <StChatDec>{v.lastChat}</StChatDec>
                  </FlexColumnDiv>
                </StFlexRow>
                <StCircleAlert></StCircleAlert>
              </StChatHeader>
            </StChat>
          )
        );
      })}
    </StChatWrap>
  );
};

export default ChatList;

const StChatWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
`;
const StChat = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: calc(100% - 32px);
  margin-bottom: 32px;
`;
const StChatHeader = styled.div`
  width: 100%;
  ${flex({ direction: "row" })}
  .span {
    font-size: 18px;
  }
  .title {
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    color: #1f2024;
  }
`;
const StChatHeaderImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(data) => data.otherProfileImg});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
`;
const StChatDec = styled.div`
  width: 230px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 16px;
  color: #71727a;
`;

const StFlexRow = styled.div`
  ${flex({ direction: "row", justify: "flex-start" })}
  width: 100%;
`;

const StCircleAlert = styled.div`
  width: 24px;
  height: 24px;
  background: #006ffd;
  border-radius: 20px;
  color: var(--white);
`;
