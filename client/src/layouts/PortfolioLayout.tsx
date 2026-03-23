import ChatHead from "@/components/Chatbot/ChatHead";
import useTheme from "@/context/Theme/useTheme";
import { Outlet } from "react-router";

export default function PortfolioLayout() {
	const { isDarkMode } = useTheme();
	return (
		<div
			className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} bg-cover bg-center`}
		>
			{/* Main Template */}
			<div className="max-w-5xl mx-auto px-4 py-8">
				<Outlet />
			</div>

			{/* Chat me Button */}
			<ChatHead />
		</div>
	);
}
