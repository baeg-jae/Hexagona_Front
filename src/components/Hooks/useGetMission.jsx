import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetMission = () => {
  const fetcher = async () => {
    const { data } = await apis.getTodos();
    return data;
  };

  return useQuery("todos", fetcher);
};

export default useGetMission;
