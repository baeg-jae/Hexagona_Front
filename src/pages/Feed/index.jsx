import { Helmet } from "react-helmet";
import FeedContainer from "components/Feed/FeedContainer";
import NavigatorBar from "components/Common/NavigatorBar";

const Feed = () => {
  return (
    <div className="main">
      <Helmet>
        <title>피드: 갓생메이커</title>
      </Helmet>
      <FeedContainer />
      <NavigatorBar />
    </div>
  );
};

export default Feed;
