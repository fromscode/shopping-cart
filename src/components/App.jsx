import "../styles/App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import useShopData from "../helpers/useShopData";
import CartFactory from "../helpers/CartFactory";
import { useState } from "react";

function App() {
  const { data, loading, error } = useShopData();
  const [cartObj, setCartObj] = useState(() => new CartFactory());

  return (
    <>
      <Navbar cartCount={cartObj.count} />
      <Outlet context={[data, loading, error, cartObj, setCartObj]} />
    </>
  );
}

export default App;
