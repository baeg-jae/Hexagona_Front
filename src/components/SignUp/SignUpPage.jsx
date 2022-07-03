import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import flex from "components/Common/flex";
import { StInput } from "components/Common/GlobalStyles";
import { useQueryClient, useMutation } from "react-query";
import Button from "components/Common/Button";
import IntroPage from "./IntroPage";
import apis from "shared/api/main";
import { badWords } from "./IntroPageTexts";

const MAX_LENGTH = 15;
const __signup = async (payload) => {
  const addTodoDB = await apis.signUp(payload);
  return addTodoDB;
};

const __dupCheck = async (payload) => {
  const addTodoDB = await apis.dupCheck(payload);
  return addTodoDB;
};

const SignUpPage = () => {
  const [flag, setFlag] = useState();
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  // 회원가입 mutation
  const userSignUpMutation = useMutation(__signup, {
    onSuccess: () => {
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("users");
      // 회원가입에 통과되면 화면전환
      alert("가입을 환영합니다");
      setFlag((value) => !value);
    },
    onError: (error) => {
      alert(`회원가입: ${error.message}`);
    },
    onSettled: () => {},
  });

  // 중복검사 mutation
  const userDupCheck = useMutation(__dupCheck, {
    onSuccess: (data) => {
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("users");
      if (data.data) {
        // 중복검사에 통과되면 회원가입을 진행한다
        userSignUpMutation.mutate({ nickname: name });
      }
    },
    onError: (error) => {
      console.log(error.message);
      alert(`중복체크: ${error.message}`);
    },
    onSettled: () => {},
  });

  // 버튼 핸들러
  const onClickBtnHandler = () => {
    userSignUpMutation.mutate({ nickname: name });
    // userDupCheck.mutate({ name: name });
  };

  //욕설탐지기
  const bogusCheck = () => {
    const foundSwears = badWords.filter((word) =>
      name.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      alert("사용하실 수 없는 아이디 입니다.");
      return true;
    } else {
      onClickBtnHandler();
      return false;
    }
  };

  // 버튼 disable Handler
  const onDisableHandler = () => {
    if (name !== "") return false;
    return true;
  };

  return (
    <>
      {!flag ? (
        <StWrap>
          <span>회원님을 뭐라고 부를까요?</span>
          <StInput
            placeholder="닉네임을 입력해주세요."
            maxLength={MAX_LENGTH}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            text="입력완료"
            theme="dark"
            click={bogusCheck}
            disabled={onDisableHandler()}
          />
        </StWrap>
      ) : (
        <IntroPage></IntroPage>
      )}
    </>
  );
};

export default SignUpPage;

const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 4rem;
  span {
    margin-bottom: 4rem;
  }
`;
