import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import registerRoutes from "@/routes/routes.js";

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
	}),
);

app.use(express.json());

registerRoutes(app);

export default serverless(app);
