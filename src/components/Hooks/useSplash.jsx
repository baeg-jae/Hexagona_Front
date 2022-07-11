import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SPLASH_LOADING_TIME } from "shared/data";

const useSplash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let interval = setInterval(() => {
      navigate("/home");
    }, SPLASH_LOADING_TIME);
    return () => {
      clearInterval(interval);
    };
  }, [navigate]);
  return;
};

export default useSplash;
