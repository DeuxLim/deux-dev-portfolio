import { createBrowserRouter } from "react-router";
import PortfolioLayout from "./layouts/PortfolioLayout";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: PortfolioLayout,
	},
]);

export default routes;
