import React, { useCallback, useEffect, useRef } from "react";
import { StWrapFlex } from "components/Common/GlobalStyles";
import Row from "components/FeedComponents/Row";
import NavigatorBar from "components/Common/NavigatorBar";

const ScrollLocation = 70;

const Feed = () => {
  const scrollRef = useRef(null);

  const onScrollEvent = useCallback(() => {
    scrollRef.current.scrollTo(ScrollLocation, 0);
  }, []);

  useEffect(() => {
    onScrollEvent(scrollRef);
  });

  return (
    <>
      <StWrapFlex>
        <Row />
        <Row scrollRef={scrollRef} />
        <Row />
      </StWrapFlex>
      <NavigatorBar />
    </>
  );
};

export default Feed;
