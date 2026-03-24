import GitHeapMap from "../GitHeatMap";

export default function Heatmap() {
	return (
		<div className="space-y-4">
			<div className="text-lg font-bold">Daily Coding Heat Map</div>
			<div className="grid grid-flow-col grid-rows-7 gap-px h-26">
				<GitHeapMap />
			</div>
		</div>
	);
}
