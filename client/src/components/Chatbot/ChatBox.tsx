import useChat from "@/context/Chat/useChat";
import { FaCircle, FaMinus, FaThumbsUp } from "react-icons/fa6";
import ChatIntro from "@/components/Chatbot/ChatIntro";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios.client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Message } from "../../../../shared/types/gemini.types.ts";

export default function ChatBox() {
	const { setIsChatOpen } = useChat();
	const [messages, setMessages] = useState<Message[]>([]);
	const lastMessageRef = useRef<HTMLDivElement | null>(null);
	const [message, setMessage] = useState<Message>({
		role: "user",
		parts: [{ text: "" }],
	});

	const mutation = useMutation({
		mutationKey: ["chat"],
		mutationFn: () => {
			const response = api.post("/chat/send-message", {
				newMessage: {
					role: "user",
					parts: [{ text: message.parts[0].text }],
				},
				history: messages,
			});
			return response;
		},

		onMutate: () => {
			setMessages((prev) => [...prev, message]);
		},

		onSettled: (data) => {
			setMessages((prev) => [
				...prev,
				{ role: "model", parts: [{ text: data?.data?.response }] },
			]);
		},
	});

	const handleSendMessage = () => {
		setMessage({
			role: "user",
			parts: [{ text: "" }],
		});
		mutation.mutate();
	};

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, mutation.isPending]);

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
					{/* Intro Message */}
					<div className="flex gap-4 flex-col">
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

					<div className="flex gap-4 flex-col">
						{messages.length > 0 &&
							messages.map((msg, index): ReactNode => {
								return msg.role === "model" ? (
									<div
										className="flex items-end gap-2"
										key={index}
									>
										<div className="w-6 shrink-0 h-full flex items-end">
											<img
												src="#"
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
								);
							})}
					</div>

					{mutation.isPending && (
						<div className="ml-8 w-20 px-2 py-2 bg-gray-200 rounded-md flex items-center justify-center gap-2">
							<FaCircle className="text-gray-400 text-sm animate-bounce" />
							<FaCircle className="text-gray-400 text-sm animate-bounce [animation-delay:0.15s]" />
							<FaCircle className="text-gray-400 text-sm animate-bounce [animation-delay:0.3s]" />
						</div>
					)}

					<div ref={lastMessageRef}></div>
				</div>

				{/* Input */}
				<div className="h-16 flex items-center justify-around gap-4 px-4">
					<input
						type="text"
						placeholder="Aa"
						name=""
						id=""
						value={message.parts[0].text}
						className="bg-gray-100 rounded-full px-4 h-8 flex-1 text-sm"
						onChange={(e) =>
							setMessage((prev) => ({
								...prev,
								role: "user",
								parts: [{ text: e.target.value }],
							}))
						}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSendMessage();
							}
						}}
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
