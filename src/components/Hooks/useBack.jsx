import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useBack = () => {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return onClickHandler;
};

export default useBack;
