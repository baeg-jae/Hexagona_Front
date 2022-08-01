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
  width: 327px;
  height: 40px;
  border: 1px solid var(--gray-3);
  border-radius: 55px;
  .inputBox {
    border: none;
    margin-left: 20px;
    &:focus {
      outline: none;
    }
  }
  @media screen and (max-width: 350px) {
    width: 270px;
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
  width: 100%;
  height: 77px;
  background: #ffffff;
  box-shadow: 0px 12px 14px rgba(0, 0, 0, 0.1);
  z-index: 99;
  @media screen and (min-width: 420px) {
    width: 420px;
  }
`;
