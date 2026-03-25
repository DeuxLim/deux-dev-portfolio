import ChatBox from "@/components/Chatbot/ChatBox";
import ChatHead from "@/components/Chatbot/ChatHead";
import useChat from "@/context/Chat/useChat";

export default function FloatingChat() {
	const { isChatOpen } = useChat();
	return <>{isChatOpen ? <ChatBox /> : <ChatHead />}</>;
}
