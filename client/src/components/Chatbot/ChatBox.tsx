import useChat from "@/context/Chat/useChat";
import { FaMinus } from "react-icons/fa6";
import ChatIntro from "@/components/Chatbot/ChatIntro";
import { useEffect, useState, type ReactNode } from "react";
import { useChatStream } from "@/hooks/useChatStream";
import { ChatThinkingLoader } from "./ChatThinkingLoader";
import me from "@/assets/me.jpeg";
import { HiMiniPaperAirplane } from "react-icons/hi2";

export default function ChatBox() {
	const { setIsChatOpen } = useChat();
	const { messages, isStreaming, sendMessage, lastMessageRef } =
		useChatStream();
	const [input, setInput] = useState("");

	const handleSend = async () => {
		if (!input.trim()) return;
		const text = input;
		setInput(""); // clear input immediately
		await sendMessage(text);
	};

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, lastMessageRef]);

	return (
		<div className="w-xs md:w-sm md:h-125 bg-white dark:bg-black text-black dark:text-white fixed bottom-0 right-[3%] rounded-tr-2xl rounded-tl-2xl shadow-lg overflow-hidden border border-zinc-200">
			<div className="flex flex-col h-full">
				{/* Header */}
				<div className="w-full h-12 rounded-tr-2xl rounded-tl-2xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
					<div className="flex px-4 h-full items-center justify-center gap-2">
						<div className="size-8 bg-black rounded-full overflow-clip">
							<img src={me} alt="" className="object-cover" />
						</div>
						<div className="flex-1">Deux Lim</div>
						<div className="flex gap-2 items-center justify-center text-blue-500">
							<div
								onClick={() => setIsChatOpen(false)}
								className="text-xl cursor-pointer"
							>
								<FaMinus />
							</div>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 p-4 overflow-auto scroll flex gap-4 flex-col">
					<div className="flex gap-4 flex-col">
						<div className="flex items-end gap-2">
							<div className="w-6 shrink-0 h-full flex items-end">
								<img
									src={me}
									className="size-6 rounded-full"
									alt=""
								/>
							</div>
							<div className="bg-gray-200 px-4 py-1 rounded-md max-w-[70%] text-sm">
								<ChatIntro />
							</div>
						</div>
					</div>

					<div className="flex gap-4 flex-col">
						{messages
							.filter((msg) => msg.parts[0].text !== "")
							.map(
								(msg, index): ReactNode =>
									msg.role === "model" ? (
										<div
											className="flex items-end gap-2"
											key={index}
										>
											<div className="w-6 shrink-0 h-full flex items-end">
												<img
													src={me}
													className="size-6 rounded-full bg-black"
													alt=""
												/>
											</div>
											<div className="bg-gray-200 px-4 py-1 rounded-md max-w-[70%] text-sm">
												{msg.parts[0].text}
											</div>
										</div>
									) : (
										<div
											className="flex justify-end gap-2"
											key={index}
										>
											<div className="bg-blue-700 text-white px-4 py-1 rounded-md max-w-[70%] text-sm">
												{msg.parts[0].text}
											</div>
										</div>
									),
							)}
					</div>

					{isStreaming &&
						messages[messages.length - 1]?.parts[0].text === "" && (
							<ChatThinkingLoader />
						)}

					<div ref={lastMessageRef}></div>
				</div>

				{/* Input */}
				<div className="h-16 flex items-center justify-around gap-4 px-4">
					<input
						type="text"
						placeholder="Aa"
						value={input}
						className="bg-gray-100 rounded-full px-4 h-8 flex-1 text-sm"
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSend();
						}}
					/>
					<button
						type="button"
						className="p-2 cursor-pointer hover:bg-blue-100 rounded-full disabled:cursor-not-allowed"
						onClick={handleSend}
						disabled={!input.trim()}
					>
						<HiMiniPaperAirplane className="text-2xl text-blue-500" />
					</button>
				</div>
			</div>
		</div>
	);
}
