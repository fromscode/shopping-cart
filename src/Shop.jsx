import { useOutletContext } from "react-router";

export default function Shop() {
  const [data, loading, error] = useOutletContext();

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  console.log(data);

  return (
    <div className="shop">
      {data.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
}

function Card({ item }) {
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
      <button type="button">Add to cart</button>
    </div>
  );
}
