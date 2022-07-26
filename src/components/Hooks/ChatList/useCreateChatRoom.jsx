import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import { useNavigate } from "react-router-dom";

const createChatRoom = async (payload) => {
  const createChatRoomDB = await apis.createChatRoom(payload);
  return createChatRoomDB;
};

const useCreateChatRoom = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(createChatRoom, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("chat");
      if (data !== undefined) navigate(`/chat/${data.data.chatRoomId}`);
      return data;
    },
    onError: (e) => {
      console.log(e);
    },
  });
};

export default useCreateChatRoom;
