import { useState, useRef, useEffect } from "react";

export function useWebcam() {
	const [stream, setStream] = useState<MediaStream | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		async function setupWebcam() {
			try {
				const userMedia = await navigator.mediaDevices.getUserMedia({ video: true });
				setStream(userMedia);
				if (videoRef.current) {
					videoRef.current.srcObject = userMedia;
				}
			} catch (err) {
				console.error("Error accessing webcam:", err);
			}
		}

		setupWebcam();

		return () => {
			stream?.getTracks().forEach((track) => track.stop());
		};
	}, []);

	const captureImage = () => {
		if (videoRef.current) {
			const canvas = document.createElement("canvas");
			canvas.width = videoRef.current.videoWidth;
			canvas.height = videoRef.current.videoHeight;
			canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0);
			return canvas.toDataURL("image/jpeg");
		}
		return null;
	};

	return { videoRef, captureImage };
}
