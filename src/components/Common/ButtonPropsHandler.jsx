import One from "assets/img/category1.png";
import Two from "assets/img/category2.png";
import Three from "assets/img/category3.png";
import Four from "assets/img/category4.png";
import mOne from "assets/img/mission1.png";
import mTwo from "assets/img/mission2.png";
import mThree from "assets/img/mission3.png";
import mFour from "assets/img/mission4.png";
import EmptyMission from "assets/img/noMission.png";

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

export const missionCamera = (number) => {
  switch (number) {
    case 0:
      return mOne;
    case 1:
      return mTwo;
    case 2:
      return mThree;
    case 3:
      return mFour;
    default:
      return EmptyMission;
  }
};

export const missionBG = (number) => {
  switch (number) {
    case 0:
      return "#F9F5F2";
    case 1:
      return "#F5F2FF";
    case 2:
      return "#EBF4F3";
    case 3:
      return "#ECF9D6";
    default:
      return "#fff";
  }
};

export const missionText = (number) => {
  switch (number) {
    case 0:
      return "#845B39";
    case 1:
      return "#3B2E68";
    case 2:
      return "#40605C";
    case 3:
      return "#384424";
    default:
      return "#727272";
  }
};
