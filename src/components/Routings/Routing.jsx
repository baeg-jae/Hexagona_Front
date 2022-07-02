import React from "react";
import { Routes, Route } from "react-router-dom";
import Kakao from "pages/SocialLogIn/Kakao";
import SignUp from "pages/SignUp";
import LogIn from "pages/LogIn";
import Error from "pages/Status/Error";
import ProtectedRoutesNoLogin from "./ProtectedNoLogin";
import Home from "pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/oauth/kakao/callback" element={<Kakao />} />

      <Route element={<ProtectedRoutesNoLogin />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
