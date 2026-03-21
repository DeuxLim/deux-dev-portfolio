import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function PortfolioLayout() {
	return (
		<div className="h-screen bg-white dark:bg-black">
			<div className="h-full grid grid-cols-12 gap-2">
				<div className="col-start-3 col-span-8 flex justify-center items-center">
					<ThemeToggleButton />
				</div>
			</div>
		</div>
	);
}
