import { Outlet } from "react-router-dom";
import loadable from "@loadable/component";

const LogIn = loadable(() => import("pages/LogIn"));
const Home = loadable(() => import("pages/Home"));

const useAuth = () => {
  const token = localStorage.getItem("Authorization");
  return token;
};

export const NoNeedLogin = () => {
  const isAuth = useAuth();
  // 로그인중이면 로그인페이를 못돌아간다.
  return isAuth !== null ? <Home /> : <Outlet />;
};

export const NeedLogin = () => {
  const isAuth = useAuth();
  // 로그인중이 아니면 로그인페이지로 보내준다
  return isAuth !== null ? <Outlet /> : <LogIn />;
};
