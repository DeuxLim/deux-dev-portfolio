import useTheme from "@/context/Theme/useTheme";
import { Outlet } from "react-router";

export default function PortfolioLayout() {
	const { isDarkMode } = useTheme();
	return (
		<div
			className={`${isDarkMode ? "bg-black" : "bg-white"} h-screen bg-cover bg-center p-8`}
		>
			{/* Main Template */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<Outlet />
			</div>
		</div>
	);
}
