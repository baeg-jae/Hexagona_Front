import { useQueryClient, useMutation } from "react-query";
import { useCallback } from "react";
import apis from "shared/api/main";

const __newUserCheck = async () => {
  const data = await apis.newOldUser();
  return data;
};

const useNewUserCheck = () => {
  const queryClient = useQueryClient();

  const newUserCheckMutation = useMutation(__newUserCheck, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const onSkipHandler = useCallback(() => {
    newUserCheckMutation.mutate({});
  }, [newUserCheckMutation]);

  return onSkipHandler;
};

export default useNewUserCheck;
