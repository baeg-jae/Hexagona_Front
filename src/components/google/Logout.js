import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENTID;

function Logout() {
    const onSuccess = () => {
        console.log('로그아웃');
    };
    return (
        <div>
            <GoogleLogout clientId={clientId} buttonText={'Logout'} onLogoutSuccess={onSuccess} />
        </div>
    );
}

export default Logout;
