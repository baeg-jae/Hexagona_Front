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
  list1,
  list2,
  isListed,
}) => {
  return (
    <StModal>
      <div className="StInnerContainer">
        <div className="InfoContainer">
          <span className="missionTitle">{title}</span>
          {isListed && (
            <div>
              <span>
                ({list1}, {list2})
              </span>
            </div>
          )}
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
        font-family: Pretendard_Bold;
        font-size: 18px;
        color: var(--black);
        margin-bottom: 6px;
      }
      .missionInput {
        width: 242px;
        height: 61px;
        background: var(--gary-0);
        border-radius: 8px;
        border: none;
        margin: 12px 0 24px 0;
        padding: 16px;
      }
      span {
        font-size: 14px;
        color: var(--gray-7);
        margin: 4px 0;
      }
    }
  }
  @media screen and (max-width: 350px) {
    span {
      margin-left: 20px !important;
    }
    .missionInput {
      margin-left: 20px !important;
      width: 202px !important;
    }
    button {
      margin-left: 20px !important;
    }
  }
`;
