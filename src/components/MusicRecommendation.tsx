"use client";
import { useState, useEffect } from "react";
import { getRecommendation } from "@/lib/api";
import { MusicPlayer } from "./MusicPlayer";
import { Emotion, Music } from "@/lib/types";

export function MusicRecommendation({ emotion }: { emotion?: Emotion }) {
	const [recommendation, setRecommendation] = useState<Music | null>(null);

	useEffect(() => {
		if (emotion) {
			getRecommendation(emotion).then(setRecommendation);
		}
	}, [emotion]);

	if (!recommendation) return null;

	return (
		<div className="mt-4">
			<h3 className="text-xl font-semibold mb-2">Recommended Music</h3>
			<MusicPlayer music={recommendation} />
		</div>
	);
}
