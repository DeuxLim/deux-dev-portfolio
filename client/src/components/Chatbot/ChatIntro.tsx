import { portfolioContent } from "@/data/portfolioContent";

export default function ChatIntro() {
	return (
		<div className="py-2 text-xs md:text-sm">
			<p className="">{portfolioContent.chat.introGreeting}</p>

			<p className="mt-2">{portfolioContent.chat.introLine}</p>

			<p className="mt-2">{portfolioContent.chat.introDescription}</p>

			<p className="mt-3">{portfolioContent.chat.introPrompt}</p>
			<ul className="mt-1 list-disc list-inside">
				{portfolioContent.chat.introQuestions.map((question) => (
					<li key={question}>{question}</li>
				))}
			</ul>

			<p className="mt-3">{portfolioContent.chat.introClose}</p>
		</div>
	);
}
