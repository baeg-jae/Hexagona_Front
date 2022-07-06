import React from "react";
import { StWrap } from "components/Common/GlobalStyles";
import Header from "components/Common/Header";
import NavigatorBar from "components/Common/NavigatorBar";
import styled from "@emotion/styled";
import Main from "components/HomeComponents/Main";

const Home = () => {
  return (
    <StCalculatedWrap>
      <Header />
      <Main />
      <NavigatorBar />
    </StCalculatedWrap>
  );
};

export default Home;

const StCalculatedWrap = styled(StWrap)`
  height: calc(100vh - 60px);
`;
