import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const BackButton = () => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    navigate(-1);
  };
  return (
    <StWrap onClick={onBackHandler}>
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
