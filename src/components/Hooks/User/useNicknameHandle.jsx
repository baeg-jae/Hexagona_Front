import { useState, useCallback } from "react";
import useUpdateNickname from "components/Hooks/User/useUpdateNickname";
import { badWords } from "shared/TextsData";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "에러!",
        text: "제대로 된 닉네임을 입력해주세요",
        icon: "error",
        confirmButtonText: "Cool",
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
