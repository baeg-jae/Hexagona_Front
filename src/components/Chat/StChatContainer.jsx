import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { useEffect } from "react";

const StChatContainer = () => {
  // 세로 반응형
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <StWrap></StWrap>;
};

export default StChatContainer;

const StWrap = styled.div`
  ${flex({})}
  width: calc(100% - 32px);
  height: calc(var(--vh) * 70);
  background-color: tomato;
  margin-top: 31px;
`;
