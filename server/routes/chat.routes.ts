import ChatController from "@/controllers/chat.controller.js";
import { Router } from "express";

const ChatRouter = Router();
ChatRouter.post("/send-message", ChatController.sendMessage);

export default ChatRouter;
