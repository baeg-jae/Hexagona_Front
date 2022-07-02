const Auth = () => {
  const code = new URL(window.location.href).searchParams.get(
    process.env.REACT_APP_AUTH_CODE
  );
  return <>{code}</>;
};
export default Auth;
