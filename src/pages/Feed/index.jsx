import React from "react";
import FeedContainer from "components/Feed/FeedContainer";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPost from "components/Hooks/useGetPost";

const Feed = () => {
  const { data, isFetching } = useGetPost();
  return (
    <div className="main">
      <FeedContainer data={data} isFetching={isFetching} />
      <NavigatorBar />
    </div>
  );
};

export default Feed;
