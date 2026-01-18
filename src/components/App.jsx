import "../styles/App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import useShopData from "../helpers/useShopData";
import CartFactory from "../helpers/CartFactory";
import { useState, useEffect } from "react";

function App() {
  const { data, loading, error } = useShopData();
  const [cartObj, setCartObj] = useState(() => new CartFactory());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const id = setInterval(() => {
        setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      }, 3000);

      return () => clearInterval(id);
    }
  }, [data, setIndex]);

  return (
    <>
      <Navbar cartCount={cartObj.count} />
      <main>
        <Outlet
          context={[data, loading, error, cartObj, setCartObj, index, setIndex]}
        />
      </main>
    </>
  );
}

export default App;
