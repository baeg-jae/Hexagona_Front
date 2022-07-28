import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";

const updateProfile = async (payload) => {
  const updatePic = await apis.updateUserProfile(payload);
  return updatePic;
};

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("user");
      return data;
    },
    onError: () => {},
  });
};

export default useUpdateProfile;
