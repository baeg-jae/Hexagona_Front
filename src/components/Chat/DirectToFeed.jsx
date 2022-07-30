import TalkCloud from "assets/img/TalkCloud.webp";
import styled from "@emotion/styled";
import { TalkCloudAnim } from "components/Common/GlobalStyles";

const DirectToFeed = ({ text, left, left2 }) => {
  return (
    <StDiv img={TalkCloud} left={left} left2={left2}>
      <div>
        <span>{text}</span>
      </div>
    </StDiv>
  );
};

export default DirectToFeed;

const StDiv = styled.div`
  position: fixed;
  width: 120px;
  height: 60px;
  bottom: 5%;
  left: ${(props) => props.left}%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${TalkCloudAnim} 1s infinite;
  z-index: 999999;

  div {
    position: absolute;
    top: 20%;
    left: 27%;
    span {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 420px) {
    left: ${(props) => props.left2}%;
  }
`;
