import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import LoginState from './context/login/LoginState.jsx';
import UserState from './context/user/UserState.jsx';
import './index.css';
import { router } from './router/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginState >
      <UserState >
        <RouterProvider router={router} />
      </UserState>
    </LoginState>
  </React.StrictMode>,
);
