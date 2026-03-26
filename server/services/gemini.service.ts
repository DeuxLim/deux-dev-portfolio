import { GoogleGenAI } from "@google/genai";

class GeminiService {
	public client: GoogleGenAI;

	constructor() {
		const apiKey = process.env.GEMINI_API_KEY;

		if (!apiKey) {
			throw new Error("GEMINI_API_KEY is not defined");
		}

		this.client = new GoogleGenAI({
			apiKey,
		});
	}
}

export const geminiService = new GeminiService();
