'use client';

import React, { useState, useEffect } from 'react';
import WebcamCapture from './WebcamCapture';
import EmotionDisplay from './EmotionDisplay';
import MusicRecommendation from './MusicRecommendation';
import { analyzeEmotion } from '@/lib/api';
import { AnalysisResult } from '@/lib/types';

export default function EmotionAnalysis() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCapture = async (imageBlob: Blob) => {
    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzeEmotion(imageBlob);
      setResult(analysisResult);
    } catch (error) {
      console.error('Error analyzing emotion:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!isClient) {
    return null; // 또는 로딩 상태를 표시
  }

  return (
    <div className="space-y-6">
      <WebcamCapture onCapture={handleCapture} isAnalyzing={isAnalyzing} />
      {result && (
        <>
          <EmotionDisplay
            dominantEmotion={result.dominant_emotion}
            emotionScores={result.emotion_scores}
          />
          <MusicRecommendation tracks={result.tracks} />
        </>
      )}
    </div>
  );
}
