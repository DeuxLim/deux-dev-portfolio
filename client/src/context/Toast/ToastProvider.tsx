import { useEffect, useState, type ReactNode } from "react";
import ToastContext from "./ToastContext";
import { AnimatePresence, motion } from "motion/react";
import {
    IoIosCheckmarkCircleOutline,
    IoIosCloseCircleOutline,
    IoIosWarning,
    IoIosInformationCircleOutline,
} from "react-icons/io";

type Props = {
    children: ReactNode;
};

type ToastType = "success" | "error" | "warning" | "info";

type ToastState = {
    message: string;
    type: ToastType;
    visible: boolean;
};

type ToastVisuals = {
    icon: ReactNode;
    accentClassName: string;
};

export default function ToastProvider({ children }: Props) {
    const [toast, setToast] = useState<ToastState>({
        message: "",
        type: "success",
        visible: false,
    });

    const show = (message: string, type: ToastType) => {
        setToast({
            message,
            type,
            visible: true,
        });
    };

    const toastSuccess = (msg: string) => show(msg, "success");
    const toastError = (msg: string) => show(msg, "error");
    const toastWarning = (msg: string) => show(msg, "warning");
    const toastInfo = (msg: string) => show(msg, "info");

    useEffect(() => {
        if (!toast.visible) return;

        const timer = setTimeout(() => {
            setToast((prev) => ({ ...prev, visible: false }));
        }, 3000);

        return () => clearTimeout(timer);
    }, [toast.visible]);

    const getVisuals = (): ToastVisuals => {
        switch (toast.type) {
            case "success":
                return {
                    icon: (
                        <IoIosCheckmarkCircleOutline className="text-2xl text-emerald-500 dark:text-emerald-400" />
                    ),
                    accentClassName:
                        "border-l-emerald-500/80 bg-emerald-500/6 dark:border-l-emerald-400/80 dark:bg-emerald-400/8",
                };
            case "error":
                return {
                    icon: (
                        <IoIosCloseCircleOutline className="text-2xl text-rose-500 dark:text-rose-400" />
                    ),
                    accentClassName:
                        "border-l-rose-500/80 bg-rose-500/6 dark:border-l-rose-400/80 dark:bg-rose-400/8",
                };
            case "warning":
                return {
                    icon: (
                        <IoIosWarning className="text-2xl text-amber-500 dark:text-amber-400" />
                    ),
                    accentClassName:
                        "border-l-amber-500/80 bg-amber-500/6 dark:border-l-amber-400/80 dark:bg-amber-400/8",
                };
            case "info":
                return {
                    icon: (
                        <IoIosInformationCircleOutline className="text-2xl text-sky-500 dark:text-sky-400" />
                    ),
                    accentClassName:
                        "border-l-sky-500/80 bg-sky-500/6 dark:border-l-sky-400/80 dark:bg-sky-400/8",
                };
        }
    };

    const visuals = getVisuals();

    return (
        <ToastContext.Provider
            value={{ toastSuccess, toastError, toastWarning, toastInfo }}
        >
            <AnimatePresence>
                {toast.visible && (
                    <motion.div
                        key="toast"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="pointer-events-none fixed top-8 left-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-md -translate-x-1/2 sm:w-auto"
                    >
                        <div
                            role="status"
                            aria-live="polite"
                            className={`pointer-events-auto flex items-center gap-3 border border-l-4 border-(--app-border) bg-(--app-surface) px-4 py-3 text-(--app-text) shadow-[var(--app-shadow)] backdrop-blur-md ${visuals.accentClassName}`}
                        >
                            {visuals.icon}
                            <div className="text-sm font-medium text-(--app-text)">
                                {toast.message}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </ToastContext.Provider>
    );
}
