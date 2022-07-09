import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetPostDetail = () => {
  const fetcher = async () => {
    const { data } = await apis.getPostDetail();
    return data;
  };

  return useQuery("post", fetcher);
};

export default useGetPostDetail;
