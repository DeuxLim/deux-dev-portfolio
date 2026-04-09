import me from "@/assets/me.jpeg";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { motion } from "motion/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import {
    IoBriefcase,
    IoCall,
    IoLocationOutline,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail,
} from "react-icons/io5";
import cover from "@/assets/coverphoto.jpg";
import useToast from "@/context/Toast/useToast";
import { FaDownload } from "react-icons/fa6";
import { portfolioContent } from "@/data/portfolioContent";

export default function Header() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const { toastSuccess, toastError } = useToast();
    const headerContent = portfolioContent.header;

    const handleActionButton = async (
        text: string,
        {
            withAction,
            actionHandler,
            toastMessage,
        }: {
            withAction?: boolean;
            actionHandler?: () => void;
            toastMessage?: string;
        } = {},
    ) => {
        try {
            await navigator.clipboard.writeText(text);

            if (toastMessage) {
                toastSuccess(toastMessage || "Copied to clipboard");
            }

            if (withAction) {
                if (actionHandler) {
                    actionHandler();
                }
            }
        } catch (error) {
            toastError("Something went wrong...");
            console.error("failed to copy : ", error);
        }
    };

    return (
        <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -24 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
                prefersReducedMotion
                    ? undefined
                    : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
            }
            className="app-card p-2.5 sm:p-4"
        >
            {/* Mobile Profile And Cover */}
            <div
                className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-none border border-(--app-border) bg-cover bg-center sm:h-48 md:hidden"
                style={{ backgroundImage: `url(${cover})` }}
            >
                <div className="absolute inset-0 bg-(--app-cover-overlay)" />
                <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-(--app-border) shadow-sm sm:size-28 md:hidden">
                    <img
                        src={me}
                        alt=""
                        className="h-full w-full object-cover object-top"
                    />
                </div>
            </div>

            {/* Header */}
            <section className="flex gap-3 pt-3 sm:pt-4 md:h-40 md:gap-4 md:pt-0">
                {/* Profile picture */}
                <div className="hidden h-full items-center justify-center md:flex">
                    <div className="overflow-hidden rounded-none border border-(--app-border) md:flex md:h-40 md:w-40">
                        <img
                            src={me}
                            alt=""
                            className="h-full w-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* Basic Info */}
                <div className="flex w-full flex-col justify-center gap-3 p-1 sm:gap-4">
                    {/* Top */}
                    <div className="flex h-full flex-col gap-2">
                        <div className="flex min-w-0 flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <div className="text-xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                                    {headerContent.fullName}
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        className="inline-flex h-8 items-center justify-center gap-2 rounded-none px-2 transition-colors focus-visible:ring-2 focus-visible:ring-(--app-accent) focus-visible:outline-none active:scale-[0.98] sm:h-9 sm:w-24"
                                        href={headerContent.resumePath}
                                        download
                                    >
                                        <FaDownload className="text-sm text-(--app-accent) sm:text-base" />
                                        <div className="text-xs">Resume</div>
                                    </a>
                                </div>
                            </div>
                            <div className="text-xs text-(--app-muted) md:text-sm">
                                {headerContent.role}
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1 text-xs text-(--app-muted)">
                            <IoLocationOutline />
                            {headerContent.location}
                        </div>
                        <div className="flex items-center justify-start gap-1 text-xs text-(--app-muted)">
                            <IoBriefcase />
                            {headerContent.workSummary}
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="flex justify-between">
                        <div className="flex flex-wrap gap-1.5">
                            <a
                                type="button"
                                title="GitHub"
                                aria-label="GitHub"
                                className="app-chip flex cursor-pointer items-center justify-center gap-1 px-2.5 py-1.5 focus-visible:ring-2 focus-visible:ring-(--app-accent) focus-visible:outline-none"
                                href={import.meta.env.VITE_PERSONAL_GITHUB_URL}
                                target="_blank"
                            >
                                <IoLogoGithub className="text-lg md:text-xl" />
                                <div className="hidden font-light md:block md:text-xs">
                                    Github
                                </div>
                            </a>
                            <a
                                type="button"
                                title="LinkedIn"
                                aria-label="LinkedIn"
                                className="app-chip flex cursor-pointer items-center justify-center gap-1 px-2.5 py-1.5 focus-visible:ring-2 focus-visible:ring-(--app-accent) focus-visible:outline-none"
                                href={
                                    import.meta.env.VITE_PERSONAL_LINKEDIN_URL
                                }
                                target="_blank"
                            >
                                <IoLogoLinkedin className="text-lg md:text-xl" />
                                <div className="hidden font-light md:block md:text-xs">
                                    LinkedIn
                                </div>
                            </a>
                            <button
                                type="button"
                                title="Phone"
                                aria-label="Phone"
                                className="app-chip flex cursor-pointer items-center justify-center gap-1 px-2.5 py-1.5 focus-visible:ring-2 focus-visible:ring-(--app-accent) focus-visible:outline-none"
                                onClick={() =>
                                    handleActionButton(headerContent.phone, {
                                        withAction: true,
                                        actionHandler: () =>
                                            (window.location.href =
                                                `tel:${headerContent.phone}`),
                                        toastMessage: "Phone number copied",
                                    })
                                }
                            >
                                <IoCall className="text-lg md:text-xl" />
                                <div className="hidden font-light text-nowrap md:block md:text-xs">
                                    {headerContent.phone}
                                </div>
                            </button>
                            <button
                                type="button"
                                title="Email"
                                aria-label="Email"
                                className="app-chip flex cursor-pointer items-center justify-center gap-1 px-2.5 py-1.5 focus-visible:ring-2 focus-visible:ring-(--app-accent) focus-visible:outline-none"
                                onClick={() =>
                                    handleActionButton(headerContent.email, {
                                        withAction: true,
                                        actionHandler: () =>
                                            (window.location.href =
                                                `mailto:${headerContent.email}`),
                                        toastMessage: "Email copied",
                                    })
                                }
                            >
                                <IoMail className="text-lg md:text-xl" />
                                <div className="hidden font-light md:block md:text-xs">
                                    {headerContent.email}
                                </div>
                            </button>
                        </div>
                        <ThemeToggleButton />
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
