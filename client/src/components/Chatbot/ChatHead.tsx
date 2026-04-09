import me from "@/assets/me.jpeg";
import { IoCloseSharp } from "react-icons/io5";
import useChat from "@/context/Chat/useChat";
import { motion } from "motion/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { portfolioContent } from "@/data/portfolioContent";

export default function ChatHead() {
    const { setIsChatOpen } = useChat();
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <motion.button
            type="button"
            aria-label="Open chat"
            onClick={() => setIsChatOpen(true)}
            initial={
                prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 14, scale: 0.98 }
            }
            animate={
                prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
                prefersReducedMotion
                    ? undefined
                    : { opacity: 0, y: 10, scale: 0.98 }
            }
            transition={
                prefersReducedMotion
                    ? undefined
                    : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
            }
            className="group fixed right-4 bottom-4 flex cursor-pointer items-center justify-center gap-2 rounded-full shadow-sm transition-[box-shadow,transform] hover:shadow-lg active:scale-[0.98] md:right-8 md:bottom-10"
        >
            <div className="relative size-14 md:size-16">
                {/* Avatar */}
                <div className="size-14 overflow-hidden rounded-full border border-(--app-border) md:size-16">
                    <img src={me} alt="" />
                </div>

                {/* Active Status */}
                <div className="absolute right-0 bottom-0 size-3.5 rounded-full border border-(--app-surface) bg-green-400 md:size-4"></div>

                {/* Close Button */}
                <div className="absolute top-0 right-0 hidden size-5 items-center justify-center rounded-full border border-(--app-border) bg-(--app-surface) text-(--app-text) group-hover:flex">
                    <IoCloseSharp size={14} />
                </div>

                {/* Chat Preview */}
                <div className="absolute -top-3 -left-40 hidden w-36 rounded-none border border-(--app-border) bg-(--app-surface) text-(--app-text) shadow-[0_2px_10px_-2px_rgba(0,0,0,0.18)] group-hover:flex">
                    <div className="flex flex-col items-start p-3 text-sm">
                        <div className="font-semibold">
                            {portfolioContent.chat.botName}
                        </div>
                        <div className="font-light text-(--app-muted)">
                            {portfolioContent.chat.floatingPreview}
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-[60%] left-full">
                        <div
                            className={`h-0 w-0 border-t-6 border-b-6 border-l-10 border-t-transparent border-b-transparent border-l-(--app-surface)`}
                        ></div>
                    </div>
                </div>
            </div>
        </motion.button>
    );
}
