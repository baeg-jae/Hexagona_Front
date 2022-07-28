import { FlexRowDiv, StModalGlobal } from "./GlobalStyles";
import { useState } from "react";
import styled from "@emotion/styled";
import Upload from "assets/img/upload.webp";
import { useDispatch } from "react-redux";
import { addUserProfileTemp } from "redux/modules/user";
import { StButton } from "./GlobalStyles";

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
    <StModalGlobal>
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
    </StModalGlobal>
  );
};

export default ImageModal;

const StImg = styled.div`
  width: ${(props) => (props.small ? "35.67px" : "100%")};
  height: ${(props) => (props.small ? "30.99px" : "100%")};
  border-radius: ${(props) => (props.small ? "0" : "100%")};
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;
