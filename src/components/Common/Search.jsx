import styled from "@emotion/styled";
import flex from "./flex";
import searchImg from "assets/img/Search.webp";
import { useState } from "react";

const Search = ({ data }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <StWrap>
      <StSearchInputDiv>
        <input
          className="inputBox"
          type="text"
          placeholder="키워드를 입력해주세요."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <StImg img={searchImg} />
      </StSearchInputDiv>
    </StWrap>
  );
};

export default Search;

const StWrap = styled.div`
  ${flex({})}
  position: fixed;
  width: 100%;
  height: 77px;
  background: #ffffff;
  box-shadow: 0px 12px 14px rgba(0, 0, 0, 0.1);
`;

const StSearchInputDiv = styled.div`
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
      font-size: 13px;
      line-height: 130%;
      color: #a3a3a3;
    }
  }
`;

const StImg = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;
