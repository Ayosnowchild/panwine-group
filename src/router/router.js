import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Home";
import Searchpage from "../pages/search-page/search-index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Landing /> },
    {
      path: "/search-index",
      element: <Searchpage/>
    },
  ]
    
  },
]);
