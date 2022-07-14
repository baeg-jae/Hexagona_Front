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
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 42px;
  }
`;
export const scaleAnimation = keyframes`
  50% {
    transform: scale(1.05);
  }
`;

export const fadeAnimation = keyframes`
 0% { 
  background-color: rgba(0,0,0,1);
  color: rgba(0,0,0,1);
  opacity: 0; 
}
  100% { opacity: 1; }
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
  50% {  
    transform: translateY(-20px); 
}
  100% {  
    transform: translateY(0); 
}
`;

export const CenterCardAnim = () => keyframes`
  0% {  
    transform: translateX(0) translateY(0); 
}
  100% {  
    transform: translateX(-290px) translateY(50px); 
}
`;

export const RightCardAnim = () => keyframes`
  0% {  
    transform: translateX(0) translateY(0); 
}
  100% {  
    transform: translateX(-290px) translateY(-50px); 
}
`;
