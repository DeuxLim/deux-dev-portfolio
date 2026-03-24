import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import ExperienceTimeline from "@/components/Home/ExperienceTimeline";
import Footer from "@/components/Home/Footer";
import Gallery from "@/components/Home/Gallery";
import Header from "@/components/Home/Header";
import Heatmap from "@/components/Home/Heatmap";
import Projects from "@/components/Home/Projects";
import TechStack from "@/components/Home/TechStack";

export default function Home() {
	return (
		<main className="flex flex-col gap-4">
			<Header />

			{/* Content */}
			<div className="grid grid-cols-4 md:grid-cols-12 gap-4">
				{/* About */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8 ">
					<About />
				</div>

				{/* Experience Timeline */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-1">
					<ExperienceTimeline />
				</div>

				{/* Projects */}
				<div className="md:col-span-8 col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 space-y-2">
					<div className="text-lg font-bold">Projects</div>
				</div>

				{/* Tech Stack */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-2">
					<TechStack />
				</div>

				{/* Projects */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8">
					<Projects />
				</div>

				{/* Coding Heat Map */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8">
					<Heatmap />
				</div>

				{/* Certifications */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-1">
					<Certifications />
				</div>

				{/* Gallery */}
				<div className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-12">
					<Gallery />
				</div>

				{/* Footer */}
				<div className="md:col-span-12 col-span-4 border-t border-gray-200 dark:border-zinc-900 p-4 flex items-center justify-center mt-4 h-24">
					<Footer />
				</div>
			</div>
		</main>
	);
}
