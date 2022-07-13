import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetComment = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getComment(payload);
    return data;
  };

  return useQuery("comment", fetcher);
};

export default useGetComment;
