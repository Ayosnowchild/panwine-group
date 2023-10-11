import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Cart from "../pages/Cart/cart";
import Carting from "../pages/Carting/carting";
import Productupload from "../pages/Productupload/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/cart", element: <Cart /> },
      { path: "/carting", element: <Carting /> },
      { path: "/productupload", element: <Productupload /> },
    ],
  },
]);
