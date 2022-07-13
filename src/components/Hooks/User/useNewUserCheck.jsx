import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import apis from "shared/api/main";

const __newUserCheck = async () => {
  const data = await apis.newOldUser();
  return data;
};

const useNewUserCheck = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const newUserCheckMutation = useMutation(__newUserCheck, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("users");
      if (data) navigate("/home");
    },
  });

  const onSkipHandler = useCallback(() => {
    newUserCheckMutation.mutate({});
  }, [newUserCheckMutation]);

  return onSkipHandler;
};

export default useNewUserCheck;
