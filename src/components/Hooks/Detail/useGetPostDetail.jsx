import { useQuery } from "react-query";
import apis from "shared/api/main";
import { QueryKeys } from "shared/QueryKeys";

const useGetPostDetail = (payload) => {
  const fetcher = async () => {
    const { data } = await apis.getPostDetail(payload);
    return data;
  };

  return useQuery(QueryKeys.detail, fetcher);
};

export default useGetPostDetail;

// 사용방법
// import useGetPostDetail from "components/Hooks/useGetPostDetail";
// import { useParams } from "react-router-dom";

// const { postId } = useParams();
// const { data } = useGetPostDetail(postId);
