// 렌더링하는 영역을 구현하는 Directive
import { Outlet } from 'react-router-dom';
import LogIn from 'pages/LogIn';

const useAuth = () => {
    const token = localStorage.getItem('Authorization');
    return token;
};

const ProtectedRoutesNoLogin = () => {
    const isAuth = useAuth();
    // 로그인중이 아니면 로그인페이지로 보내준다
    return isAuth !== null ? <Outlet /> : <LogIn />;
};

export default ProtectedRoutesNoLogin;
