import { geminiService } from "@/services/gemini.service.js";
import type { Request, Response } from "express";

const sendMessage = async (req: Request, res: Response) => {
	try {
		const { newMessage, history } = req.body;

		const contents = [...history, newMessage];

		const response = await geminiService.client.models.generateContent({
			model: "gemini-3-flash-preview",
			contents,
		});

		res.status(200).json({
			response: response.text,
		});
	} catch (error) {
		console.log(error);
	}
};

const ChatController = { sendMessage };
export default ChatController;
