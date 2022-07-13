import { useQuery } from "react-query";
import apis from "shared/api/main";

const useGetUser = () => {
  const fetcher = async () => {
    const { data } = await apis.getUser();
    localStorage.setItem("nickname", data.nickname);
    return data;
  };

  return useQuery("user", fetcher);
};

export default useGetUser;
