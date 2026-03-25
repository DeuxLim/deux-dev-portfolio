import { createBrowserRouter } from "react-router";
import PortfolioLayout from "./layouts/PortfolioLayout";
import Home from "@/pages/Home";
import ChatProvider from "./context/Chat/ChatProvider";

const routes = createBrowserRouter([
	{
		path: "/",
		element: (
			<ChatProvider>
				<PortfolioLayout />
			</ChatProvider>
		),
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
]);

export default routes;
