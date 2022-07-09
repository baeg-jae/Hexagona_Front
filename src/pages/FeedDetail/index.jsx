import React from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { StWrap } from "components/Common/GlobalStyles";
import Detail from "assets/img/Detail.png";
import HeaderImg from "assets/img/HeaderImg.png";
import NavigatorBar from "components/Common/NavigatorBar";

const FeedDetail = () => {
  return (
    <StWrapFlex>
      <StImgWrap>
        <div className="imageDiv">
          <StImgHeader>
            <div className="headerImg" src={HeaderImg} alt=""></div>
            <div className="textDiv">
              <span className="secondaryText">갓생 입문자</span>
              <span>김갓생</span>
            </div>
          </StImgHeader>
          <div className="title">
            <span className="secondaryTitle">운동하기..</span>
            <span>크로스핏 다녀오기</span>
          </div>
        </div>
        <div></div>
      </StImgWrap>
      <NavigatorBar />
    </StWrapFlex>
  );
};

export default FeedDetail;

const StWrapFlex = styled(StWrap)`
  ${flex({ align: "flex-start" })}
  background-color: red;
`;
const StImgWrap = styled.div`
  .imageDiv {
    ${flex({ align: "flex-start" })}
    background-image: url(${Detail});
    background-size: cover;
    background-position: center;
    width: 325px;
    height: 403px;
  }
`;
const StImgHeader = styled.div`
  ${flex({ direction: "column", justify: "space-between" })}
  position: absolute;
  width: 116.03px;
  height: 49.03px;
  left: 20px;
  top: 20px;
  margin-top: 10px;
  margin-left: 10px;
  .headerImg {
    width: 63.13px;
    height: 88.26px;
    left: calc(50% - 63.13px / 2 + 3.37px);
    top: calc(50% - 88.26px / 2 + 5.52px);
  }
  .textDiv {
    ${flex({ direction: "column", align: "flex-start" })}
    font-weight: 700;
    font-size: 15px;
    line-height: 130%;
    margin-left: 5px;
    color: #212121;
    .secondaryText {
      font-weight: 400;
      font-size: 13px;
      line-height: 130%;
    }
  }
  .title {
    ${flex({ direction: "column", align: "flex-start" })}
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    .secondaryTitle {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
