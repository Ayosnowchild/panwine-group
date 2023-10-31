import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Cart from "../pages/Cart/cart";
import Carting from "../pages/Carting/carting";
import Productupload from "../pages/Productupload/index";
import Password from "../pages/Password";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/cart", element: <Cart /> },
      { path: "/carting", element: <Carting /> },
      { path: "/productupload", element: <Productupload /> },

      { path: "/Login", element: <Login /> },
      {
        path: "/SignUp",
        element: <SignUp goog={<img src="./goog.png" alt={""} />} />,
      },
      { path: "/Password", element: <Password /> },
    ],
  },
]);
