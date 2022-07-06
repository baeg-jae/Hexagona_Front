import One from "assets/img/category1.png";
import Two from "assets/img/category2.png";
import Three from "assets/img/category3.png";
import Four from "assets/img/category4.png";

export const handleButtonColor = (color) => {
  switch (color) {
    case "kakao":
      return "#FFCF54;";
    case "naver":
      return "#00A857";
    default:
      return "#fff";
  }
};

export const handleTextColor = (color) => {
  switch (color) {
    case "kakao":
      return "#513F00";
    case "naver":
      return "#fff";
    default:
      return "#555";
  }
};

export const handlePictureProps = (text) => {
  switch (text) {
    case "one":
      return One;
    case "two":
      return Two;
    case "three":
      return Three;
    case "four":
      return Four;
    default:
      return;
  }
};
