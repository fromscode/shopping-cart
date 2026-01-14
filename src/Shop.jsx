import { useOutletContext } from "react-router";

export default function Shop() {
	const [data, loading, error] = useOutletContext();

	if (loading) return <div>Loading</div>;

	if (error) return <div>Error</div>;

	console.log(data);

	return data.map((item) => <div key={item.id}>{item.title}</div>);
}
