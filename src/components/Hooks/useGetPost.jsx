import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetPost = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getPostById(payload);
    return data;
  };

  return useQuery("posts", fetcher, {
    refetchOnWindowFocus: "always",
  });
};

export default useGetPost;
