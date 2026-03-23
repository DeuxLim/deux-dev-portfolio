import me from "@/assets/me.jpeg";
import { IoCloseSharp } from "react-icons/io5";
import useTheme from "@/context/Theme/useTheme";

export default function ChatHead() {
	const { isDarkMode } = useTheme();

	return (
		<div className="rounded-full hover:shadow-lg group fixed bottom-10 right-[4%] flex items-center justify-center gap-2">
			<div className="relative size-20">
				<div className="size-20 rounded-full overflow-hidden">
					<img src={me} alt="" />
				</div>

				{/* Active Status */}
				<div className="bg-green-400 rounded-full size-5 absolute bottom-0 right-0"></div>

				{/* Close Button */}
				<div
					className={`group-hover:flex top-0 right-0  size-6 absolute hidden justify-center items-center ${isDarkMode ? "bg-white text-black" : "bg-gray-900 text-white"} rounded-full`}
				>
					<IoCloseSharp />
				</div>

				{/* Chat Preview */}
				<div
					className={`group-hover:flex hidden rounded-lg shadow-lg absolute -top-4 -left-44 w-40  ${!isDarkMode ? "text-white bg-black" : "text-black bg-white"}`}
				>
					<div className="flex flex-col p-4">
						<div className="font-semibold">Deux Lim</div>
						<div className="font-light">Hi, Let's chat!</div>
					</div>

					<div className="absolute top-[60%] left-full">
						<div
							className={`w-0 h-0 
									border-t-8 border-t-transparent
									border-b-8 border-b-transparent
									border-l-12 ${isDarkMode ? "border-l-white" : "border-l-black"} `}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
