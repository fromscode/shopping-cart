import { useOutletContext } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";

export default function Shop() {
  const [data, loading, error, cartObj, setCartObj] = useOutletContext();

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="error">
        Network Error <div>(check console for details)</div>
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
  const [qty, setQty] = useState(1);

  function handleClick(itemId) {
    setCartObj(cartObj.nAddItem(itemId, qty));
  }

  return (
    <div className="card">
      <img
        src={item.image}
        alt={`Image of ${item.title}`}
        height={150}
        width={"auto"}
      />
      <h3 className="image-title">{item.title}</h3>
      <p>
        {item.rating.rate}
        <span className="star">&#9733;</span> ({item.rating.count} ratings)
      </p>
      <div className="qty">
        <div className="quantity">Quantity</div>
        <button
          type="button"
          className="plus-btn"
          onClick={() => setQty((qty) => qty + 1)}
        >
          +
        </button>
        <input
          type="number"
          name="number"
          value={qty}
          min={1}
          onChange={(e) => setQty(Number(e.target.value))}
        />
        <button
          type="button"
          className="minus-btn"
          onClick={() => setQty((qty) => (qty <= 1 ? 1 : qty - 1))}
        >
          -
        </button>
      </div>
      <div className="card-bottom">
        <div className="price">${item.price.toFixed(2)}</div>
        <button
          type="button"
          className="add-btn"
          onClick={() => handleClick(item.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
