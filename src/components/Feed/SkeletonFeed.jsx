import { FlexRowDiv } from "components/Common/GlobalStyles";
import styled from "@emotion/styled";

const SkeletonFeed = ({ data }) => {
  return (
    <StWrap>
      <StRowFirst>
        {data?.map((_, i) => {
          return i % 2 === 0 ? (
            <StImgDiv
              className="imgDiv"
              style={{ marginRight: "4.5px" }}
              key={i}
            />
          ) : (
            ""
          );
        })}
        <EmptyDiv />
      </StRowFirst>
      <StRowSecond>
        <EmptyDiv />
        {data?.map((_, i) => {
          return i % 2 === 1 ? (
            <StImgDiv
              className="imgDiv"
              style={{ marginLeft: "4.5px" }}
              key={i}
            />
          ) : (
            ""
          );
        })}
        <EmptyDiv />
      </StRowSecond>
    </StWrap>
  );
};

export default SkeletonFeed;

const StWrap = styled(FlexRowDiv)`
  width: 100%;
  overflow-y: scroll;
  white-space: nowrap;
`;

const StRowFirst = styled.div`
  display: grid;
  grid-template-columns: 158px;
  gap: 9px;
`;

const StRowSecond = styled.div`
  display: grid;
  grid-template-columns: 158px;
  gap: 9px;
`;

const StImgDiv = styled.div`
  height: 213.91px;
  border-radius: 20px;
  background-color: var(--skeleton);
`;

const EmptyDiv = styled.div`
  width: 158px;
  height: 50px;
`;
