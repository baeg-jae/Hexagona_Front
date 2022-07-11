import apis from "shared/api/main";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

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
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("users");
      // 회원가입에 통과되면 화면전환
      Swal.fire({
        icon: "success",
        text: "스킵되었습니다",
        showConfirmButton: false,
        timer: 1500,
      });
      if (data) navigate("/home");
    },
  });
  return onSkipHandler;
};

export default useNewUserCheck;
