import { StRightRow, StImgDiv } from "./styles";

const RightFeed = ({ data, keyword, onClickHandler }) => {
  return (
    <>
      {/* 카드 오른쪽 줄 */}
      <StRightRow>
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
              ? v.postContent.toLowerCase().includes(keyword.toLowerCase()) && (
                  <StImgDiv
                    className="imgDiv"
                    onClick={() => onClickHandler(v?.postId)}
                    coverImg={v?.photoUrl}
                    style={{ marginLeft: "4.5px" }}
                    key={i}
                  />
                )
              : "";
          })
          .reverse()}
      </StRightRow>
    </>
  );
};

export default RightFeed;
