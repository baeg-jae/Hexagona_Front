import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { FlexRowDiv, StModalGlobal } from "./GlobalStyles";
import { StButton } from "./GlobalStyles";

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

const StModal = styled(StModalGlobal)`
  .StInnerContainer {
    height: 251px;
    .InfoContainer {
      ${flex({
        direction: "column",
        justify: "flex-start",
        align: "flex-start",
      })}
      height: 179px;
      .missionTitle {
        font-weight: 700;
        font-size: 18px;
        color: var(--black);
        margin-bottom: 24px;
      }
      .missionInput {
        width: 242px;
        height: 61px;
        background: var(--gary-0);
        border-radius: 8px;
        border: none;
        margin-bottom: 24px;
        padding: 16px;
      }
    }
  }
`;
