import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const HeaderProfile = ({ profile_img }) => {
  const { profileImg } = useSelector((state) => state.userReducer);
  return (
    <>
      {profileImg !== "" ? (
        <StProfileImgDiv pic={profileImg} />
      ) : (
        <StProfileImgDiv pic={profile_img} />
      )}
    </>
  );
};

export default HeaderProfile;

const StProfileImgDiv = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-image: url(${(props) => props.pic});
  background-size: cover;
  background-position: center;
`;
