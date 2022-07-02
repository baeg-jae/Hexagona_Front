import styled from "@emotion/styled";
import flex from "./flex";

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
  width: 80%;
  height: 50px;
  border-radius: 8px;
  font-size: 1.2rem;
  &::placeholder {
    font-size: 0.8rem;
  }
`;
