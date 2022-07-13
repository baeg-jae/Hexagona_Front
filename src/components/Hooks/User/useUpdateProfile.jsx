import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";
import { QueryKeys } from "shared/QueryKeys";

const updateProfile = async (payload) => {
  const updatePic = await apis.updateUserProfile(payload);
  return updatePic;
};

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.user);
      Swal.fire({
        icon: "success",
        text: "프로필사진이 변경 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
    onError: (e) => {},
  });
};

export default useUpdateProfile;
