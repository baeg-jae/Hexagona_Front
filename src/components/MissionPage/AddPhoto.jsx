import flex from "components/Common/flex";
import styled from "@emotion/styled";
import Camera from "assets/img/Camera.webp";

const AddPhoto = ({ missionContent }) => {
  return (
    <StWrap>
      <div className="innerDiv">
        <span>{missionContent}</span>
        <StImg img={Camera} />
      </div>
    </StWrap>
  );
};

export default AddPhoto;

const StWrap = styled.div`
  ${flex({ justify: "space-between" })}
  width: 345px;
  height: 105px;
  background: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 8px;
  border: none;
  .innerDiv {
    ${flex({ justify: "space-between" })}
    width: 100%;
    height: 100%;
    span {
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
