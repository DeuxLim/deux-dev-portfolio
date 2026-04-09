import type { PortfolioProject } from "@/data/projects";

type ProjectCardProps = {
    project: PortfolioProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const hasUrl = Boolean(project.url);

    return (
        <a
            href={hasUrl ? `https://${project.url}` : undefined}
            target={hasUrl ? "_blank" : undefined}
            rel={hasUrl ? "noreferrer noopener" : undefined}
            aria-disabled={!hasUrl}
            className={`app-chip flex h-30 flex-col justify-between gap-1.5 p-2.5 focus-visible:ring-2 focus-visible:ring-(--app-accent) focus-visible:outline-none sm:p-4 ${
                hasUrl
                    ? "cursor-pointer"
                    : "pointer-events-none cursor-not-allowed opacity-60"
            }`}
        >
            <div>
                <div className="text-sm font-semibold">{project.name}</div>
                <div className="text-xs text-(--app-muted)">
                    {project.description}
                </div>
            </div>

            {project.url && (
                <div className="mt-2">
                    <span className="rounded-none border border-(--app-border) bg-(--app-surface-2) px-2 py-1 text-[11px]">
                        {project.url}
                    </span>
                </div>
            )}
        </a>
    );
}
