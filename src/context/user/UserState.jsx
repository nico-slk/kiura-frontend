import { useReducer } from 'react';
import { getUsers } from '../../services/UserServices.js';
import constants from '../constants.js';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

// eslint-disable-next-line react/prop-types
const UserState = ({ children }) => {
  const initial_state = {
    users: [],
    user: {}
  };
  const { READ_USER } = constants;

  const [state, dispatch] = useReducer(UserReducer, initial_state);

  const getUsersList = () => {
    getUsers().then(res => {
      dispatch({ type: READ_USER, payload: res.usersList });
    });
  };


  return (
    <UserContext.Provider value={{
      state,
      getUsersList
    }} >
      {children}
    </UserContext.Provider>
  );

};

export default UserState;
