import { MOBILE_SIZE_WIDTH } from "shared/data";
import { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Routing from "components/Routings/Routing";
import styled from "@emotion/styled";
import bg from "assets/img/BackgroundImg.webp";
import GoogleForm from "./GoogleForm";

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
        <Routing />
      </div>
      <GoogleForm />
    </Container>
  );
}

export default App;

// 웹뷰
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #f6f6f6;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }

  // 모바일 뷰
  .wrap {
    width: 100%;
    max-width: ${MOBILE_SIZE_WIDTH}px;
    height: calc(var(--vh) * 100);
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (min-width: 1024px) {
      position: relative;
      left: 11%;
      top: 0%;
      overflow: auto;
    }
  }
`;
