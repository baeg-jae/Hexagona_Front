import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetChatSetting = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getChatSetting(payload);
    return data;
  };
  return useQuery("chat", fetcher);
};

export default useGetChatSetting;
