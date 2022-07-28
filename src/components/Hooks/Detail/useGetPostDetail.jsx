import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetPostDetail = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getPostDetail(payload);
    return data;
  };
  return useQuery("post", fetcher);
};

export default useGetPostDetail;
