"use client";
import { useState, useRef } from "react";
import { Music } from "@/lib/types";

export function MusicPlayer({ music }: { music: Music }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="bg-gray-100 p-4 rounded-lg">
			<h4 className="text-lg font-semibold">{music.title}</h4>
			<p className="text-gray-600">{music.artist}</p>
			<audio ref={audioRef} src={music.url} />
			<button onClick={togglePlay} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
				{isPlaying ? "Pause" : "Play"}
			</button>
		</div>
	);
}
