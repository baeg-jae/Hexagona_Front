import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import flex from "./flex";
import "./font.css";

export const FlexRowDiv = styled.div`
  ${flex({})}
`;

export const FlexColumnDiv = styled.div`
  ${flex({ direction: "column" })}
`;

export const StWrap = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (min-height: 1000px) {
    height: 1000px;
  }
`;

export const StInput = styled.input`
  font-size: 16px;
  &::placeholder {
    color: #b7b7b7;
    font-size: 16px;
  }
`;

export const StButton = styled.button`
  width: 132px;
  height: 48px;
  border-radius: 8px;
  margin: 0 4.06px 0 4.06px;
  border: 1px solid ${(props) => (props.color === "brown" ? "none" : "#CACDD3")};
  background-color: ${(props) =>
    props.color === "brown" ? "#956C4A" : "var(--white)"};
  color: ${(props) => (props.color === "brown" ? "#fff" : "#4C525C")};
  @media screen and (max-width: 350px) {
    width: 100px;
  }
`;

export const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  color: #665547;
  .bigSpan {
    font-weight: 700;
    font-family: Pretendard_Bold;
    font-size: 64px;
    line-height: 130%;
    margin-bottom: 6px;
  }
  .smallSpan {
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 42px;
  }
`;

export const StInputDivGlobal = styled.div`
  ${flex({ justify: "space-around" })}
  width: 83%;
  height: 40px;
  margin-left: 12px;
  border: 1px solid var(--gray-5);
  border-radius: 55px;
  .commentInput {
    width: calc(100% - 100px);
    border: none;
    margin-left: 10px;
    &:focus {
      outline: none;
    }
  }
  .commentButton {
    background-color: transparent;
    font-weight: 700;
    font-family: Pretendard_Bold;
    line-height: 20px;
    color: #4876ef;
    margin-right: 15px;
  }
`;

export const StModalGlobal = styled.div`
  ${flex({})}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  .StInnerContainer {
    ${flex({})}
    width: 320px;
    height: 383px;
    background: var(--white);
    border-radius: 8px;
    @media screen and (max-width: 350px) {
      width: 270px;
    }
    .InfoContainer {
      ${flex({
        direction: "column",
      })}
      width: 272px;
      .TextContainer {
        ${flex({ justify: "flex-start" })}
        width: 100%;
        .missionTitle {
          font-weight: 700;
          font-family: Pretendard_Bold;
          font-size: 18px;
          color: var(--black);
          margin-bottom: 24px;
          @media screen and (max-width: 350px) {
            margin-left: 20px;
          }
        }
      }
      label {
        ${flex({})}
        width: 193px;
        height: 193px;
        border: 1px solid var(--gray-3);
        border-radius: 100%;
        margin-bottom: 24px;
      }
    }
  }
`;

export const StImg = styled.div`
  width: 50px;
  height: 43px;
  margin-right: 20px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

export const fadeAnimation = keyframes`
 0% { 
    opacity: 0; 
  }
  100% { 
    opacity: 1; 
  }
`;

export const dropBoxAnimation = keyframes`
 0% { 
  transform: translateX(50px) scale(0);
}
  100% {  
    transform: translateX(0) scale(1); 
  }
`;

export const ButtonClicked = () => keyframes`
0%{
  transform: translateY(0);
}
50%{
  transform: translateY(-400px) rotateY(360deg) scale(1.5);
}
100%{
  transform: translateY(0);
}
`;

export const CenterCardAnim = () => keyframes`
  0% {  
    transform: translateX(0) translateY(0);
    opacity: 1;
}
  100% {  
    transform: translateX(-295px) translateY(50px); 
    opacity: 0.6;
}
`;

export const RightCardAnim = () => keyframes`
  0% {  
    transform: translateX(0) translateY(0); 
    opacity: 0.6;
}
  100% {  
    transform: translateX(-295px) translateY(-50px); 
    opacity: 1;
}
`;

export const RightRightCardAnim = () => keyframes`
  0% {  
    transform: translateX(0); 
}
  100% {  
    transform: translateX(-295px); 
}
`;

export const SurveyAnim = () => keyframes`
  0% {  
    transform: translateY(-5PX); 
}
50%{
  transform: translateY(0); 
}
  100% {  
    transform: translateY(-5px); 
}
`;

export const SurveyAnim2 = () => keyframes`
  0% {  
    transform: translateX(-1PX); 
}
50%{
  transform: translateX(1px); 
}
  100% {  
    transform: translateX(-1px); 
}
`;

export const SkeletonAnim = () => keyframes`
  0% {  
  background-color: #e9e9e9;
}

  100% { 
    background-color: hsl(200, 20%, 95%); 
}
`;

export const gradientFade = keyframes`
  0%,50%{
    opacity: 0;
  }
  100% { 
    opacity: 1; 
  }
`;

export const alertModalAnim = keyframes`
 0% { 
  transform: scale(0);
}
  100% {  
    transform: scale(1); 
  }
`;

export const alertModalIconAnim = keyframes`
 0% { 
  transform: rotateY(0);
}
  100% {  
    transform: rotateY(360deg); 
  }
`;

export const TalkCloudAnim = keyframes`
 0% { 
   transform: translateY(0);
  }
  50%{
    transform: translateY(-10px);
  }
  100% { 
    transform: translateY(0);
  }
`;
