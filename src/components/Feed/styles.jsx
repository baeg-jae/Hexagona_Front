import styled from "@emotion/styled";
import flex from "components/Common/flex";

export const StImgDiv = styled.div`
  height: 225px;
  background-image: url(${(props) => props.coverImg});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  margin: 5px;
  cursor: pointer;
`;

export const StSearchInputDiv = styled.div`
  ${flex({ justify: "space-between" })}
  width: calc(100% - 24px);
  height: 46px;
  background: #f8f8f8;
  border-radius: 55px;
  .inputBox {
    background-color: transparent;
    width: 90%;
    border: none;
    margin-left: 20px;
    font-size: 14px;
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: #d0d0d0;
    }
  }
  .searchIcon {
    color: #a3a3a3;
    width: 25px;
    height: 25px;
    margin-right: 16px;
  }
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const StFixDiv = styled.div`
  ${flex({})}
  position: fixed;
  width: 100%;
  height: 68px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 99;
  @media screen and (min-width: 420px) {
    width: 420px;
  }
`;
