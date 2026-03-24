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

export default function TechStack() {
	return (
		<div className="space-y-4">
			<div className="text-lg font-bold">Tech Stack</div>

			{/* Frontend */}
			<div className="space-y-1">
				<div className="font-medium">Frontend</div>
				<div className="flex gap-2 flex-wrap">
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiJavascript className="text-xl text-yellow-300" />
						<div className="text-sm">JavaScript</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiTypescript className="text-xl text-blue-500" />
						<div className="text-sm">TypeScript</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiReact className="text-xl text-cyan-400" />
						<div className="text-sm">React</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiJquery className="text-xl text-blue-600" />
						<div className="text-sm">JQuery</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiTailwindcss className="text-xl text-blue-400" />
						<div className="text-sm">TailwindCSS</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiHtml5 className="text-xl text-orange-400" />
						<div className="text-sm">HTML</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiCss className="text-xl text-blue-600" />
						<div className="text-sm">CSS</div>
					</div>
				</div>
			</div>

			<div className="h-1 border-b border-gray-200 dark:border-zinc-900"></div>

			{/* Backend */}
			<div className="space-y-1">
				<div className="font-medium">Backend</div>
				<div className="flex gap-2 flex-wrap">
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiPhp className="text-2xl text-blue-900" />
						<div className="text-sm">PHP</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiNodedotjs className="text-2xl text-green-900" />
						<div className="text-sm">Node</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiLaravel className="text-2xl text-red-500" />
						<div className="text-sm">Laravel</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiExpress className="text-2xl text-black dark:text-white" />
						<div className="text-sm">Express</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiMysql className="text-2xl text-cyan-800" />
						<div className="text-sm">MySQL</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiMongodb className="text-2xl text-green-800" />
						<div className="text-sm">MongoDB</div>
					</div>
				</div>
			</div>

			<div className="h-1 border-b border-gray-200 dark:border-zinc-900"></div>

			{/* Tools */}
			<div className="space-y-1">
				<div className="font-medium">Others</div>
				<div className="flex gap-2 flex-wrap">
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiGit className="text-xl text-red-500" />
						<div className="text-sm">Git</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<VscVscode className="text-xl text-blue-500" />
						<div className="text-sm">VS Code</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiGithub className="text-xl text-black dark:text-white" />
						<div className="text-sm">Github</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<FaGitlab className="text-xl text-orange-600" />
						<div className="text-sm">Gitlab</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiDocker className="text-xl text-blue-400" />
						<div className="text-sm">Docker</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<BsClaude className="text-xl text-orange-400" />
						<div className="text-sm">Claude code</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiOpenai className="text-xl text-black dark:text-white" />
						<div className="text-sm">OpenAI Codex</div>
					</div>
					<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-zinc-900 rounded-md cursor:pointer">
						<SiPostman className="text-xl text-orange-400" />
						<div className="text-sm">Postman</div>
					</div>
				</div>
			</div>
		</div>
	);
}
