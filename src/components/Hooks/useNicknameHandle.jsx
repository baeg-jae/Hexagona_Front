import { useState } from "react";
import useUpdateNickname from "components/Hooks/useUpdateNickname";

const useNicknameHandle = () => {
  const [nicknameFlag, setNicknameFlag] = useState(false);
  const [nickname, setNickname] = useState("");
  const { mutate } = useUpdateNickname();

  const onSendNickname = (setter) => {
    setter((value) => !value);
    mutate({ nickname: nickname });
  };
  return {
    setNicknameFlag,
    nicknameFlag,
    setNickname,
    onSendNickname,
  };
};

export default useNicknameHandle;
