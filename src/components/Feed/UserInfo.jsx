import useGetUser from "components/Hooks/User/useGetUser";

const UserInfo = () => {
  const { data } = useGetUser();
  const userInfo = data;
  return userInfo;
};

export default UserInfo;
