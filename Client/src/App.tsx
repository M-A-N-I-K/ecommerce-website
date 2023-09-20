import { useState } from "react";
// import Cart from "./Components/Cart";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumb";
import "./app.css";
import Shop from "./Pages/Shop";
function App() {
	const [viewCart, setViewCart] = useState<boolean>(false);
	const pageContent = viewCart ? <Cart /> : <Shop />;

	const content = (
		<>
			<Header viewCart={viewCart} setViewCart={setViewCart} />
			<Navbar />
			<BreadCrumb />
			{pageContent}
			<Footer />
		</>
	);

	return content;
}

export default App;
