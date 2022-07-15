import { useState, useCallback } from "react";
import useUpdateProfile from "components/Hooks/User/useUpdateProfile";

const useImageHandler = () => {
  const [profileFlag, setProfileFlag] = useState(false);
  const [profile, setProfile] = useState();
  const { mutate } = useUpdateProfile();

  const onSendProfile = useCallback(() => {
    setProfileFlag((value) => !value);
    const formData = new FormData();
    formData.append("file", profile);
    mutate(formData);
  }, [mutate, profile]);

  return {
    setProfileFlag,
    profileFlag,
    setProfile,
    onSendProfile,
  };
};

export default useImageHandler;
