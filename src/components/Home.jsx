import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/login/LoginContext';
import UserContext from '../context/user/UserContext';
import { Searcher } from './Searcher';

export const Home = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { state, getUsersList } = useContext(UserContext);
  const { loggedUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    getUsersList();
    setLoading(!loading);
  };

  useEffect(() => {
    getUsersList();
    setUserList(state?.users);
  }, [loading]);

  if (loggedUser.token === "") {
    navigate("/login");
  }

  return (
    <div>
      <p>Home</p>
      <Searcher />
      <input type="submit" value={'Get Users'} onClick={handleClick} />
      {userList && userList.map(user => <div key={user.id}>{user.email}</div>)}
    </div>
  );
};
