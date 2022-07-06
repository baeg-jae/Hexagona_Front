import React from "react";
import { StWrap } from "components/Common/GlobalStyles";
import Header from "components/Common/Header";
import NavigatorBar from "components/Common/NavigatorBar";
import styled from "@emotion/styled";
import HomeCategory from "pages/HomeCategory";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";

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
