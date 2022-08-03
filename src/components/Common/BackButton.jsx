import { MdArrowBackIosNew } from "react-icons/md";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ link }) => {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate(link);
  }, [navigate, link]);

  return (
    <StWrap onClick={onClickHandler}>
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
  cursor: pointer;
`;
