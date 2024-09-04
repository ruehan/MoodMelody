import { EmotionAnalysisForm } from '@/components/EmotionAnalysisForm';

export default function MoodAnalysisPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Mood Analysis</h1>
      <EmotionAnalysisForm />
    </div>
  );
}
