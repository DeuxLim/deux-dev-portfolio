import { createBrowserRouter } from "react-router";
import PortfolioLayout from "./layouts/PortfolioLayout";
import Home from "@/pages/Home";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: PortfolioLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
]);

export default routes;
