import { useQuery } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const useGetMission = () => {
  const fetcher = async () => {
    const { data } = await apis.getTodos();
    return data;
  };

  return useQuery(QueryKeys.mission, fetcher);
};

export default useGetMission;
