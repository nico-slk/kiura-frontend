import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Home } from '../components/Home';
import { Profesionales } from '../components/Profesionales';
import { UserProfile } from '../components/UserProfile';
import { Login } from '../components/login/Login';
import { Register } from '../components/login/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error page</div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profesionals",
        element: <Profesionales />
      },
      {
        path: "/:userId",
        element: <UserProfile />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
