import { ButtonClicked } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import heart from "assets/img/heart.webp";
import styled from "@emotion/styled";
import x from "assets/img/x.webp";

export const StButton = styled.button`
  ${flex({})}
  width: 72px;
  height: 72px;
  background: ${(props) =>
    props.red
      ? `linear-gradient(180deg, var(--red) 0%, var(--orange) 100%)`
      : `linear-gradient(180deg, var(--white) 0%, var(--white) 100%)`};
  box-shadow: 6px 11px 17px rgba(0, 0, 0, 0.15);
  border-radius: 100%;
  animation: ${(props) => props.flag && ButtonClicked()} 0.8s ease;
  &:disabled {
    background-color: inherit;
  }
  @media screen and (max-height: 700px) {
    width: 80px;
    height: 80px;
  }
`;

export const StImageDiv = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${(props) => (props.heart ? `url(${heart})` : `url(${x})`)};
  background-position: center;
  background-size: cover;
`;
