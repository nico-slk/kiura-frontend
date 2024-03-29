import { NavLink } from 'react-router-dom';

export const Navigator = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/' className='' >Home</NavLink>
        </li>
        <li>
          <NavLink to='/profesionals' className='' >Profesionals</NavLink>
        </li>
      </ul>
    </div>
  );
};
