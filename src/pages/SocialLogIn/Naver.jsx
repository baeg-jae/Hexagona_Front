import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __naverSignIn } from 'redux/modules/user';
import loadable from '@loadable/component';

const Loading = loadable(() => import('pages/Status/Loading'));

const Naver = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin, newUser } = useSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(__naverSignIn(code));
        if (isLogin) {
            navigate('/signup');
        }
        if (!newUser) {
        }
    }, [dispatch, code, navigate, isLogin, newUser]);
    return (
        <>
            <Loading />
        </>
    );
};

export default Naver;
