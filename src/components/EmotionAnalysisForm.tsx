"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { EmotionDisplay } from "./EmotionDisplay";
import { useWebcam } from "@/lib/hooks/useWebcam";
import { Emotion } from "@/lib/types";

export function EmotionAnalysisForm() {
	const [emotion, setEmotion] = useState<string>();
	const [isClient, setIsClient] = useState(false);
	const { videoRef, captureImage } = useWebcam();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleAnalyze = async () => {
		const image = captureImage();
		if (image) {
			try {
				const response = await fetch(image);
				const blob = await response.blob();
				const formData = new FormData();
				formData.append("file", blob, "image.jpg");

				const apiResponse = await fetch("http://localhost:8000/analyze_emotion", {
					method: "POST",
					body: formData,
				});

				if (!apiResponse.ok) {
					throw new Error(`HTTP error! status: ${apiResponse.status}`);
				}

				const result = await apiResponse.json();
				if (result.emotion === "No face detected") {
					setEmotion("No face detected");
				} else {
					setEmotion(`${result.emotion} (Confidence: ${(result.confidence * 100).toFixed(2)}%)`);
				}
			} catch (error) {
				console.error("Error analyzing emotion:", error);
				setEmotion("Error occurred during analysis");
			}
		}
	};

	if (!isClient) {
		return null;
	}

	return (
		<div className="space-y-4">
			<video ref={videoRef} autoPlay muted className="w-full h-auto" />
			<Button onClick={handleAnalyze}>Analyze Emotion</Button>
			{emotion && <EmotionDisplay emotion={emotion} />}
		</div>
	);
}
