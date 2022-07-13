import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetUser = () => {
  const fetcher = async () => {
    const { data } = await apis.getUser();
    return data;
  };

  return useQuery("user", fetcher);
};

export default useGetUser;
