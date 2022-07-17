import { FlexRowDiv } from "./GlobalStyles";
import { useState } from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import Upload from "assets/img/upload.webp";
import { useDispatch } from "react-redux";
import { addUserProfileTemp } from "redux/modules/user";

const ImageModal = ({
  set,
  cancel,
  confirm,
  title,
  cancelTitle,
  confirmTitle,
}) => {
  const [fileImage, setFileImage] = useState();
  const dispatch = useDispatch();

  const saveFileImage = async (e) => {
    const profilePicture = URL.createObjectURL(e.target.files[0]);
    setFileImage(profilePicture);
    dispatch(addUserProfileTemp({ profile: profilePicture }));
    set(e.target.files[0]);
  };
  return (
    <StModal>
      <div className="StInnerContainer">
        <div className="InfoContainer">
          <div className="TextContainer">
            <span className="missionTitle">{title}</span>
          </div>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={saveFileImage}
          />
          <label htmlFor="file">
            {fileImage?.length ? (
              <StImg img={fileImage} />
            ) : (
              <StImg img={Upload} small />
            )}
          </label>
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

export default ImageModal;

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
    height: 383px;
    background: #ffffff;
    border-radius: 8px;
    .InfoContainer {
      ${flex({
        direction: "column",
      })}
      width: 272px;
      height: 100%;

      .TextContainer {
        ${flex({ justify: "flex-start" })}
        width: 100%;
        .missionTitle {
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: #292e41;
          margin-bottom: 24px;
        }
      }

      label {
        ${flex({})}
        width: 193px;
        height: 193px;
        border: 1px solid #d1d1d1;
        border-radius: 100%;
        margin-bottom: 24px;
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

const StImg = styled.div`
  width: ${(props) => (props.small ? "35.67px" : "100%")};
  height: ${(props) => (props.small ? "30.99px" : "100%")};
  border-radius: ${(props) => (props.small ? "0" : "100%")};
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;
