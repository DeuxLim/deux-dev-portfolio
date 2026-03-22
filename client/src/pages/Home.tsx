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
			{/* Header */}
			<section className="flex gap-2">
				{/* Profile picture */}
				<div className="w-40 h-40 overflow-hidden shrink-0">
					<img
						src={me}
						alt=""
						className="w-full h-full object-cover object-top"
					/>
				</div>
				{/* Basic Info */}
				<div className="flex w-full justify-center flex-col p-1">
					{/* Top */}
					<div className="flex flex-col h-full gap-2">
						<div className="flex flex-col gap-1">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-4xl ">
									Deux Daniel Lim
								</div>
								<ThemeToggleButton />
							</div>
							<div className="">
								Full Stack Developer ( Laravel & React )
							</div>
						</div>
						<div className="flex items-center justify-start text-xs gap-1">
							<IoLocationOutline />
							Metro Manila
						</div>
						<div className="flex items-center justify-start text-xs gap-1">
							<IoBriefcase />3 years work experience | BS-IT
							Graduate
						</div>
					</div>
					{/* Bottom */}
					<div className="flex gap-4">
						<div className="flex items-center justify-center gap-1">
							<IoLogoGithub className="text-2xl" />
							<div className="text-xs">Github / DeuxLim</div>
						</div>
						<div className="flex items-center justify-center gap-1">
							<IoLogoLinkedin className="text-2xl" />
							<div className="text-xs">Github / DeuxLim</div>
						</div>
						<div className="flex items-center justify-center gap-1">
							<IoCall className="text-2xl" />
							<div className="text-xs">+63 945-428-6156</div>
						</div>
						<div className="flex items-center justify-center gap-1">
							<IoMail className="text-2xl" />
							<div className="text-xs">limdeux27@gmail.com</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<section></section>
		</main>
	);
}
