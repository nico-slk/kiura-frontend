import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
      <p>Login</p>
      <div>
        <p>Login Form HERE</p>
        <input type="email" name="email" id="" placeholder='Email' />
        <input type="password" name="email" id="" placeholder='Password' />
        <button type="button">Login</button>
        <Link to='/register' className='' >Sign up</Link>
      </div>
    </div>
  );
};
