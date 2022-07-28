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
  height: 49px;
  margin-left: 21px;
  font-size: 30px;
`;
