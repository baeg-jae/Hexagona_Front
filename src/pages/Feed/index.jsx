import { Helmet } from "react-helmet";
import FeedContainer from "components/Feed/FeedContainer";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPost from "components/Hooks/useGetPost";

const Feed = () => {
  const { data, isFetching } = useGetPost();
  return (
    <div className="main">
      <Helmet>
        <title>피드: 갓생메이커</title>
      </Helmet>
      <FeedContainer data={data} isFetching={isFetching} />
      <NavigatorBar />
    </div>
  );
};

export default Feed;
