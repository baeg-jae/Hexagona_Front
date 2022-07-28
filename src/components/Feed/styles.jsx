import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { MOBILE_SIZE_WIDTH } from "shared/data";

export const StImgDiv = styled.div`
  height: 225px;
  background-image: url(${(props) => props.coverImg});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  margin: 5px;
`;

export const StSearchInputDiv = styled.div`
  ${flex({ justify: "space-between" })}
  width: 327px;
  height: 40px;
  border: 1px solid #bfbfbf;
  border-radius: 55px;
  .inputBox {
    border: none;
    margin-left: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 400;
      font-size: 13px;
      line-height: 130%;
      color: #a3a3a3;
    }
  }
`;

export const StImg = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

export const StFixDiv = styled.div`
  ${flex({})}
  position: fixed;
  width: ${MOBILE_SIZE_WIDTH}px;
  height: 77px;
  background: #ffffff;
  box-shadow: 0px 12px 14px rgba(0, 0, 0, 0.1);
`;
