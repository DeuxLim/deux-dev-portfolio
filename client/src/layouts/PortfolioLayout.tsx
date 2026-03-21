import useTheme from "@/context/Theme/useTheme";

export default function PortfolioLayout() {
	const { toggleTheme } = useTheme();

	const handleToggleTheme = () => {
		toggleTheme();
	};

	return (
		<div className="dark:bg-black">
			<button
				className="dark:text-white p-2 border"
				onClick={handleToggleTheme}
			>
				TOGGLE ME
			</button>
		</div>
	);
}
