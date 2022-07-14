import React from "react";
import Column from "components/Feed/Column";
import NavigatorBar from "components/Common/NavigatorBar";
import Search from "components/Common/Search";

const Feed = () => {
  return (
    <>
      <Search />
      <Column />
      <NavigatorBar />
    </>
  );
};

export default Feed;
