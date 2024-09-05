export interface Track {
  name: string;
  artist: string;
  preview_url: string | null;
  external_url: string;
}

export interface AnalysisResult {
  emotion: string;
  confidence: number;
  tracks: Track[];
}
