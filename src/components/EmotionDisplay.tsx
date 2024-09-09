import React from 'react';
import { EmotionScores } from '@/lib/types';

interface EmotionDisplayProps {
  dominantEmotion: string;
  emotionScores: EmotionScores;
}

export default function EmotionDisplay({
  dominantEmotion,
  emotionScores,
}: EmotionDisplayProps) {
  return (
    <div className="mt-4">
      <p className="font-semibold text-lg">
        Detected Emotion: {dominantEmotion}
      </p>
      <div className="mt-2">
        <p className="font-medium">Emotion Scores:</p>
        <ul className="list-disc list-inside">
          {Object.entries(emotionScores).map(([emotion, score]) => (
            <li key={emotion}>
              {emotion}: {score.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
