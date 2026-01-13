import App from "./App";
import Cart from "./Cart";
import Shop from "./Shop";
import Error from "./Error";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

export default routes;
