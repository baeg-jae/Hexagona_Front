import MyPageFeed from "./MyPageFeed";
import { StLeftRow, StImgDiv } from "./styles";

const LeftFeed = ({ data, keyword, onClickHandler }) => {
  return (
    <>
      {/* 카드 왼쪽 줄 */}
      <StLeftRow>
        {/* 내사진보기 */}
        <MyPageFeed />
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
              ? v.postContent.toLowerCase().includes(keyword.toLowerCase()) && (
                  <StImgDiv
                    className="imgDiv"
                    onClick={() => onClickHandler(v?.postId)}
                    coverImg={v?.photoUrl}
                    style={{ marginRight: "4.5px" }}
                    key={i}
                  />
                )
              : "";
          })
          .reverse()}
      </StLeftRow>
    </>
  );
};

export default LeftFeed;
