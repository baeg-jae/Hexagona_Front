import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __kakaoSignIn } from "redux/modules/user";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

const Kakao = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, newUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(__kakaoSignIn(code));
    if (isLogin) {
      navigate("/signup");
    }
    if (!newUser) {
      navigate("/home");
    }
  }, [dispatch, code, navigate, isLogin, newUser]);
  return (
    <>
      <Loading />
    </>
  );
};

export default Kakao;
