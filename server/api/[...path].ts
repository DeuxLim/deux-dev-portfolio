import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { corsOptions } from "../config/cors.js";
import registerRoutes from "../routes/routes.js";

const app = express();

app.use(cors(corsOptions));
app.use((req, res, next) => {
	if (req.method === "OPTIONS") {
		return cors(corsOptions)(req, res, next);
	}

	next();
});
app.use(express.json());

registerRoutes(app);

export default serverless(app);
