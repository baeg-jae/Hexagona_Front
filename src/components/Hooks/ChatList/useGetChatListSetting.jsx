import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetChatListSetting = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getChatListSetting(payload);
    return data;
  };
  return useQuery("chatList", fetcher);
};

export default useGetChatListSetting;
