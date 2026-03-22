import me from "@/assets/me.jpeg";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import useTheme from "@/context/Theme/useTheme";
import {
	IoBriefcase,
	IoCall,
	IoLocationOutline,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail,
} from "react-icons/io5";

export default function Home() {
	const { isDarkMode } = useTheme();
	return (
		<main className={`${isDarkMode ? "text-white" : "text-black"}`}>
			<div className="w-full md:hidden flex items-center justify-center mb-10 h-50 rounded-4xl bg-[url('./src/assets/coverphoto.jpg')] bg-cover bg-center">
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
					<div className="md:flex md:h-40 overflow-hidden shrink-0 rounded-lg">
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
							Graduate
						</div>
					</div>
					{/* Bottom */}
					<div className="flex gap-1 flex-wrap">
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoLogoGithub className="text-2xl" />
							<div className="text-xs font-light">Github</div>
						</div>
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoLogoLinkedin className="text-2xl" />
							<div className="text-xs font-light">LinkedIn</div>
						</div>
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoCall className="text-2xl" />
							<div className="text-xs font-light text-nowrap">
								+63 945-428-6156
							</div>
						</div>
						<div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md hover:shadow-lg border dark:border-0 dark:hover:bg-zinc-800 border-zinc-100 cursor-pointer">
							<IoMail className="text-2xl" />
							<div className="text-xs font-light">
								limdeux27@gmail.com
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<section>
				<div></div>
			</section>
		</main>
	);
}
