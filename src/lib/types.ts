export interface EmotionScores {
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  sad: number;
  surprise: number;
  neutral: number;
}

export interface Track {
  name: string;
  artist: string;
  preview_url: string | null;
  external_url: string;
  popularity: number;
  audio_features: AudioFeatures;
}

export interface AudioFeatures {
  valence: number;
  energy: number;
  danceability: number;
  tempo: number;
}

export interface AnalysisResult {
  dominant_emotion: string;
  emotion_scores: EmotionScores;
  tracks: Track[];
}
