import styled from "@emotion/styled";
import NavigatorBar from "components/Common/NavigatorBar";
import Search from "components/Feed/Search";
import flex from "components/Common/flex";
import Chats from "components/Chat/Chats";

const Chat = () => {
  return (
    <>
      <Search text="이름x을 검색해주세요." />
      <StLists>
        <div className="Chats">
          <span className="Chats_title">Messages</span>
          <div className="Chats_Contents">
            <Chats />
          </div>
        </div>
      </StLists>
      <NavigatorBar />
    </>
  );
};

export default Chat;

const StLists = styled.div`
  width: 100%;
  height: calc(100vh - 144px);
  margin-top: 80px;
  overflow: scroll;
  .Chats {
    ${flex({ direction: "column", align: "flex-start" })}
    width: 100%;
    .Chats_title {
      margin: 20px 0 0 19px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #393939;
    }
    .Chats_Contents {
      ${flex({ direction: "column" })}
      width: 100%;
      margin-top: 16px;
    }
  }
`;
