import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Splash1 from "assets/img/splash_01.webp";

const Chats = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {arr.map((v, i) => {
        return (
          <StChat key={i}>
            <div className="Chats_firstRow">
              <div className="Chats_Profile" />
              <div className="Chats_Name">jane S.</div>
            </div>
            <div className="Chat_secondRow">
              Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
              simplyLorem Ipsum is simply dummy text of the printing Lorem Ipsum
              is simply
            </div>
          </StChat>
        );
      })}
    </>
  );
};

export default Chats;

const StChat = styled.div`
  ${flex({ direction: "column", align: "flex-start" })}
  width: 339px;
  height: 109px;
  border-bottom: 1px solid #e9e9e9;
  .Chats_firstRow {
    ${flex({ justify: "flex-start" })}
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
