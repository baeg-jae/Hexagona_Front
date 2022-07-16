import { useQuery } from "react-query";
import apis from "shared/api/main";

export const useGetMyPosts = () => {
  const fetcher = async () => {
    const { data } = await apis.getMyPost();
    return data;
  };
  return useQuery("myPosts", fetcher);
};

const GetMyPosts = () => {
  const { data } = useGetMyPosts();
  const myPosts = data;
  return myPosts;
};

export default GetMyPosts;
