import { useCallback } from "react";
import { badWords } from "shared/TextsData";
import { useDispatch } from "react-redux";

const useBogusCheck = ({
  value,
  globalModal,
  nextStepFunc,
  ref,
  setDouble,
}) => {
  const dispatch = useDispatch();
  const bogusCheck = useCallback(() => {
    ref.current.value = true;
    setDouble(true);
    const foundSwears = badWords.filter((word) =>
      value.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      dispatch(globalModal(true));
    } else {
      nextStepFunc();
    }
  }, [dispatch, globalModal, nextStepFunc, value]);
  return bogusCheck;
};

export default useBogusCheck;
