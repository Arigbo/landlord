import React from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	return (
		<div className="app">
			<HeaderComp />
			<main className="app-children">{children}</main>
			<FooterComp />
		</div>
			// const [background, setBackground] = useState(false);

			// const showNavHandler = () => {
			// 	setBackground(true);
			// };
			// const hideNavHandler = () => {
			// 	setBackground(false);
			// };
			// return (
			// 	<div className="app">
			// 		<div className={`app-inner${background ? "change" : "hide"}`}>
			// 		<HeaderComp />
			// 		<main className="app-children">{children}</main>
		
			// 		<FooterComp />
			// 		</div>
		
			// 		{background ? (
			// 							<i className="fa-solid fa-x c-pointer" onClick={hideNavHandler}> </i>
			// 						) : (
			// 							<i className="fa-solid fa-hamburger c-pointer" onClick={showNavHandler}> </i>
			// 						)}
			// 	</div>
	);
};

export default FrontLayout;
