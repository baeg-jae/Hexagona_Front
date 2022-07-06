import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import ProtectedRoutesNoLogin from "./ProtectedNoLogin";
import ProtectedRoutesYesLogin from "./ProtectedYesLogin";

const Kakao = loadable(() => import("pages/SocialLogIn/Kakao"));
const Google = loadable(() => import("pages/SocialLogIn/Google"));
const SignUp = loadable(() => import("pages/SignUp"));
const LogIn = loadable(() => import("pages/LogIn"));
const Error = loadable(() => import("pages/Status/Error"));
const Home = loadable(() => import("pages/Home"));
const Feed = loadable(() => import("pages/Feed"));
const GoalShot = loadable(() => import("pages/GoalShot"));
const FeedDetail = loadable(() => import("pages/FeedDetail"));

const Routing = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutesYesLogin />}>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/oauth/kakao/callback" element={<Kakao />} />
        <Route path="/oauth/google/callback" element={<Google />} />
      </Route>
      <Route element={<ProtectedRoutesNoLogin />}>
        <Route path="/home/*" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/goalshot" element={<GoalShot />} />
        <Route path="/feed/:id" element={<FeedDetail />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
