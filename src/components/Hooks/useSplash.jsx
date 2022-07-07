import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSplash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let interval = setInterval(() => {
      navigate("/home");
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [navigate]);
  return;
};

export default useSplash;
