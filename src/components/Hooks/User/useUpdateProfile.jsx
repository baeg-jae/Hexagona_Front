import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const updateProfile = async (payload) => {
  console.log(payload);
  const updatePic = await apis.updateUserProfile(payload);
  return updatePic;
};

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("user");
      AlertComponent({
        icon: "success",
        text: "프로필사진이 변경 되었습니다",
      });
      console.log(data);
    },
    onError: (e) => {},
  });
};

export default useUpdateProfile;
