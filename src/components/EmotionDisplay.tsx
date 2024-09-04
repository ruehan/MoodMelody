import React from "react";
import { Emotion } from "@/lib/types";

interface EmotionDisplayProps {
	emotion: string;
}

export function EmotionDisplay({ emotion }: EmotionDisplayProps) {
	return (
		<div className="mt-4 p-4 bg-gray-100 rounded-lg">
			<h3 className="text-lg font-semibold mb-2">Detected Emotion:</h3>
			<p className="text-2xl font-bold text-blue-600">{emotion}</p>
		</div>
	);
}
