import styled from "@emotion/styled";
import Survey01 from "assets/img/WebSurvey01.webp";
import Survey02 from "assets/img/WebSurvey02.webp";
import flex from "components/Common/flex";
import { SurveyAnim, SurveyAnim2 } from "components/Common/GlobalStyles";

const GoogleForm = () => {
  return (
    <StWrap
      onClick={() =>
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSdZQUsNo9QyNXZ5qxZvduKm9t3Jhi4tch1H5BofjSo5CrBn-g/viewform?usp=sf_link",
          "_blank"
        )
      }
    >
      <StSay flag>
        <span>피드백 남기기</span>
        <span>_ </span>
      </StSay>
      <StSurvey flag />
    </StWrap>
  );
};

export default GoogleForm;

const StWrap = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StSurvey = styled.div`
  width: 113px;
  height: 141px;
  background-image: url(${Survey01});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${(props) => props.flag && SurveyAnim2()} 1s infinite;
`;
const StSay = styled.div`
  ${flex({ direction: "column" })}
  width: 120px;
  height: 72.81px;
  background-image: url(${Survey02});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${(props) => props.flag && SurveyAnim()} 2s infinite;
  span {
    color: var(--white);
    font-weight: 600;
    font-size: 15.3606px;
    line-height: 130%;
  }
`;
