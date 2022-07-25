import { useInfiniteQuery } from "react-query";
import apis from "shared/api/main";

const GetPost = () => {
  const fetchData = async ({ pageParam = 0 }) => {
    const { data } = await apis.getPosts(pageParam);

    return { data, nextPage: pageParam + 1, currentPage: pageParam };
  };

  const { data, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery(
    "todo",
    fetchData,
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    }
  );
  return { data, fetchNextPage, status, isFetchingNextPage };
};

export default GetPost;
