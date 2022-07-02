import React from "react";
import styled from "@emotion/styled";

const Button = ({ theme, text, click }) => {
  return (
    <Btn theme={theme} onClick={click}>
      {text}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  margin: 2rem 0 5rem 0;
  width: 80%;
  height: 60px;
  background-color: ${(props) =>
    props.theme === "dark" ? "var(--black)" : "var(--white)"};
  color: ${(props) =>
    props.theme === "dark" ? "var(--white)" : "var(--black)"};
`;
