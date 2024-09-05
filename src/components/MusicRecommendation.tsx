import React from 'react';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import { Track } from '@/lib/types';

interface MusicRecommendationProps {
  tracks: Track[];
}

export default function MusicRecommendation({
  tracks,
}: MusicRecommendationProps) {
  if (tracks.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        <MusicalNoteIcon className="w-5 h-5 mr-2" />
        Recommended Tracks
      </h2>
      <ul className="space-y-2">
        {tracks.map((track, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded">
            <p className="font-semibold">
              {track.name} - {track.artist}
            </p>
            {track.preview_url && (
              <audio controls className="mt-2 w-full">
                <source src={track.preview_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            <a
              href={track.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block mt-1"
            >
              Open in Spotify
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
