import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import SkeletonFeed from "./SkeletonFeed";
import styled from "@emotion/styled";
import searchImg from "assets/img/Search.webp";
import flex from "components/Common/flex";

const Column = ({ data, isFetching }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );

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
      {isFetching ? (
        <SkeletonFeed data={data} />
      ) : (
        <StWrap>
          {/* 카드 왼쪽 줄 */}
          <StRowFirst>
            <StMyPage />
            {data
              ?.filter((v) => {
                if (keyword === "") {
                  return v;
                } else if (
                  v.postContent.toLowerCase().includes(keyword.toLowerCase())
                ) {
                  return v;
                }
                return v;
              })
              .map((v, i) => {
                return i % 2 === 0
                  ? v.postContent
                      .toLowerCase()
                      .includes(keyword.toLowerCase()) && (
                      <StImgDiv
                        className="imgDiv"
                        onClick={() => onClickHandler(v?.postId)}
                        coverImg={v?.photoUrl}
                        style={{ marginRight: "4.5px" }}
                        key={i}
                      />
                    )
                  : "";
              })}
          </StRowFirst>

          {/* 카드 오른쪽 줄 */}
          <StRowSecond>
            {data
              ?.filter((v) => {
                if (keyword === "") {
                  return v;
                } else if (
                  v.postContent.toLowerCase().includes(keyword.toLowerCase())
                ) {
                  return v;
                }
                return v;
              })
              .map((v, i) => {
                return i % 2 === 1
                  ? v.postContent
                      .toLowerCase()
                      .includes(keyword.toLowerCase()) && (
                      <StImgDiv
                        className="imgDiv"
                        onClick={() => onClickHandler(v?.postId)}
                        coverImg={v?.photoUrl}
                        style={{ marginLeft: "4.5px" }}
                        key={i}
                      />
                    )
                  : "";
              })}
          </StRowSecond>
        </StWrap>
      )}
    </>
  );
};

export default Column;

const StWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: scroll;
`;

const StImgDiv = styled.div`
  width: 166px;
  height: 225px;
  background-image: url(${(props) => props.coverImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin-top: 10px;
`;

const StMyPage = styled.div`
  width: 166px;
  height: 225px;
  border-radius: 20px;
  background-color: tomato;
`;

const StRowFirst = styled.div`
  width: 166px;
  margin-top: 80px;
  margin-right: 5px;
`;

const StRowSecond = styled.div`
  width: 166px;
  margin-left: 5px;
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
const StFixDiv = styled.div`
  ${flex({})}
  position: fixed;
  width: 100%;
  height: 77px;
  background: #ffffff;
  box-shadow: 0px 12px 14px rgba(0, 0, 0, 0.1);
`;
