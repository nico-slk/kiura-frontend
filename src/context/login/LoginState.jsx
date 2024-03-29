import { useReducer } from 'react';
import { login } from '../../services/LoginService';
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

  const { LOGIN_USER } = constants;

  const [state, dispatch] = useReducer(LoginReducer, initial_state);

  const loginUser = (credentials) => {
    login(credentials).then(res => {
      dispatch({ type: LOGIN_USER, payload: res.usersList });
      console.log(state);
    });
  };

  return (
    <LoginContext.Provider value={{
      loggedUser: state.loggedUser,
      loginUser
    }} >
      {children}
    </LoginContext.Provider>
  );

};

export default LoginState;
