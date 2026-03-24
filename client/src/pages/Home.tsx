import me from "@/assets/me.jpeg";
import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import ExperienceTimeline from "@/components/Home/ExperienceTimeline";
import Footer from "@/components/Home/Footer";
import Gallery from "@/components/Home/Gallery";
import Heatmap from "@/components/Home/Heatmap";
import Projects from "@/components/Home/Projects";
import TechStack from "@/components/Home/TechStack";
import ThemeToggleButton from "@/components/ThemeToggleButton";

import {
	IoBriefcase,
	IoCall,
	IoLocationOutline,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail,
} from "react-icons/io5";

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
			<div className="grid grid-cols-4 md:grid-cols-12 gap-4">
				{/* About */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8 ">
					<About />
				</div>

				{/* Experience Timeline */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-1">
					<ExperienceTimeline />
				</div>

				{/* Projects */}
				<div className="md:col-span-8 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2">
					<div className="text-lg font-bold">Projects</div>
				</div>

				{/* Tech Stack */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-2">
					<TechStack />
				</div>

				{/* Projects */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8">
					<Projects />
				</div>

				{/* Coding Heat Map */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8">
					<Heatmap />
				</div>

				{/* Certifications */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-1">
					<Certifications />
				</div>

				{/* Gallery */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-12">
					<Gallery />
				</div>

				{/* Footer */}
				<div className="md:col-span-12 col-span-4 border-t border-gray-200 dark:border-zinc-900 p-4 flex items-center justify-center mt-4 h-24">
					<Footer />
				</div>
			</div>
		</main>
	);
}
