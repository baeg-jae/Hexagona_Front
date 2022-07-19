import FeedContainer from "components/Feed/FeedContainer";
import NavigatorBar from "components/Common/NavigatorBar";
import WebTitle from "components/Common/WebTitle";

const Feed = () => {
  return (
    <div className="main">
      <WebTitle text="피드: 갓생메이커" />
      <FeedContainer />
      <NavigatorBar />
    </div>
  );
};

export default Feed;
