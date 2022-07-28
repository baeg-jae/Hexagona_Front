import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { alertIconHandler } from "./ButtonPropsHandler";
import { FlexRowDiv } from "./GlobalStyles";

const AlertModal = ({ title, ConfirmText, icon }) => {
  return (
    <StModal>
      <div className="StInnerContainer">
        <div className="InfoContainer">
          <StIcon name={icon} />
          <span className="alertTitle">{title}</span>
          <FlexRowDiv>
            <StButton color="brown">{ConfirmText}</StButton>
          </FlexRowDiv>
        </div>
      </div>
    </StModal>
  );
};

export default AlertModal;

const StModal = styled.div`
  ${flex({})}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  .StInnerContainer {
    ${flex({})}
    width: 320px;
    height: 251px;
    background: #ffffff;
    border-radius: 8px;
    .InfoContainer {
      ${flex({
        direction: "column",
      })}
      width: 272px;
      height: 179px;
      .alertTitle {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #292e41;
        margin: 24px 0;
      }
    }
  }
`;

const StButton = styled.button`
  width: 131.94px;
  height: 48px;
  border-radius: 8px;
  margin: 0 4.06px 0 4.06px;
  border: 1px solid ${(props) => (props.color === "brown" ? "none" : "#CACDD3")};
  background-color: ${(props) =>
    props.color === "brown" ? "#956C4A" : "var(--white)"};
  color: ${(props) => (props.color === "brown" ? "#fff" : "#4C525C")};
`;

const StIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-image: url(${(props) => alertIconHandler(props.name)});
  background-position: center;
  background-size: cover;
`;
