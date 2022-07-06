import React from "react";
import { handleTextColor, handleButtonColor } from "./ButtonHandler";
import styled from "@emotion/styled";
import flex from "components/Common/flex";

export const SocialButton = ({ link, text, name }) => {
  return (
    <StButtonDiv name={name}>
      <a href={link}>
        <span className="innerText">{text}</span>
      </a>
    </StButtonDiv>
  );
};

const StButtonDiv = styled.div`
  ${flex({ direction: "column" })}
  width: 327px;
  height: 56px;
  border-radius: 30px;
  margin-top: 8px;
  background-color: ${(props) => handleButtonColor(props.name)};
  color: ${(props) => handleTextColor(props.name)};
  .innerText {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;
