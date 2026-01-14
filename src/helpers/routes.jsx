import App from "../components/App";
import Cart from "../components/Cart";
import Shop from "../components/Shop";
import Error from "../components/Error";
import Home from "../components/Home";

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
