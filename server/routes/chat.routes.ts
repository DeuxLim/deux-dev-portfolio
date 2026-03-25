import ChatController from "@/controllers/chat.controller.js";
import { Router } from "express";

const ChatRouter = Router();
ChatRouter.post("/sendMessage", ChatController.sendMessage);

export default ChatRouter;
