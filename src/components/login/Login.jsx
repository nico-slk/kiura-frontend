import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../context/login/LoginContext';

export const Login = () => {
  const [login, setLogin] = useState({});
  const { loginUser } = useContext(LoginContext);

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    console.log(login);
    loginUser(login);
  };


  return (
    <div>
      <p>Login</p>
      <div>
        <p>Login Form HERE</p>
        <input type="email" name="email" id="" placeholder='Email' onChange={handleChange} />
        <input type="password" name="password" id="" placeholder='Password' onChange={handleChange} />
        {/* <button type="button" onClick={handleClick}>Login</button> */}
        <Link to='/' className='' onClick={handleClick} >Login</Link>
        <Link to='/register' className='' >Sign up</Link>
      </div>
    </div>
  );
};
