import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetPost = () => {
  const fetcher = async () => {
    const { data } = await apis.getPost();
    return data;
  };

  return useQuery("post", fetcher);
};

export default useGetPost;
