import { Outlet } from "react-router";

export default function PortfolioLayout() {
	return (
		<div className="h-screen bg-white bg-cover bg-center p-8">
			{/* Main Template */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<Outlet />
			</div>
		</div>
	);
}
