import {
	SiCss,
	SiDocker,
	SiExpress,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJquery,
	SiLaravel,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiOpenai,
	SiPhp,
	SiPostman,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BsClaude } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";
import { portfolioContent, type TechStackItem } from "@/data/portfolioContent";

const iconMap = {
	javascript: SiJavascript,
	typescript: SiTypescript,
	react: SiReact,
	jquery: SiJquery,
	tailwindcss: SiTailwindcss,
	html: SiHtml5,
	css: SiCss,
	php: SiPhp,
	nodejs: SiNodedotjs,
	laravel: SiLaravel,
	express: SiExpress,
	mysql: SiMysql,
	mongodb: SiMongodb,
	git: SiGit,
	vscode: VscVscode,
	github: SiGithub,
	gitlab: FaGitlab,
	docker: SiDocker,
	claude: BsClaude,
	openai: SiOpenai,
	postman: SiPostman,
} as const;

function TechChip({ item }: { item: TechStackItem }) {
	const Icon = iconMap[item.iconKey];

	return (
		<div className="app-chip flex cursor-pointer items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2">
			<Icon className={item.iconClassName} />
			<div className="text-sm">{item.name}</div>
		</div>
	);
}

export default function TechStack() {
	return (
		<div className="space-y-3 sm:space-y-4">
			<div className="text-base sm:text-lg font-bold">
				{portfolioContent.techStack.title}
			</div>

			{portfolioContent.techStack.sections.map((section, sectionIndex) => (
				<div key={section.name}>
					<div className="space-y-1">
						<div className="font-medium">{section.name}</div>
						<div className="flex flex-wrap gap-2">
							{section.items.map((item) => (
								<TechChip key={item.name} item={item} />
							))}
						</div>
					</div>

					{sectionIndex < portfolioContent.techStack.sections.length - 1 && (
						<div className="my-1 h-px bg-(--app-border)" />
					)}
				</div>
			))}
		</div>
	);
}
