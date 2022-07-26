import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __googleSignIn } from "redux/modules/user";
import { useEffect } from "react";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

const Google = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, newUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(__googleSignIn(code));
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

export default Google;
