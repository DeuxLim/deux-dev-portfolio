import { useMemo } from "react";

type Day = {
	date: Date;
	value: number;
};

export default function GitHeapMap() {
	// 1. Generate stable data (no Math.random in render)
	const days: Day[] = useMemo(() => {
		return Array.from({ length: 365 }, (_, i) => {
			const date = new Date();
			date.setDate(date.getDate() - (364 - i));

			return {
				date,
				value: Math.floor(Math.random() * 5), // 0–4
			};
		});
	}, []);

	// 2. Group into weeks (columns)
	const weeks: Day[][] = useMemo(() => {
		const result: Day[][] = [];
		for (let i = 0; i < days.length; i += 7) {
			result.push(days.slice(i, i + 7));
		}
		return result;
	}, [days]);

	// 3. Month labels (only when month changes)
	const monthLabels: string[] = useMemo(() => {
		let lastMonth = "";

		return weeks.map((week) => {
			const month = week[0].date.toLocaleString("default", {
				month: "short",
			});

			if (month !== lastMonth) {
				lastMonth = month;
				return month;
			}
			return "";
		});
	}, [weeks]);

	// 4. Color scale
	const colors = [
		"bg-[color:var(--app-heat-0)]",
		"bg-[color:var(--app-heat-1)]",
		"bg-[color:var(--app-heat-2)]",
		"bg-[color:var(--app-heat-3)]",
		"bg-[color:var(--app-heat-4)]",
	] as const;

	return (
		<div className="text-[color:var(--app-muted)] self-start">
			{/* Months */}
			<div className="grid grid-flow-col auto-cols-[10px] gap-px mb-2 text-[10px]">
				{monthLabels.map((month, i) => (
					<div key={i}>{month}</div>
				))}
			</div>

			{/* Heatmap */}
			<div className="grid grid-flow-col grid-rows-7 auto-cols-[10px] gap-px">
				{weeks.map((week, wi) =>
					week.map((day, di) => (
						<div
							key={`${wi}-${di}`}
							title={day.date.toDateString()}
							className={`w-2.5 h-2.5 rounded-none ${colors[day.value]}`}
						/>
					)),
				)}
			</div>
		</div>
	);
}
