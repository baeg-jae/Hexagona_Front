import { SPLASH_LOADING_TIME } from "shared/data";
import { useEffect } from "react";

const useSplash = (setFlag) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      setFlag((value) => !value);
    }, SPLASH_LOADING_TIME);
    return () => {
      clearTimeout(interval);
    };
  }, [setFlag]);
};

export default useSplash;
