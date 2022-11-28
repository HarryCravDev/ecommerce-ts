import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
	return (
		<Router>
			<Navbar />
			<main className="py-3">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/product/:id" element={<ProductScreen />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
