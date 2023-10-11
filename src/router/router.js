import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Password from "../pages/Password";
import SignUp from "../pages/SignUp";
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
        element: <SignUp goog={<img src="./goog.png" alt={""} />} />,
      },
      { path: "/Password", element: <Password /> },
    ],
  },
]);
