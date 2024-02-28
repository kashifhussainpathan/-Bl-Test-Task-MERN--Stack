import { useSelector } from "react-redux";

const UserCard = () => {
  const { loggedInUser: user } = useSelector(({ user }) => user);

  return (
    <div>
      <h2>User Profile</h2>

      <p>{user.email}</p>
      <h3>{user.name}</h3>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
