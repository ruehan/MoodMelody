import React from 'react';

interface EmotionDisplayProps {
  emotion: string;
  confidence: number;
}

export default function EmotionDisplay({
  emotion,
  confidence,
}: EmotionDisplayProps) {
  return (
    <div className="mt-4">
      <p className="font-semibold">Detected Emotion: {emotion}</p>
      <p>Confidence: {(confidence * 100).toFixed(2)}%</p>
    </div>
  );
}
