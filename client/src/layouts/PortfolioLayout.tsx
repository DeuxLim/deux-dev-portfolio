import FloatingChat from "@/components/Chatbot/FloatingChat";
import useTheme from "@/context/Theme/useTheme";
import { Outlet } from "react-router";

export default function PortfolioLayout() {
	const { isDarkMode } = useTheme();
	return (
		<div
			className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} bg-cover bg-center`}
		>
			{/* Main Template */}
			<div className="max-w-4xl mx-auto px-4 pt-8">
				<Outlet />
			</div>

			{/* Chat Feature */}
			<FloatingChat />
		</div>
	);
}
