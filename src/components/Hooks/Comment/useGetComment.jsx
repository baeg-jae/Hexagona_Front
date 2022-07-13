import { useQuery } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const useGetComment = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getComment(payload);
    return data;
  };

  return useQuery(QueryKeys.comment, fetcher);
};

export default useGetComment;
