import { useState, useCallback } from "react";
import { badWords } from "shared/TextsData";
import useUpdateNickname from "components/Hooks/User/useUpdateNickname";
import AlertComponent from "components/Common/AlertComponent";

const useNicknameHandle = () => {
  const [nicknameFlag, setNicknameFlag] = useState(false);
  const [nickname, setNickname] = useState("");
  const { mutate } = useUpdateNickname();

  const onSendNickname = useCallback(() => {
    setNicknameFlag((value) => !value);
    mutate({ nickname: nickname });
  }, [mutate, nickname]);

  const bogusCheck = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      nickname.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      AlertComponent({
        icon: "error",
        title: "에러!",
        text: "제대로 된 닉네임을 입력해주세요",
      });
    } else {
      onSendNickname();
    }
  }, [nickname, onSendNickname]);

  return {
    setNicknameFlag,
    nicknameFlag,
    setNickname,
    bogusCheck,
  };
};

export default useNicknameHandle;
