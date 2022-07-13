import { useQuery } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const useGetUser = () => {
  const fetcher = async () => {
    const { data } = await apis.getUser();
    return data;
  };

  return useQuery(QueryKeys.user, fetcher);
};

export default useGetUser;
