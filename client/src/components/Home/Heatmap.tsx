import { GitHubCalendar } from "react-github-calendar";

export default function Heatmap() {
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
				/>
			</div>
		</div>
	);
}
