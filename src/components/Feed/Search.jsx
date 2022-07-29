import { StFixDiv, StSearchInputDiv, StImg } from "./styles";
import searchImg from "assets/img/Search.webp";

const Search = ({ setKeyword, text }) => {
  console.log("rendered");
  return (
    <>
      {/* 검색 */}
      <StFixDiv>
        <StSearchInputDiv>
          <input
            className="inputBox"
            type="text"
            placeholder={text}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <StImg img={searchImg} />
        </StSearchInputDiv>
      </StFixDiv>
    </>
  );
};

export default Search;
