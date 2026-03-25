export default function ChatIntro() {
	return (
		<div className="p-4 text-sm leading-relaxed">
			<p className="font-semibold">Hey 👋 I’m Deux</p>

			<p className="mt-2">
				I build web apps using{" "}
				<span className="font-medium">Laravel</span> and{" "}
				<span className="font-medium">React</span>.
			</p>

			<p className="mt-2">
				Feel free to ask me anything about my work, how I build things,
				or what I’ve been working on lately.
			</p>

			<p className="mt-3 font-medium">Try asking:</p>
			<ul className="mt-1 list-disc list-inside space-y-1">
				<li>What projects have you built?</li>
				<li>What’s your tech stack?</li>
				<li>How do you approach backend development?</li>
			</ul>

			<p className="mt-3">Or just say hi 🙂</p>
		</div>
	);
}
