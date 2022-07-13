import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetAllLIkes = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getAllLikes(payload);
    return data;
  };

  return useQuery("like", fetcher);
};

export default useGetAllLIkes;
