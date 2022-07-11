import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __kakaoSignIn } from "redux/modules/user";
import Loading from "pages/Status/Loading";

const Kakao = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(__kakaoSignIn(code));
    if (isLogin) {
      navigate("/signup");
    }
  }, [dispatch, code, navigate, isLogin]);
  return (
    <>
      <Loading />
    </>
  );
};

export default Kakao;
