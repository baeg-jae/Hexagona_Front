// 렌더링하는 영역을 구현하는 Directive
import { Outlet } from 'react-router-dom';
import Home from 'pages/Home';

const useAuth = () => {
    const token = localStorage.getItem('Authorization');
    return token;
};

const ProtectedRoutesYesLogin = () => {
    const isAuth = useAuth();
    // 로그인중이면 로그인페이를 못돌아간다.
    return isAuth !== null ? <Home /> : <Outlet />;
};

export default ProtectedRoutesYesLogin;
