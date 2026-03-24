const projects = [
	{
		name: "Developer Portfolio",
		description: "Resume-style developer portfolio",
		url: "", // add link
	},
	{
		name: "Messenger Clone",
		description: "Real-time chat app",
		url: "messenger-clone-iota-vert.vercel.app",
	},
	{
		name: "MILE 365 Run Club",
		description: "Membership system & dashboard",
		url: "mile365-runclub-landing.vercel.app",
	},
	{
		name: "VaultPass",
		description: "Secure password manager",
		url: "",
	},
];

export default function Projects() {
	return (
		<div className="flex flex-col gap-4">
			<div className="text-lg font-bold">Projects</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{projects.map((project, index) => (
					<a
						key={index}
						href={project.url ? `https://${project.url}` : "#"}
						target="_blank"
						className="border border-gray-50 dark:border-zinc-900 rounded-lg p-4 hover:shadow-sm transition flex flex-col gap-1.5"
					>
						{/* Name */}
						<div className="text-sm font-semibold text-black dark:text-white">
							{project.name}
						</div>

						{/* Description */}
						<div className="text-xs text-zinc-500 dark:text-white">
							{project.description}
						</div>

						{/* URL pill */}
						{project.url && (
							<div className="mt-2">
								<span className="text-[11px] px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">
									{project.url}
								</span>
							</div>
						)}
					</a>
				))}
			</div>
		</div>
	);
}
