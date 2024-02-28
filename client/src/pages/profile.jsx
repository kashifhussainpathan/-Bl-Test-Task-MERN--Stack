import { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import UserCard from "../components/userCard";
import { useSelector } from "react-redux";

const Profile = () => {
  const [toggleAuth, setToggleAuth] = useState(true);
  const { loggedInUser } = useSelector(({ user }) => user);

  const handleToggleAuth = () => {
    setToggleAuth(!toggleAuth);
  };

  return (
    <div>
      {loggedInUser != null ? (
        <UserCard />
      ) : toggleAuth ? (
        <Signup navigateAuth={handleToggleAuth} />
      ) : (
        <Login navigateAuth={handleToggleAuth} />
      )}
    </div>
  );
};

export default Profile;
