import React, { useEffect } from 'react';
import { KAKAO_AUTH_URL } from 'shared/kakao/kakao';
import LoginButton from 'components/google/Login';
import LogoutButton from 'components/google/Logout';
import { gapi } from 'gapi-script';

const clientId = process.env.REACT_APP_CLIENTID;
const LogIn = () => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
        }
        gapi.load('client:auth2', start);
    });

    var accessToken = gapi.auth.getToken().access_token;
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
                                    fontSize: '20px',
                                    color: 'black',
                                }}
                            >
                                카카오 로그인
                            </span>
                        </a>
                    </div>
                    <LoginButton />
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};

export default LogIn;
