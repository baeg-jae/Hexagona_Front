import flex from "components/Common/flex";
import styled from "@emotion/styled";

const GoalShotCards = ({ data, count }) => {
  return (
    <StCardContainer>
      {data !== undefined ? (
        <>
          <StCard img={data[count - 1]?.photoUrl} differ />
          <StCard img={data[count]?.photoUrl}>
            <div className="gradient">
              <span className="category">{data[count]?.category}</span>
              <span className="postContent">{data[count]?.postContent}</span>
            </div>
          </StCard>
          <StCard img={data[count + 1]?.photoUrl} differ />
        </>
      ) : (
        <></>
      )}
    </StCardContainer>
  );
};

export default GoalShotCards;

const StCardContainer = styled.div`
  ${flex({ gap: "10px", align: "flex-start" })}
  width: 100%;
  height: 537px;
`;

const StCard = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-end",
    align: "flex-start",
  })}
  min-width: 285px;
  height: 480px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0px 43px 40px rgba(0, 0, 0, 0.2));
  border-radius: 20px;
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
  opacity: ${(props) => (props.differ ? "0.6" : "1")};
  span {
    margin-left: 20px;
  }
  .postContent {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 21px;
  }
  .category {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .gradient {
    ${flex({ direction: "column", justify: "flex-end", align: "flex-start" })}
    width: 100%;
    height: 50%;
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      rgba(30, 5, 5, 0) -9.31%,
      var(--gradient) 72.46%
    );
  }
`;
