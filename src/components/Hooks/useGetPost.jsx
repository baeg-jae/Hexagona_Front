import { useQuery } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const useGetPost = () => {
  const fetcher = async () => {
    const { data } = await apis.getPost();
    return data;
  };

  return useQuery(QueryKeys.feed, fetcher, {
    refetchOnWindowFocus: "always",
  });
};

export default useGetPost;
