import flex from "components/Common/flex";
import styled from "@emotion/styled";

const GoalShotCards = ({ data, count }) => {
  return (
    <StCardContainer>
      {data !== undefined ? (
        <>
          <StCard img={data[count - 1]?.photoUrl} differ />
          <StCard img={data[count]?.photoUrl} />
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
  ${flex({ gap: "10px" })}
  width: 100%;
`;

const StCard = styled.div`
  min-width: 285px;
  height: 480px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0px 43px 40px rgba(0, 0, 0, 0.2));
  border-radius: 20px;
  margin-top: ${(props) => (props.differ ? "107px" : "57px")};
`;
