import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetIfLiked = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getIfLiked(payload);
    return data;
  };

  return useQuery("liked", fetcher);
};

export default useGetIfLiked;
