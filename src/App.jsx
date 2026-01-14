import "./App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import useShopData from "./useShopData";

function App() {
	const { data, loading, error } = useShopData();

	return (
		<>
			<Navbar />
			<Outlet context={[data, loading, error]} />
		</>
	);
}

export default App;
