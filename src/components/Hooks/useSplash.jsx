import { useNavigate } from "react-router-dom";
import { SPLASH_LOADING_TIME } from "shared/data";
import { useEffect } from "react";

const useSplash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setTimeout(() => {
      navigate("/home");
    }, SPLASH_LOADING_TIME);

    return () => {
      clearTimeout(interval);
    };
  }, [navigate]);
};

export default useSplash;
