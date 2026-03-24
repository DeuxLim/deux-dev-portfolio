const experiences = [
	{
		role: "Full-Stack Developer",
		company: "Orro Group",
		period: "Mar 2023 - Present",
		highlights: [
			"Build and maintain production CRM systems across frontend and backend, focusing on performance and reliability",

			"Integrate REST APIs with external platforms and internal services, enabling real-time data sync and workflow automation",

			"Develop AI-assisted features using Azure OpenAI, including a context-aware chatbot that improves internal support efficiency",

			"Design scalable backend services with Laravel and SQL using MVC and OOP best practices",

			"Create internal tools for network operations (monitoring and automation), reducing manual work and improving system visibility",
		],
	},

	{
		role: "Developer Intern",
		company: "Orro Group",
		period: "Mar 2023 - Jun 2023",
		highlights: [
			"Supported development of a legacy CRM system across frontend and backend",

			"Fixed bugs and assisted in feature enhancements, improving system stability",

			"Worked closely with senior developers, gaining hands-on experience in production workflows",
		],
	},
];

export default function Experience() {
	return (
		<div className="space-y-4">
			<div className="text-lg font-bold">Experience</div>
			<div className="flex flex-col gap-6">
				{experiences.map((exp, index) => (
					<div key={index} className="flex flex-col gap-2">
						{/* Header */}
						<div className="flex items-start justify-between">
							<div>
								<div className="text-md font-semibold text-black dark:text-white">
									{exp.role}
								</div>
								<div className="text-sm text-zinc-500">
									{exp.company}
								</div>
							</div>

							<div className="text-xs text-zinc-400 whitespace-nowrap">
								{exp.period}
							</div>
						</div>

						{/* Divider */}
						<div className="h-px bg-zinc-200 dark:bg-zinc-800" />

						{/* Highlights */}
						<ul className="flex flex-col gap-1.5 text-sm text-zinc-600 dark:text-white">
							{exp.highlights.map((item, i) => (
								<li key={i} className="flex gap-2">
									<span className="mt-1.5 w-1 h-1 bg-zinc-400 rounded-full shrink-0" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
