import flex from "components/Common/flex";
import styled from "@emotion/styled";
import plus from "assets/img/plus.png";

const EmptyMission = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      {arr.map((v, i) => {
        return (
          <StWrap>
            <StCircle>
              <StImg img={plus} />
            </StCircle>
            <div className="innerDiv">
              <span>목표를 생성해주세요.</span>
            </div>
          </StWrap>
        );
      })}
    </>
  );
};

export default EmptyMission;

const StWrap = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 345px;
  height: 105px;
  background: #ffffff;
  border: 1px dashed #e0e0e0;
  border-radius: 20px;
  margin-bottom: 8px;
  .innerDiv {
    ${flex({ align: "flex-end" })}
    height: 100%;
    span {
      margin-left: 31px;
      margin-bottom: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.02em;
      color: #727272;
    }
  }
`;

const StCircle = styled.div`
  ${flex({})}
  width: 66px;
  height: 66px;
  border: 1px solid #d9d9d9;
  border-radius: 94px;
  margin-left: 29px;
`;

const StImg = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
