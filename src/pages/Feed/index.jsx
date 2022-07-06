import React, { useEffect, useRef } from "react";
import { StWrapFlex } from "components/Common/GlobalStyles";
import Row from "components/FeedComponents/Row";

const ScrollLocation = 70;

const Feed = () => {
  const scrollRef = useRef(null);

  const onScrollEvent = () => {
    scrollRef.current.scrollTo(ScrollLocation, 0);
  };

  useEffect(() => {
    onScrollEvent(scrollRef);
  });

  return (
    <StWrapFlex>
      <Row />
      <Row scrollRef={scrollRef} />
      <Row />
    </StWrapFlex>
  );
};

export default Feed;
