import { useOutletContext } from "react-router";

export default function Cart() {
  const [data, __, ___, cartObj, setCartObj] = useOutletContext();

  let totalAmount = 0;

  if (!cartObj.count) return <div className="empty-cart">Cart is Empty</div>;

  const cards = [];

  for (const entry of cartObj.map.entries()) {
    const item = data[entry[0] - 1];
    const amount = item.price * entry[1];
    totalAmount += amount;
    cards.push(
      <div className="cart-card" key={item.id}>
        <div className="cart-detail">
          <img
            src={item.image}
            alt={`image of ${item.title}`}
            height={125 / 2}
            width={150 / 2}
          />
          <span className="cart-title">{item.title}</span>
        </div>
        <div className="cart-usage">
          <button
            type="button"
            onClick={() => {
              setCartObj(cartObj.nAddItem(entry[0]));
            }}
          >
            +
          </button>
          <span className="cart-qty">Quantity: {entry[1]}</span>
          <button
            type="button"
            onClick={() => {
              setCartObj(cartObj.nRemoveItem(entry[0]));
            }}
          >
            -
          </button>
          <span className="amount">${amount.toFixed(2)}</span>
          <button
            type="button"
            className="delete-btn"
            onClick={() => {
              setCartObj(cartObj.nDeleteItem(entry[0]));
            }}
          >
            Delete
          </button>
        </div>
      </div>,
    );
  }

  return (
    <div className="cart">
      {cards}
      <div className="card-footer">
        Total Amount:{" "}
        <span className="tot-amount">${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
}
