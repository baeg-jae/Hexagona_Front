import React from "react";
import { StWrapFlex } from "components/Common/GlobalStyles";
import Column from "components/FeedComponents/Column";
import NavigatorBar from "components/Common/NavigatorBar";

const Feed = () => {
  return (
    <>
      <StWrapFlex>
        <Column />
      </StWrapFlex>
      <NavigatorBar />
    </>
  );
};

export default Feed;
