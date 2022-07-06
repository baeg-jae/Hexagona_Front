import MobileFrame from "components/Common/MobileFrame";
import Routing from "components/Routings/Routing";
import styled from "@emotion/styled";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Fullscreen>
      <Wrap>
        <MobileFrame>
          <Routing />
        </MobileFrame>
      </Wrap>
    </Fullscreen>
  );
}

export default App;

const Fullscreen = styled.div`
  margin: auto;
  /* margin-bottom: 30px; */
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 540px) {
    justify-content: center;
    overflow: hidden auto;
  }
  @media (max-width: 1579px) and (min-width: 541px) {
    justify-content: flex-end;
    overflow: hidden auto;
  }
  @media (min-width: 1580px) {
    overflow: hidden auto;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
`;
