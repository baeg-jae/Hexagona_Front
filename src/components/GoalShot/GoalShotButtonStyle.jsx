import { ButtonClicked } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import heart from "assets/img/heart.webp";
import styled from "@emotion/styled";
import x from "assets/img/x.webp";

export const StButton = styled.button`
  ${flex({})}
  width: 95.38px;
  height: 95.38px;
  margin-top: 63px;
  background: ${(props) =>
    props.red
      ? `linear-gradient(180deg, #FF0000 0%, #FF6B00 100%)`
      : `linear-gradient(180deg, #FFf 0%, #FFf 100%)`};
  border: 1px solid #f5f0f0;
  box-shadow: 6px 11px 17px rgba(0, 0, 0, 0.13);
  border-radius: 48.0529px;
  animation: ${(props) => props.flag && ButtonClicked()} 0.8s ease;
  &:disabled {
    background-color: inherit;
  }
`;

export const StImageDiv = styled.div`
  width: 35px;
  height: 35px;
  background-image: ${(props) => (props.heart ? `url(${heart})` : `url(${x})`)};
  background-position: center;
  background-size: cover;
`;
