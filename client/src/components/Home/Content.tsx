import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import Timeline from "@/components/Home/Timeline";
import Footer from "@/components/Home/Footer";
import Heatmap from "@/components/Home/Heatmap";
import Projects from "@/components/Home/Projects";
import TechStack from "@/components/Home/TechStack";
import Experience from "./Experience";
import { motion } from "motion/react";

export default function Content() {
	return (
		<div className="grid grid-cols-4 md:grid-cols-12 gap-4">
			{/* About */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8 "
			>
				<About />
			</motion.div>

			{/* Experience Timeline */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-1"
			>
				<Timeline />
			</motion.div>

			{/* Experience */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8"
			>
				<Experience />
			</motion.div>

			{/* Tech Stack */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-2"
			>
				<TechStack />
			</motion.div>

			{/* Projects */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8"
			>
				<Projects />
			</motion.div>

			{/* Coding Heat Map */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-8"
			>
				<Heatmap />
			</motion.div>

			{/* Certifications */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="col-span-4 border rounded-lg border-gray-100 dark:border-zinc-900 hover:shadow-md p-4 md:col-span-4 row-span-1"
			>
				<Certifications />
			</motion.div>

			{/* Footer */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="md:col-span-12 col-span-4 border-t border-gray-200 dark:border-zinc-900 p-4 flex items-center justify-center mt-4 h-24"
			>
				<Footer />
			</motion.div>
		</div>
	);
}
