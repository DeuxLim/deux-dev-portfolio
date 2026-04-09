import ProjectCard from "@/components/Projects/ProjectCard";
import { portfolioContent } from "@/data/portfolioContent";
import { Link } from "react-router";

export default function Projects() {
    return (
        <main className="flex flex-col gap-3 sm:gap-4">
            <div className="app-card p-2.5 sm:p-4">
                <div className="flex items-center justify-between gap-3">
                    <h1 className="text-base font-bold sm:text-lg">
                        {portfolioContent.projects.pageTitle}
                    </h1>
                    <Link to="/" className="text-xs hover:underline">
                        Back Home
                    </Link>
                </div>
            </div>

            <div className="app-card p-2.5 sm:p-4">
                <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-2">
                    {portfolioContent.projects.items.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
