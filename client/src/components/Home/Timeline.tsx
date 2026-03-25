const experiences = [
	{
		year: "2026",
		position: "Full Stack Developer",
		company: "Orro Group",
	},
	{
		year: "2023",
		position: "Frontend Developer Intern",
		company: "Orro Group",
	},
	{
		year: "2023",
		position: "BS Information Technology",
		company: "La Consolacion University",
		honor: "Cum Laude",
	},
	{
		year: "2020",
		position: "Hello World!",
		company: "",
	},
];

type Experience = (typeof experiences)[number];

export default function Timeline() {
	return (
		<div className="space-y-4">
			<div className="text-lg font-bold">Timeline</div>
			<div className="bg-white dark:bg-black font-sans">
				<div className="flex flex-col gap-2">
					{experiences.map((exp: Experience, index: number) => (
						<div
							key={index}
							className="flex flex-row items-start gap-2.5"
						>
							{/* Dot + Line */}
							<div className="flex flex-col items-center w-3.5 shrink-0 self-stretch">
								<div
									className={`w-2 h-2 shrink-0 mt-0.5 dark:bg-white ${
										index === 0 ? "bg-black" : "bg-zinc-200"
									}`}
								/>
								{index < experiences.length - 1 && (
									<div className="w-px flex-1 bg-zinc-200 mt-1" />
								)}
							</div>

							{/* Content */}
							<div className="pb-7 flex-1 min-w-0">
								{/* Position + Year */}
								<div className="flex items-start justify-between gap-2">
									<span className="text-[13px] font-semibold text-black dark:text-white leading-none flex-1 min-w-0">
										{exp.position}
									</span>
									<span className="text-xs text-zinc-500 dark:text-zinc-400 tracking-wide leading-none shrink-0">
										{exp.year}
									</span>
								</div>

								{/* Company + Honor */}
								{(exp.company || exp.honor) && (
									<div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-start gap-2">
										<div className="flex-1 min-w-0">
											{exp.honor && (
												<span>{exp.honor} · </span>
											)}
											<span>{exp.company}</span>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
