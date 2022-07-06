import styled from "@emotion/styled";
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
