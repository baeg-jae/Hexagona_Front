import styled from "@emotion/styled";
import { SkeletonAnim } from "components/Common/GlobalStyles";

const SkeletonFeed = () => {
  return <StImgDiv className="imgDiv" style={{ marginRight: "4.5px" }} />;
};

export default SkeletonFeed;

const StImgDiv = styled.div`
  border-radius: 16px;
  margin: 10px 5px 5px 5px;
  background-color: var(--skeleton);
  animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;
