import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { GrCircleInformation } from "react-icons/gr";

const InfoButton = ({ click }) => {
  return (
    <StInfo onClick={click}>
      <GrCircleInformation />
    </StInfo>
  );
};

export default InfoButton;

const StInfo = styled.button`
  ${flex({})}
  position: absolute;
  bottom: -30px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 40px;
  background-color: rgba(255, 255, 255, 0.5);
`;
