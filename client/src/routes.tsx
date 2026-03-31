import { createBrowserRouter } from "react-router";
import PortfolioLayout from "./layouts/PortfolioLayout";
import Home from "@/pages/Home";
import ChatProvider from "./context/Chat/ChatProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToastProvider from "./context/Toast/ToastProvider";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <QueryClientProvider client={queryClient}>
                <ToastProvider>
                    <ChatProvider>
                        <PortfolioLayout />
                    </ChatProvider>
                </ToastProvider>
            </QueryClientProvider>
        ),
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]);

export default routes;
