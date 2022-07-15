import React from "react";
import Column from "components/Feed/Column";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPost from "components/Hooks/useGetPost";

const Feed = () => {
  const { data, isFetching } = useGetPost();
  return (
    <>
      <Column data={data} isFetching={isFetching} />
      <NavigatorBar />
    </>
  );
};

export default Feed;
