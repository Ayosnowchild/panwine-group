import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Shipping from "../pages/checkout-page/checkout-1";
import Payment from "../pages/checkout-page/checkout-page2/checkout-2";
import Card from "../pages/checkout-page/checkout-page3/checkout-3";
import Order from "../pages/checkout-page/checkout-page4/checkout-4";
import Reciept from "../pages/checkout-page/checkout-page5/checkout-5";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path:"/checkout-1", element: <Shipping /> },
      { path:"/checkout-2", element: <Payment /> },
      { path:"/checkout-3", element: <Card /> },
      { path:"/checkout-4", element: <Order /> },
      { path:"/checkout-5", element: <Reciept /> },
  ],
  },
]);
