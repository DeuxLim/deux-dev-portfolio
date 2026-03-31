import { useContext } from "react";
import ToastContext from "./ToastContext";

export default function useToast() {
	const toastContext = useContext(ToastContext);

	if (!toastContext) {
		throw new Error("Toast Context must be used within Toast Provider");
	}
	return toastContext;
}
