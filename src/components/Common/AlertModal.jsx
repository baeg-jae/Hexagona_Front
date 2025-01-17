import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { useEffect } from "react";
import { ALERT_MODAL_POPUP } from "shared/data";
import { alertIconHandler } from "./ButtonPropsHandler";
import { alertModalAnim } from "./GlobalStyles";
import { useDispatch } from "react-redux";
import {
  ChatJoinModal,
  CommentAddError,
  CommentAddSuccess,
  CommentDeleteSuccess,
  MissionAddModalError,
  MissionAddModalSuccess,
  MissionDeleteModalSuccess,
  MissionEditModalSuccess,
  MissionPhotoModalSuccess,
  PostDeleteSuccess,
  SignUpDup,
  SignUpSuccess,
  UserProfileModalDupError,
  UserProfileModalSuccess,
} from "redux/modules/modal";
import { ChatJoinModalError } from "redux/modules/modal";

const AlertModal = ({ title, icon, type, subText, subText2 }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (type) {
        case "missionAddError":
          return dispatch(MissionAddModalError(false));
        case "missionAddSuccess":
          return dispatch(MissionAddModalSuccess(false));
        case "missionEditSuccess":
          return dispatch(MissionEditModalSuccess(false));
        case "missionDeleteSuccess":
          return dispatch(MissionDeleteModalSuccess(false));
        case "missionPhotoSuccess":
          return dispatch(MissionPhotoModalSuccess(false));
        case "userProfileSuccess":
          return dispatch(UserProfileModalSuccess(false));
        case "userProfileDupError":
          return dispatch(UserProfileModalDupError(false));
        case "commentAddSuccess":
          return dispatch(CommentAddSuccess(false));
        case "CommentAddError":
          return dispatch(CommentAddError(false));
        case "commentDeleteSuccess":
          return dispatch(CommentDeleteSuccess(false));
        case "postDeleteSuccess":
          return dispatch(PostDeleteSuccess(false));
        case "chatJoinAlert":
          return dispatch(ChatJoinModal(false));
        case "chatJoinError":
          return dispatch(ChatJoinModalError(false));
        case "signUpSuccess":
          return dispatch(SignUpSuccess(false));
        case "signUpDup":
          return dispatch(SignUpDup(false));
        default:
          return;
      }
    }, 700);
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, type]);

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
  z-index: 5;
  @media screen and (max-width: 350px) {
    .StInnerContainer {
      width: 270px !important;
    }
  }
  .StInnerContainer {
    ${flex({})}
    width: 320px;
    height: 251px;
    background: var(--white);
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
        font-family: Pretendard_Bold;
        font-size: 18px;
        color: var(--black);
        margin: 24px 0;
      }
    }
  }
`;

const StIcon = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${(props) => alertIconHandler(props.name)});
  background-position: center;
  background-size: cover;
`;
