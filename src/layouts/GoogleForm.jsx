import styled from "@emotion/styled";

const GoogleForm = () => {
  return (
    <StWrap
      onClick={() =>
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSdZQUsNo9QyNXZ5qxZvduKm9t3Jhi4tch1H5BofjSo5CrBn-g/viewform?usp=sf_link",
          "_blank"
        )
      }
    >
      클릭좀
    </StWrap>
  );
};

export default GoogleForm;

const StWrap = styled.div`
  position: fixed;
  bottom: 20%;
  right: 10%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
