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

export const categoryTextColorHandler = (col) => {
  switch (col) {
    case "one":
      return "#FFF";
    case "two":
      return "#3F3F3F";
    case "three":
      return "#FFF";
    case "four":
      return "#202020";
    default:
      return;
  }
};

export const categoryBGColorHandler = (col) => {
  switch (col) {
    case "one":
      return "rgba(255, 255, 255, 0.25)";
    case "two":
      return "rgba(255, 255, 255, 0.6)";
    case "three":
      return "#5E534C";
    case "four":
      return "rgba(255, 255, 255, 0.7)";
    default:
      return;
  }
};
