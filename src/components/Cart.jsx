import { useOutletContext } from "react-router";

export default function Cart() {
  const [data, __, ___, cartObj, setCartObj] = useOutletContext();

  if (!cartObj.count) return <div>Cart is Empty</div>;

  const cards = [];

  for (const entry of cartObj.map.entries()) {
    cards.push(
      <div>
        {data[entry[0] + 1].title}
        Quantity: {entry[1]}
        <button
          type="button"
          onClick={() => {
            setCartObj(cartObj.nAddItem(entry[0]));
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            setCartObj(cartObj.nRemoveItem(entry[0]));
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCartObj(cartObj.nDeleteItem(entry[0]));
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  return <div>{cards}</div>;
}
