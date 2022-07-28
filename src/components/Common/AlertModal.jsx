import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { useEffect } from "react";
import { ALERT_MODAL_ICON, ALERT_MODAL_POPUP } from "shared/data";
import { alertIconHandler } from "./ButtonPropsHandler";
import { alertModalAnim, alertModalIconAnim } from "./GlobalStyles";

const AlertModal = ({ title, icon, set }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      set((value) => !value);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [set]);

  return (
    <StModal>
      <div className="StInnerContainer">
        <div className="InfoContainer">
          <StIcon name={icon} />
          <span className="alertTitle">{title}</span>
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
    animation: ${alertModalAnim} ${ALERT_MODAL_POPUP}s ease;
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

const StIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-image: url(${(props) => alertIconHandler(props.name)});
  background-position: center;
  background-size: cover;
  animation: ${alertModalIconAnim} ${ALERT_MODAL_ICON}s ease;
`;
