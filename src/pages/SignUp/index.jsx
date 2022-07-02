import React, { useState } from "react";
import { StWrap } from "components/Common/GlobalStyles";
import FirstPage from "components/SignUp/FirstPage";
import SignUpPage from "components/SignUp/SignUpPage";

const SignUp = () => {
  const [flag, setFlag] = useState(false);
  const onStartBtnHandler = () => {
    setFlag((value) => !value);
  };
  return (
    <StWrap>
      {!flag ? (
        <FirstPage onStartBtnHandler={onStartBtnHandler} />
      ) : (
        <SignUpPage></SignUpPage>
      )}
    </StWrap>
  );
};

export default SignUp;
