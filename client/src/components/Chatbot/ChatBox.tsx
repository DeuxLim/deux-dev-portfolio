import useChat from "@/context/Chat/useChat";
import { FaMinus, FaThumbsUp } from "react-icons/fa6";
import ChatIntro from "@/components/Chatbot/ChatIntro";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios.client";
import { useEffect, useState } from "react";

export default function ChatBox() {
	const { setIsChatOpen } = useChat();
	const [message, setMessage] = useState("");

	const mutation = useMutation({
		mutationKey: ["chat"],
		mutationFn: () => {
			const response = api.post("/chat/send-message", {
				role: "user",
				parts: [{ text: message }],
			});
			return response;
		},
	});

	const handleSendMessage = () => {
		mutation.mutate();
	};

	useEffect(() => {
		if (mutation.data) {
			console.log(mutation.data);
		}
	}, [mutation]);

	return (
		<div className="w-xs md:w-sm md:h-125 bg-white dark:bg-black text-black dark:text-white fixed bottom-0 right-[3%] rounded-tr-2xl rounded-tl-2xl shadow-lg overflow-hidden border border-zinc-200">
			<div className="flex flex-col h-full">
				{/* Header */}
				<div className="w-full h-12 rounded-tr-2xl rounded-tl-2xl shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
					<div className="flex px-4 h-full items-center justify-center gap-2">
						<div className="size-8 bg-black rounded-full">
							<img src="#" alt="" />
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
					{/* Inbound Group */}
					<div className="flex gap-4 flex-col">
						{/* Sample Chat 1 */}
						<div className="flex items-end gap-2">
							<div className="w-6 shrink-0 h-full flex items-end">
								<img
									src="#"
									className="size-6 rounded-full bg-black"
									alt=""
								/>
							</div>
							<div className="bg-gray-200 px-4 py-1 rounded-md max-w-[70%] text-sm">
								<ChatIntro />
							</div>
						</div>
					</div>

					{/* Outbound Group */}
					<div className="flex gap-4 flex-col">
						{/* Sample Chat 1 */}
						<div className="flex justify-end gap-2">
							<div className="bg-blue-700 text-white px-4 py-1 rounded-md max-w-[70%] text-sm">
								Test chat
							</div>
						</div>
					</div>
				</div>

				{/* Input */}
				<div className="h-16 flex items-center justify-around gap-4 px-4">
					<input
						type="text"
						placeholder="Aa"
						name=""
						id=""
						value={message}
						className="bg-gray-100 rounded-full px-4 h-8 flex-1 text-sm"
						onChange={(e) => setMessage(e.target.value)}
					/>

					<button
						type="button"
						className="px-2 cursor-pointer"
						onClick={handleSendMessage}
					>
						<FaThumbsUp className="text-2xl text-blue-500" />
					</button>
				</div>
			</div>
		</div>
	);
}
