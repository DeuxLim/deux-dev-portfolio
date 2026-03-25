import type { Request, Response } from "express";

const sendMessage = (req: Request, res: Response) => {
	console.log(req.body);
	res.status(200).json({
		test: "test",
	});
};

const ChatController = { sendMessage };
export default ChatController;
