import axios from 'axios';
import { AnalysisResult } from './types';

const API_URL = 'http://localhost:8000';

export async function analyzeEmotion(imageBlob: Blob): Promise<AnalysisResult> {
  const formData = new FormData();
  formData.append('file', imageBlob, 'image.jpg');

  const { data } = await axios.post<AnalysisResult>(
    `${API_URL}/analyze_emotion`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );

  return data;
}
