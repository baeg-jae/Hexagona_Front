import { useState, useCallback } from "react";
import useUpdateProfile from "components/Hooks/User/useUpdateProfile";

const useImageHandler = () => {
  const [profileFlag, setProfileFlag] = useState(false);
  const [profile, setProfile] = useState();
  const { mutate } = useUpdateProfile();

  const onSendProfile = useCallback(() => {
    setProfileFlag((value) => !value);
    mutate({ profile: profile });
  }, [mutate, profile]);

  return {
    setProfileFlag,
    profileFlag,
    setProfile,
    onSendProfile,
  };
};

export default useImageHandler;
