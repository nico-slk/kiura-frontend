import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../context/login/LoginContext';
import UbicationContext from '../../context/ubication/UbicationContext';

export const Register = () => {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({});

  const { RegisterUser } = useContext(LoginContext);
  const { ubicationState, getUbication, createNewUbication } = useContext(UbicationContext);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    if (user.password === user.re_password) {

      getUbication(user.city);
      if (!ubicationState.ubication.city) {
        createNewUbication({
          city: user.city,
          region: user.region,
          country: user.country
        });
      }

      const userObj = {
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        city: user.city,
        avatar_img: user.avatar_img | 'https://i.ibb.co/x7qSSq6/avatar-icon.png',
        identity_img: user.identity_img | 'https://i.ibb.co/RQ2BxJH/istockphoto-612650934-1024x1024.jpg'
      };
      setUser(userObj);

      RegisterUser(user);

    } else {
      alert('Password should be the same');
    }

  };

  useEffect(() => {

  }, [checked]);


  return (
    <div>
      <p>Register</p>
      <div>
        <p>Login Form HERE</p>
        <input type="text" name="name" onChange={handleChange} placeholder='Name' required />
        <input type="text" name="last_name" onChange={handleChange} placeholder='Last name' required />
        <input type="email" name="email" onChange={handleChange} placeholder='Email' />
        <input type="password" name="password" onChange={handleChange} placeholder='Password' required />
        <input type="password" name="re_password" onChange={handleChange} placeholder='Repeat Password' required />
        <input type="text" name="city" onChange={handleChange} placeholder='City' required />
        <input type="text" name="region" onChange={handleChange} placeholder='State/Province/Region' required />
        <input type="text" name="country" onChange={handleChange} placeholder='Country' required />
        <p>Profesional: </p> <input type="checkbox" name="rol" onChange={handleChecked} />
        {checked && <div>
          <input type="text" name="avatar_img" onChange={handleChange} placeholder='Insert Avatar link' required={checked} />
          <input type="text" name="identity_img" onChange={handleChange} placeholder='Insert DNI link' required={checked} />
        </div>}
        <button type="button" onClick={handleClick}>Finish</button>
        <Link to='/login' className='' >Log in</Link>
      </div>
    </div>
  );
};
