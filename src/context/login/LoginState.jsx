import { useReducer } from 'react';
import { login } from '../../services/LoginService';
import { createUser } from '../../services/UserServices';
import constants from '../constants';
import LoginContext from './LoginContext';
import LoginReducer from './LoginReducer';


// eslint-disable-next-line react/prop-types
const LoginState = ({ children }) => {
  const initial_state = {
    loggedUser: {
      token: ""
    }
  };

  const { LOGIN_USER, CREATE_USER } = constants;

  const [state, dispatch] = useReducer(LoginReducer, initial_state);

  const loginUser = (credentials) => {
    login(credentials).then(res => {
      dispatch({ type: LOGIN_USER, payload: res.usersList });
    });
  };

  const RegisterUser = (credentials) => {
    createUser(credentials).then(res => {
      dispatch({ type: CREATE_USER, payload: res.usersList });
    });
  };

  return (
    <LoginContext.Provider value={{
      loggedUser: state.loggedUser,
      loginUser,
      RegisterUser
    }} >
      {children}
    </LoginContext.Provider>
  );

};

export default LoginState;
