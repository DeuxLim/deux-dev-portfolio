import me from "@/assets/me.jpeg";
import { IoCloseSharp } from "react-icons/io5";
import useTheme from "@/context/Theme/useTheme";

export default function ChatHead() {
	const { isDarkMode } = useTheme();

	return (
		<div className="rounded-full hover:shadow-lg group fixed bottom-10 right-[4%] flex items-center justify-center gap-2">
			<div className="relative size-16">
				{/* Avatar */}
				<div className="size-16 rounded-full overflow-hidden">
					<img src={me} alt="" />
				</div>

				{/* Active Status */}
				<div className="bg-green-400 rounded-full size-4 absolute bottom-0 right-0"></div>

				{/* Close Button */}
				<div
					className={`group-hover:flex top-0 right-0 size-5 absolute hidden justify-center items-center ${
						isDarkMode
							? "bg-white text-black"
							: "bg-gray-900 text-white"
					} rounded-full`}
				>
					<IoCloseSharp size={14} />
				</div>

				{/* Chat Preview */}
				<div
					className={`group-hover:flex hidden rounded-lg shadow-[0_2px_4px_-2px_rgba(0,0,0,0.15)] absolute -top-3 -left-40 w-36 ${
						!isDarkMode
							? "text-white bg-black"
							: "text-black bg-white"
					}`}
				>
					<div className="flex flex-col p-3 text-sm">
						<div className="font-semibold">Deux Lim</div>
						<div className="font-light">Hi, Let's chat!</div>
					</div>

					{/* Arrow */}
					<div className="absolute top-[60%] left-full">
						<div
							className={`w-0 h-0 
								border-t-6 border-t-transparent
								border-b-6 border-b-transparent
								border-l-10 ${isDarkMode ? "border-l-white" : "border-l-black"}`}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
