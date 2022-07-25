import { StWrap } from "components/Common/GlobalStyles";
import SignUpPage from "components/SignUp/SignUpPage";
import WebTitle from "components/Common/WebTitle";

const SignUp = () => {
  return (
    <StWrap>
      <WebTitle text="회원가입: 갓생메이커" />
      <SignUpPage />
    </StWrap>
  );
};

export default SignUp;
