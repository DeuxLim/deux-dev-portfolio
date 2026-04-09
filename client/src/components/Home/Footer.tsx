import { portfolioContent } from "@/data/portfolioContent";

export default function Footer() {
	return (
		<div>
			<div className="text-sm font-light">{portfolioContent.footer.text}</div>
		</div>
	);
}
