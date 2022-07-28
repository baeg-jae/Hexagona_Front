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
`;

export const StInput = styled.input`
  font-size: 16px;
  &::placeholder {
    color: #b7b7b7;
    font-size: 16px;
  }
`;

export const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column" })}
  color: #665547;
  .bigSpan {
    font-weight: 700;
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
 0% { 
    opacity: 0; 
  }
  99%{
    opacity: 0;
  }
  100% { 
    opacity: 1; 
  }
`;
