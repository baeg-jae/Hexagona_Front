import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetGoalShot = () => {
  const fetcher = async () => {
    const { data } = await apis.getGoalShot();
    return data;
  };
  return useQuery("goalshot", fetcher);
};

export default useGetGoalShot;
