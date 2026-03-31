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

    const getIcon = () => {
        switch (toast.type) {
            case "success":
                return (
                    <IoIosCheckmarkCircleOutline className="text-2xl text-green-500" />
                );
            case "error":
                return (
                    <IoIosCloseCircleOutline className="text-2xl text-red-500" />
                );
            case "warning":
                return <IoIosWarning className="text-2xl text-yellow-500" />;
            case "info":
                return (
                    <IoIosInformationCircleOutline className="text-2xl text-blue-500" />
                );
        }
    };

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
                        className="pointer-events-none fixed top-8 left-1/2 z-50 -translate-x-1/2"
                    >
                        <div className="pointer-events-auto flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 shadow-xl">
                            {getIcon()}
                            <div className="text-sm">{toast.message}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </ToastContext.Provider>
    );
}
