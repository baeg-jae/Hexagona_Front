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
  width: 90%;
  height: 50px;
`;
