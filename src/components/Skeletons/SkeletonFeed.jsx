import styled from "@emotion/styled";

const SkeletonFeed = ({ data }) => {
  console.log(data);
  return (
    <StWrap>
      <StRowFirst>
        <StMyPage />
        {data?.map((v, i) => {
          return i % 2 === 0 ? (
            <StImgDiv
              className="imgDiv"
              coverImg={v?.photoUrl}
              style={{ marginRight: "4.5px" }}
              key={i}
            />
          ) : (
            ""
          );
        })}
      </StRowFirst>
      <StRowSecond>
        {data?.map((v, i) => {
          return i % 2 === 1 ? (
            <StImgDiv
              className="imgDiv"
              coverImg={v?.photoUrl}
              style={{ marginLeft: "4.5px" }}
              key={i}
            />
          ) : (
            ""
          );
        })}
      </StRowSecond>
    </StWrap>
  );
};

export default SkeletonFeed;

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
  border-radius: 20px;
  margin-top: 10px;
  background-color: var(--skeleton);
`;

const StMyPage = styled.div`
  width: 166px;
  height: 225px;
  border-radius: 20px;
  background-color: var(--skeleton);
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
