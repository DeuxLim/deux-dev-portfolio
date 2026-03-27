import { useEffect, useState } from "react";

const THINKING_WORDS = [
	"Thinking",
	"Discombobulating",
	"Pondering",
	"Calculating",
	"Brewing",
	"Conjuring",
	"Vibing",
	"Contemplating",
	"Caffeinating",
	"Synthesizing",
	"Let me cook",
];

export function ChatThinkingLoader() {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setVisible(false);
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % THINKING_WORDS.length);
				setVisible(true);
			}, 300);
		}, 1800);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="ml-8 px-4 py-2 bg-gray-200 rounded-md w-fit text-sm text-gray-500 transition-opacity duration-300 flex items-end gap-px"
			style={{ opacity: visible ? 1 : 0 }}
		>
			<span>{THINKING_WORDS[index]}</span>
			<span className="inline-flex items-end gap-0.5 ml-0.5 mb-0.75">
				<span
					className="w-1 h-1 rounded-full bg-gray-500 animate-bounce"
					style={{ animationDelay: "0ms" }}
				/>
				<span
					className="w-1 h-1 rounded-full bg-gray-500 animate-bounce"
					style={{ animationDelay: "150ms" }}
				/>
				<span
					className="w-1 h-1 rounded-full bg-gray-500 animate-bounce"
					style={{ animationDelay: "300ms" }}
				/>
			</span>
		</div>
	);
}
