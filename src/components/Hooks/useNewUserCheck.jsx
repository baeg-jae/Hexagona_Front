import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { MODAL_TIME } from "shared/data";
import apis from "shared/api/main";
import Swal from "sweetalert2";

const __newUserCheck = async () => {
  const data = await apis.newOldUser();
  return data;
};

const useNewUserCheck = () => {
  const navigate = useNavigate();
  const onSkipHandler = () => {
    newUserCheckMutation.mutate({});
  };
  const queryClient = useQueryClient();

  const newUserCheckMutation = useMutation(__newUserCheck, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("users");
      Swal.fire({
        icon: "success",
        text: "스킵되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
      if (data) navigate("/home");
    },
  });
  return onSkipHandler;
};

export default useNewUserCheck;
