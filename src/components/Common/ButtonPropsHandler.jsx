import One from "assets/img/category1.webp";
import Two from "assets/img/category2.webp";
import Three from "assets/img/category3.webp";
import Four from "assets/img/category4.webp";

import Pic1 from "assets/img/main_t1.webp";
import Pic2 from "assets/img/main_t2.webp";
import Pic3 from "assets/img/main_t3.webp";

import Splash1 from "assets/img/splash_01.webp";
import Splash2 from "assets/img/splash_02.webp";
import Splash3 from "assets/img/splash_03.webp";
import Splash4 from "assets/img/splash_04.webp";

export const handleMainTutorial = (img) => {
  switch (img) {
    case "one":
      return Pic1;
    case "two":
      return Pic2;
    case "three":
      return Pic3;
    default:
      return;
  }
};

export const handleSplashTutorial = (img) => {
  switch (img) {
    case "one":
      return Splash2;
    case "two":
      return Splash1;
    case "three":
      return Splash3;
    case "four":
      return Splash4;
    default:
      return;
  }
};

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
