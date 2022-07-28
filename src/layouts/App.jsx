import { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Routing from "components/Routings/Routing";
import styled from "@emotion/styled";
import bg from "assets/img/WebBG.webp";
import col from "assets/img/col.webp";
import GoogleForm from "./GoogleForm";
import GlobalModal from "./GlobalModal";

function App() {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <div className="wrap">
        <GlobalModal />
        <Routing />
      </div>
      <GoogleForm />
    </Container>
  );
}

export default App;

// 웹뷰
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-image: url(${bg});
  background-size: contain;
  background-position-x: -100px;
  background-repeat: no-repeat;
  background-position-y: 130px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }

  // 모바일 뷰
  .wrap {
    width: 100%;
    max-width: 420px;
    height: calc(var(--vh) * 100);
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
    background-color: var(--white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (min-width: 1024px) {
      position: relative;
      left: 15%;
      top: 0%;
      overflow: auto;
    }
    @media screen and (min-height: 1000px) {
      background-image: url(${col});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
