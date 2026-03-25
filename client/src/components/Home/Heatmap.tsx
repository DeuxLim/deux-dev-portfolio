import { GitHubCalendar } from "react-github-calendar";
import useTheme from "@/context/Theme/useTheme";

export default function Heatmap() {
	const { isDarkMode } = useTheme();

	return (
		<div className="space-y-4 w-full">
			<div className="text-lg font-bold">Daily Coding Heat Map</div>

			<div className="w-full flex items-center justify-center">
				<GitHubCalendar
					username="deuxlim"
					transformData={(contributions) => {
						const now = new Date();
						const sixMonthsAgo = new Date();
						sixMonthsAgo.setMonth(now.getMonth() - 6);

						return contributions.filter((day) => {
							const date = new Date(day.date);
							return date >= sixMonthsAgo;
						});
					}}
					{...(isDarkMode && {
						theme: {
							dark: [
								"#161b22",
								"#0e4429",
								"#006d32",
								"#26a641",
								"#39d353",
							],
						},
						colorScheme: "dark",
					})}
				/>
			</div>
		</div>
	);
}
