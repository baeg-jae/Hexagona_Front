import { MdArrowBackIosNew } from "react-icons/md";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import useBack from "components/Hooks/useBack";

const BackButton = () => {
  const back = useBack();
  return (
    <StWrap onClick={back}>
      <MdArrowBackIosNew />
    </StWrap>
  );
};

export default BackButton;

const StWrap = styled.div`
  ${flex({})}
  width: 20px;
  height: 20px;
  margin-left: 24px;
  font-size: 30px;
`;
