import express from "express";
import "dotenv/config";
import cors from "cors";
import registerRoutes from "@/routes/routes.js";

const app = express();
const port = 3000;

/* Middlewares */
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	}),
);

app.use(express.json());

registerRoutes(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
