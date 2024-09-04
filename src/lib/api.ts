import axios from "axios";
import { Emotion, Music } from "./types";

const baseApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
});

export async function analyzeEmotion(imageData: string): Promise<Emotion> {
	const response = await baseApi.post("/analyze_emotion", { image: imageData });
	return response.data.emotion;
}

export async function getRecommendation(emotion: Emotion): Promise<Music> {
	const response = await baseApi.get(`/recommend_music?emotion=${emotion}`);
	return response.data;
}
