import React from "react";
import styled from "@emotion/styled";

const Button = ({ theme, text, click, disabled }) => {
  return (
    <Btn theme={theme} onClick={click} disabled={disabled}>
      {text}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  width: 327px;
  height: 56px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  background-color: ${(props) =>
    props.theme === "dark" ? "var(--black)" : "var(--white)"};
  color: ${(props) =>
    props.theme === "dark" ? "var(--white)" : "var(--black)"};
`;
