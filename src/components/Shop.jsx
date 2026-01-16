import { useOutletContext } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

export default function Shop() {
  const [data, loading, error, cartObj, setCartObj] = useOutletContext();

  if (loading)
    return (
      <div className="shop">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className="shop">
        <span className="error">Network Error</span>
      </div>
    );

  return (
    <div className="shop">
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          cartObj={cartObj}
          setCartObj={setCartObj}
        ></Card>
      ))}
    </div>
  );
}

function Card({ item, cartObj, setCartObj }) {
  function handleClick(itemId) {
    setCartObj(cartObj.nAddItem(itemId));
  }

  return (
    <div className="card">
      <img
        src={item.image}
        alt={`Image of ${item.title}`}
        height={150}
        width={"auto"}
      />
      <h3>{item.title}</h3>
      <p>
        Ratings: {item.rating.rate} ({item.rating.count})
      </p>
      <button type="button" onClick={() => handleClick(item.id)}>
        Add to cart
      </button>
    </div>
  );
}
