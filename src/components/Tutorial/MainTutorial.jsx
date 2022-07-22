import styled from "@emotion/styled";
import flex from "components/Common/flex";

const MainTutorial = () => {
  return (
    <StWrap>
      <div className="modal_div">
        <StUpperContainer>
          <div className="modal_icon"></div>
          <span className="modal_content">튜토리얼</span>
        </StUpperContainer>
        <StLowerContainer>
          <StButton left>스킵하기</StButton>
        </StLowerContainer>
      </div>
    </StWrap>
  );
};

export default MainTutorial;

const StWrap = styled.div`
  ${flex({ direction: "column" })}
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  .modal_div {
    ${flex({ direction: "column", justify: "space-between" })}
    width: 350px;
    height: 400px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 15px;
    border: 1px solid #cecece;
    box-shadow: 0px 20px 0px -10px #ffffff, 0px -20px 0px -10px #ffffff,
      20px 0px 0px -10px #ffffff, -20px 0px 0px -10px #ffffff,
      0px 0px 0px 10px #ff0000, 11px 20px 13px -4px rgba(0, 0, 0, 0);
  }
  .modal_icon {
    ${flex({ direction: "column" })}
    width: 63px;
    height: 63px;
    background: var(--profile_bg);
    margin-top: 34px;
    border-radius: 100%;
  }
  .modal_content {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray);
    margin-top: 16px;
  }
`;

const StUpperContainer = styled.div`
  ${flex({ direction: "column" })}
`;

const StLowerContainer = styled.div`
  ${flex({})}
`;

const StButton = styled.button`
  margin-top: 30px;
  width: 188px;
  height: 42px;
  background: var(--secondary);
  border: 1px solid var(--primary);
  border-radius: ${(props) =>
    props.left ? "0px 0px 0px 5px" : " 0px 0px 5px 0px"};
  span {
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;
    color: var(--white);
  }
`;
