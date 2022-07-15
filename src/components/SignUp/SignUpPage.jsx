import { StInput } from "components/Common/GlobalStyles";
import { useQueryClient, useMutation } from "react-query";
import { useCallback, useState } from "react";
import { SIGN_UP_MAX_LENGTH } from "shared/data";
import { badWords } from "shared/TextsData";
import useNewUserCheck from "components/Hooks/User/useNewUserCheck";
import AlertComponent from "components/Common/AlertComponent";
import flex from "components/Common/flex";
import Button from "components/Common/Button";
import IntroPage from "./IntroPage";
import styled from "@emotion/styled";
import apis from "shared/api/main";

const __signup = async (payload) => {
  const data = await apis.signUp(payload);
  return data;
};

const __dupCheck = async (payload) => {
  const data = await apis.dupCheck(payload);
  return data;
};

const SignUpPage = () => {
  const [flag, setFlag] = useState();
  const [name, setName] = useState("");
  const queryClient = useQueryClient();
  const onSkipHandler = useNewUserCheck();

  // 회원가입 mutation
  const userSignUpMutation = useMutation(__signup, {
    onSuccess: () => {
      onSkipHandler();
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("users");
      // 회원가입에 통과되면 화면전환
      AlertComponent({
        icon: "success",
        title: "가입완료",
        text: "환영합니다",
      });

      setFlag((value) => !value);
    },
    onError: (e) => {},
  });

  // 중복검사 mutation
  const userDupCheck = useMutation(__dupCheck, {
    onSuccess: (data) => {
      // 캐시에 있는 모든 쿼리를 무효화한다.
      queryClient.invalidateQueries("users");
      if (data.data) {
        // 중복검사에 통과되면 회원가입을 진행한다
        userSignUpMutation.mutate({ nickname: name });
      } else {
        AlertComponent({
          icon: "error",
          title: "에러!",
          text: "중복된 아이디 입니다.",
        });
      }
    },
    onError: (e) => {},
  });

  // 버튼 핸들러
  const onClickBtnHandler = useCallback(() => {
    userDupCheck.mutate({ nickname: name });
  }, [name, userDupCheck]);

  //욕설탐지기
  const bogusCheck = useCallback(() => {
    const foundSwears = badWords.filter((word) =>
      name.toLowerCase().includes(word.toLowerCase())
    );
    console.log(foundSwears);
    if (foundSwears.length) {
      AlertComponent({
        title: "에러!",
        text: "제대로 된 닉네임을 입력해주세요. ",
        icon: "error",
      });
    } else {
      // 욕설탐지기에 안걸리면 실행
      onClickBtnHandler();
    }
  }, [name, onClickBtnHandler]);

  // 버튼 disable Handler
  const onDisableHandler = useCallback(() => {
    if (name !== "") return false;
    return true;
  }, [name]);

  // 클래스이름 생성
  const generateClassName = useCallback(() => {
    if (name.length > 0) return "currentCount";
  }, [name.length]);

  return (
    <>
      {!flag ? (
        <StWrap>
          <span className="titleSpan">회원님을 뭐라고 부를까요?</span>

          <div className="inputBox">
            <StInput
              placeholder="닉네임을 입력해주세요."
              maxLength={SIGN_UP_MAX_LENGTH}
              onChange={(e) => setName(e.target.value)}
              className="stInput"
            />
            <div className="inputCount">
              <span className={generateClassName()}>{name.length}</span>/
              {SIGN_UP_MAX_LENGTH}
            </div>
          </div>

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
  font-size: 24px;
  font-weight: 700;
  margin-top: 4rem;
  .titleSpan {
    margin: 135px 0 74px 0;
  }
  & > Button {
    margin-bottom: 431px;
    margin: 35px 0 58px 0;
  }

  .inputBox {
    ${flex({ justify: "space-between" })}
    width: 327px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #d3d3d3;
    color: #d2bca9;
    &:focus-within {
      border: 1px solid #1f201d;
    }
  }

  .stInput {
    border: none;
    width: 215px;
    height: 39px;
    margin-left: 10px;
    color: #1f201d;
    &:focus {
      outline: none;
    }
  }

  .inputCount {
    font-size: 16px;
    color: #b7b7b7;
    margin-right: 20px;
    .currentCount {
      font-weight: 700;
      color: #1f201d;
    }
  }
`;
