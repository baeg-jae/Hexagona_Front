import { StFixDiv, StSearchInputDiv, StImg } from "./styles";
import searchImg from "assets/img/Search.webp";

const Search = ({ setKeyword }) => {
  return (
    <>
      {/* 검색 */}
      <StFixDiv>
        <StSearchInputDiv>
          <input
            className="inputBox"
            type="text"
            placeholder="키워드를 입력해주세요."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <StImg img={searchImg} />
        </StSearchInputDiv>
      </StFixDiv>
    </>
  );
};

export default Search;
