import { StFixDiv, StSearchInputDiv } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ setKeyword, text }) => {
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
          <AiOutlineSearch className="searchIcon" />
        </StSearchInputDiv>
      </StFixDiv>
    </>
  );
};

export default Search;
