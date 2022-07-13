import { useCallback } from "react";

const useCategory = ({ category }) => {
  const categoryCheck = useCallback(() => {
    switch (category) {
      case "exercise":
        return "운동하기";
      case "study":
        return "학습";
      case "life":
        return "생활습관";
      case "hobby":
        return "취미생활";
      default:
        return;
    }
  }, [category]);

  return categoryCheck();
};

export default useCategory;
