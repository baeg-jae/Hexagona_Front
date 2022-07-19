import { useState } from "react";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Camera from "assets/img/Camera.webp";
import AddPhoto from "./AddPhoto";
import DropDownMenu from "components/Common/DropDownMenu";

const AddedMission = ({ missionContent, missionId }) => {
  const [files, setFiles] = useState();
  const saveFileImage = (e) => {
    setFiles(e.target.files[0]);
  };
  return (
    <>
      {files !== undefined ? (
        <AddPhoto
          missionContent={missionContent}
          files={files}
          missionId={missionId}
        />
      ) : (
        <StWrap>
          <div className="innerDiv">
            <span className="missionContent">{missionContent}</span>
            <label htmlFor="file">
              <StImg img={Camera} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="file"
              onChange={saveFileImage}
            />
            <DropDownMenu
              text="미션 수정"
              text2="미션 삭제"
              margin="40"
              click="missionU"
              click2="missionD"
              missionId={missionId}
            />
          </div>
        </StWrap>
      )}
    </>
  );
};

export default AddedMission;

const StWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 345px;
  height: 105px;
  background: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 8px;
  border: none;
  .innerDiv {
    ${flex({ justify: "space-around" })}
    width: 100%;
    height: 100%;
    .missionContent {
      width: 168px;
      margin-left: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #454545;
      white-space: pre-wrap;
    }
  }
`;
const StImg = styled.div`
  width: 50.33px;
  height: 43.72px;
  margin-right: 19.67px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
