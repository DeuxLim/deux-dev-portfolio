import { createContext } from "react";

type ToastContextType = {
    toastSuccess: (msg: string) => void;
    toastError: (msg: string) => void;
    toastWarning: (msg: string) => void;
    toastInfo: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export default ToastContext;
