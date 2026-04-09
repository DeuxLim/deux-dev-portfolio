import { Link } from "react-router";
import ProjectCard from "@/components/Projects/ProjectCard";
import { portfolioProjects } from "@/data/projects";

export default function Projects() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="text-base font-bold sm:text-lg">
                    Recent Projects
                </div>
                {portfolioProjects.length > 4 && (
                    <Link
                        to="/projects"
                        className="cursor-pointer text-xs hover:underline"
                    >
                        View All
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-2">
                {portfolioProjects.slice(0, 4).map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}
