import { StWrap } from "components/Common/GlobalStyles";
import { Helmet } from "react-helmet";
import SignUpPage from "components/SignUp/SignUpPage";

const SignUp = () => {
  return (
    <StWrap>
      <Helmet>
        <title>회원가입: 갓생메이커</title>
      </Helmet>
      <SignUpPage></SignUpPage>
    </StWrap>
  );
};

export default SignUp;
