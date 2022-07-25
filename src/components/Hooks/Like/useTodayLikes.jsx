import { useQuery } from "react-query";
import apis from "shared/api/main";

const useTodayLikes = () => {
  const fetcher = async () => {
    const { data } = await apis.getTodayLikes();
    return data;
  };

  return useQuery("todayLike", fetcher);
};

const GetTodayLikes = () => {
  const { data } = useTodayLikes();
  const todayLikes = data;
  return todayLikes;
};

export default GetTodayLikes;
