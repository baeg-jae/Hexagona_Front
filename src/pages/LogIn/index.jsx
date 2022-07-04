import React from "react";
import { KAKAO_AUTH_URL } from "shared/kakao/kakao";
import { GOOGLE_AUTH_URL } from "shared/google/google";

const LogIn = () => {
  return (
    <div>
      <div>
        <div>
          <h1>
            올해는 꼭,
            <br />
            취업하고싶은 당신!
          </h1>
          <div>
            커리어푸틴은 일상의 패턴을 바꿈으로
            <br />
            당싱이 꿈꾸던 커리어를 완성 할수 있도록
            <br />
            도와줍니다.
          </div>
        </div>
        <div>
          <div className="KakaoWrap">
            <a href={KAKAO_AUTH_URL}>
              <span
                style={{
                  fontSize: "20px",
                  color: "black",
                }}
              >
                카카오 로그인
              </span>
            </a>
          </div>
          <div className="GoogleWrap">
            <a href={GOOGLE_AUTH_URL}>
              <span
                style={{
                  fontSize: "20px",
                  color: "black",
                }}
              >
                구글 로그인
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
