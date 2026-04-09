import { portfolioContent } from "@/data/portfolioContent";

export default function About() {
	return (
		<div className="space-y-4">
			<div className="text-base sm:text-lg font-bold">
				{portfolioContent.about.title}
			</div>
			<div className="text-[13px] sm:text-sm font-light space-y-3">
				{portfolioContent.about.paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}
