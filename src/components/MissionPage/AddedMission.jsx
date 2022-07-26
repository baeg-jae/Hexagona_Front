import { useState, useEffect } from "react";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Camera from "assets/img/Camera.webp";
import AddPhoto from "./AddPhoto";
import DropDownMenu from "components/Common/DropDownMenu";
import JoyrideContainer from "components/Tutorial/JoyrideContainer";
import { missionTwo } from "shared/tutorialData";

const AddedMission = ({ missionContent, missionId }) => {
  const [files, setFiles] = useState();
  const saveFileImage = (e) => {
    setFiles(e.target.files[0]);
  };

  const [isShowTutorial, setIsShowTutorial] = useState(false);

  const tutorial = localStorage.getItem("tutorial-missionConfirm");

  useEffect(() => {
    if (tutorial === null) {
      setIsShowTutorial(true);
      localStorage.setItem("tutorial-missionConfirm", false);
    }
  }, [tutorial]);

  return (
    <>
      {files !== undefined ? (
        <AddPhoto
          missionContent={missionContent}
          files={files}
          missionId={missionId}
        />
      ) : (
        <StWrap className="mission_one">
          <div className="innerDiv">
            <span className="missionSpan">{missionContent}</span>
            <label htmlFor="file">
              <StImg img={Camera} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="file"
              onChange={saveFileImage}
            />
            <div style={{ marginRight: "20px" }}>
              <DropDownMenu
                text="미션 수정"
                text2="미션 삭제"
                margin="40"
                click="missionU"
                click2="missionD"
                missionId={missionId}
              />
            </div>
          </div>
          <JoyrideContainer
            run={isShowTutorial}
            setRun={setIsShowTutorial}
            steps={missionTwo}
          />
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
  border-radius: 4px;
  margin-bottom: 8px;
  border: none;
  .innerDiv {
    ${flex({ justify: "space-around" })}
    width: 100%;
    height: 100%;
    .missionSpan {
      width: 65%;
      margin-left: 40px;
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
