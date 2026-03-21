import useTheme from "@/context/Theme/useTheme";
import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function ThemeToggleButton() {
	const { isDarkMode, toggleTheme } = useTheme();

	const [isAnimating, setIsAnimating] = useState(false);

	const handleToggle = () => {
		setIsAnimating(true);
		toggleTheme();

		setTimeout(() => {
			setIsAnimating(false);
		}, 500);
	};

	return (
		<button
			className={`w-14 h-6 p-0.5 rounded-full flex items-center shadow-sm transform transition-all ease-in-out duration-300
                 ${!isDarkMode ? "bg-zinc-200" : "bg-zinc-400"} 
            `}
			onClick={handleToggle}
		>
			<div
				className={`w-8 h-5 rounded-full flex items-center justify-center transform transition-all ease-in-out duration-500
                ${!isDarkMode ? "bg-zinc-50 translate-x-0" : "bg-black/80 translate-x-5"}`}
			>
				{!isDarkMode ? (
					<IoMdSunny
						className={`text-sm ${isAnimating ? "animate-spin" : ""}`}
					/>
				) : (
					<IoMdMoon className="text-sm text-white" />
				)}
			</div>
		</button>
	);
}
