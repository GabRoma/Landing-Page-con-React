import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbo from "./jumbo.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbo/>
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;
