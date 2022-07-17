import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserProfile } from "redux/modules/user";
import useUpdateProfile from "components/Hooks/User/useUpdateProfile";
import AlertComponent from "components/Common/AlertComponent";

const useImageHandler = () => {
  const [profileFlag, setProfileFlag] = useState(false);
  const { profileTempImg } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState();
  const { mutate } = useUpdateProfile();

  const onSendProfile = useCallback(() => {
    setProfileFlag((value) => !value);
    const formData = new FormData();
    formData.append("file", profile);
    dispatch(addUserProfile({ profileImg: profileTempImg }));
    mutate(formData);
    AlertComponent({
      icon: "success",
      text: "프로필사진이 변경 되었습니다",
    });
  }, [mutate, profile, dispatch, profileTempImg]);

  return {
    setProfileFlag,
    profileFlag,
    setProfile,
    onSendProfile,
  };
};

export default useImageHandler;
