import type { Express } from "express";

export default function registerRoutes(app: Express) {
	app.get("/", (req, res) => {
		res.send("Server is up");
	});
}
