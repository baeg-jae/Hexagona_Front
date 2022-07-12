import { useEffect } from "react";

const useScroll = () => {
  return useEffect(() => {
    let fetching = false;
    const onScroll = (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        console.log("fetched");
        fetching = false;
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
};

export default useScroll;
