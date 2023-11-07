import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Password from "../pages/Password-reset";
import SignUp from "../pages/Sign-up";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },

      { path: "/Login", element: <Login /> },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      { path: "/Password", element: <Password /> },
    ],
  },
]);
