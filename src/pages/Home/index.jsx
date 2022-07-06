import React from "react";
import { StWrap } from "components/Common/GlobalStyles";
import Header from "components/Common/Header";
import NavigatorBar from "components/Common/NavigatorBar";
import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => import("./Main"));
const HomeCategory = loadable(() => import("pages/HomeCategory"));

const Home = () => {
  return (
    <StCalculatedWrap>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<HomeCategory />} />
      </Routes>
      <NavigatorBar />
    </StCalculatedWrap>
  );
};

export default Home;

const StCalculatedWrap = styled(StWrap)`
  height: calc(100vh - 60px);
`;
