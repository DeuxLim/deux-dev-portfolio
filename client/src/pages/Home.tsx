import me from "@/assets/me.jpeg";
import GitHeapMap from "@/components/GitHeatMap";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { BsClaude } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";
import {
	IoBriefcase,
	IoCall,
	IoLocationOutline,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail,
} from "react-icons/io5";
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

export default function Home() {
	return (
		<main className="flex flex-col gap-4">
			{/* Mobile Profile And Cover */}
			<div className="w-full md:hidden flex items-center justify-center h-50 rounded-4xl bg-[url('./src/assets/coverphoto.jpg')] bg-cover bg-center">
				<div className="md:hidden size-40 overflow-hidden shrink-0 rounded-full shadow-lg">
					<img
						src={me}
						alt=""
						className="w-full h-full object-cover object-top"
					/>
				</div>
			</div>

			{/* Header */}
			<section className="flex gap-4 h-40">
				{/* Profile picture */}
				<div className="hidden h-full md:flex items-center justify-center">
					<div className="md:flex md:h-40 md:w-40 overflow-hidden rounded-lg">
						<img
							src={me}
							alt=""
							className="w-full h-full object-cover object-top"
						/>
					</div>
				</div>

				{/* Basic Info */}
				<div className="flex w-full justify-center flex-col p-1 gap-4">
					{/* Top */}
					<div className="flex flex-col h-full gap-2">
						<div className="flex flex-col gap-1 min-w-0">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-2xl md:text-4xl ">
									Deux Daniel Lim
								</div>
								<ThemeToggleButton />
							</div>
							<div className="text-xs md:text-sm">
								Full Stack Developer ( Laravel & React )
							</div>
						</div>
						<div className="flex items-center justify-start text-xs gap-1 font-light">
							<IoLocationOutline />
							Metro Manila
						</div>
						<div className="flex items-center justify-start text-xs gap-1 font-light">
							<IoBriefcase />3 years work experience | BS-IT
							Graduate | Cum Laude
						</div>
					</div>
					{/* Bottom */}
					<div className="flex gap-1 flex-wrap">
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoLogoGithub className="text-xl" />
							<div className="md:text-xs md:block font-light hidden">
								Github
							</div>
						</div>
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoLogoLinkedin className="text-xl" />
							<div className="md:text-xs md:block font-light hidden">
								LinkedIn
							</div>
						</div>
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoCall className="text-xl" />
							<div className="md:text-xs md:block font-light hidden text-nowrap">
								+63 945-428-6156
							</div>
						</div>
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoMail className="text-xl" />
							<div className="md:text-xs md:block font-light hidden">
								limdeux27@gmail.com
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-start">
				{/* About */}
				<div className="md:col-span-8 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2">
					<div className="text-lg font-bold">About</div>
					<div className="text-sm font-light space-y-3">
						<p>
							I'm a full-stack web developer with 3 years of
							experience building, maintaining, and improving
							production systems using PHP and Javascript
							ecosystem. I focus on writing clean, maintainable
							code and delivering practical solutions—whether it's
							fixing bugs, improving existing systems, or building
							new features from the ground up.
						</p>

						<p>
							I'm comfortable working across the stack, adapting
							to different problems, and choosing the right
							approach based on what the system actually needs.
						</p>

						<p>
							Outside of work, I actively build projects to
							sharpen my skills and stay current with modern
							technologies. I enjoy solving problems and creating
							things that have real impact, and I'm continuously
							learning to improve how I design, build, and scale
							applications.
						</p>

						<p>
							I'm looking for opportunities where I can
							contribute, grow with experienced developers, and
							take on more complex challenges over time.
						</p>
					</div>
				</div>
				{/* Experience */}
				<div className="md:col-span-4 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2 row-span-2 h-full">
					<div className="text-lg font-bold">Experience</div>
				</div>
				{/* Tech Stack */}
				<div className="md:col-span-8 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2">
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
				{/* Projects */}
				<div className="md:col-span-12 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2">
					<div className="text-lg font-bold">Projects</div>
				</div>
				{/* Coding Heat Map */}
				<div className="md:col-span-8 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2 ">
					<div className="text-lg font-bold">
						Daily Coding Heat Map
					</div>
					<div className="grid grid-flow-col grid-rows-7 gap-px h-26">
						<GitHeapMap />
					</div>
				</div>
				{/* Certifications */}
				<div className="md:col-span-4 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2 row-span-1 h-full">
					<div className="text-lg font-bold">Certifications</div>
				</div>
				{/* Gallery */}
				<div className="md:col-span-12 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2">
					<div className="text-lg font-bold">Gallery</div>
				</div>
				{/* Footer */}
				<div className="md:col-span-12 col-span-4 border-t border-gray-200 dark:border-zinc-900 p-4 flex items-center justify-center mt-4 h-24">
					<div className="text-sm font-light">
						© 2026 Deux Lim. All rights reserved.
					</div>
				</div>
			</div>
		</main>
	);
}
