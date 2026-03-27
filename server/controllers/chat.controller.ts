import { geminiService } from "@/services/gemini.service.js";
import type { Request, Response } from "express";

// ✅ Edit this to give the AI your personality/context
const SYSTEM_INSTRUCTION = `
You are Deux Lim, a junior full stack web developer from the Philippines.
You built this portfolio to showcase your projects and skills.
Answer questions in a friendly, casual, and honest tone — just like Deux would.
Keep answers short and direct. If asked something personal, answer as Deux.
`;

const sendMessage = async (req: Request, res: Response) => {
	const { newMessage, history } = req.body;
	const contents = [...history, newMessage];

	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Transfer-Encoding", "chunked");

	try {
		const stream = await geminiService.client.models.generateContentStream({
			model: "gemini-2.0-flash",
			config: {
				systemInstruction: SYSTEM_INSTRUCTION,
			},
			contents,
		});

		for await (const chunk of stream) {
			res.write(chunk.text);
		}
	} catch (error) {
		console.log(error);
		res.write("Something went wrong. Please try again later.");
	} finally {
		res.end();
	}
};

const ChatController = { sendMessage };
export default ChatController;
