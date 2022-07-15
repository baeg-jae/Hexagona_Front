import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { FlexRowDiv } from "./GlobalStyles";

const InputModal = ({
  set,
  cancel,
  confirm,
  title,
  cancelTitle,
  confirmTitle,
  placeholder,
  count,
}) => {
  return (
    <StModal>
      <div className="StInnerContainer">
        <div className="InfoContainer">
          <span className="missionTitle">{title}</span>
          <input
            className="missionInput"
            type="text"
            placeholder={`ex) ${placeholder}`}
            onChange={(e) => set(e.target.value)}
            maxLength={count}
          />
          <FlexRowDiv>
            <StButton onClick={cancel}>{cancelTitle}</StButton>

            <StButton color="brown" onClick={confirm}>
              {confirmTitle}
            </StButton>
          </FlexRowDiv>
        </div>
      </div>
    </StModal>
  );
};

export default InputModal;

const StModal = styled.div`
  ${flex({})}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  .StInnerContainer {
    ${flex({})}
    width: 320px;
    height: 251px;
    background: #ffffff;
    border-radius: 8px;
    .InfoContainer {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      width: 272px;
      height: 179px;
      .missionTitle {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #292e41;
        margin-bottom: 24px;
      }
      .missionInput {
        width: 242px;
        height: 61px;
        background: #f7f7f7;
        border-radius: 8px;
        border: none;
        margin-bottom: 24px;
        padding: 16px;
        &::placeholder {
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
          color: #b5b5b5;
        }
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
