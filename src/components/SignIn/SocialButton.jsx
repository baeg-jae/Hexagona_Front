import {
  handleTextColor,
  handleButtonColor,
} from "components/Common/ButtonPropsHandler";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

export const SocialButton = ({ link, text, name }) => {
  return (
    <StButtonDiv name={name} href={link}>
      <span className="innerText">{text}</span>
    </StButtonDiv>
  );
};

const StButtonDiv = styled.a`
  ${flex({ direction: "column" })}
  width: 327px;
  height: 56px;
  border-radius: 10px;
  margin-top: 8px;
  background-color: ${(props) => handleButtonColor(props.name)};
  .innerText {
    font-size: 16px;
    color: ${(props) => handleTextColor(props.name)};
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;
