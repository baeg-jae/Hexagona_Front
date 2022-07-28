import { useState, useCallback } from "react";
import { badWords } from "shared/TextsData";
import useUpdateNickname from "components/Hooks/User/useUpdateNickname";
import { useDispatch } from "react-redux";
import { UserProfileModalError } from "redux/modules/modal";

const useNicknameHandle = () => {
  const [nicknameFlag, setNicknameFlag] = useState(false);
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();
  const { mutate } = useUpdateNickname();

  const onSendNickname = useCallback(() => {
    if (nickname !== "") {
      setNicknameFlag((value) => !value);
      mutate({ nickname: nickname });
    } else {
      dispatch(UserProfileModalError(true));
    }
  }, [mutate, nickname, dispatch]);

  const bogusCheck = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      nickname.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      dispatch(UserProfileModalError(true));
    } else {
      onSendNickname();
    }
  }, [nickname, onSendNickname, dispatch]);

  return {
    setNicknameFlag,
    nicknameFlag,
    setNickname,
    bogusCheck,
  };
};

export default useNicknameHandle;
