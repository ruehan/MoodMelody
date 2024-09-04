import { Card } from '@/components/Card';
import { EmotionAnalysisForm } from '@/components/EmotionAnalysisForm';
import { MusicRecommendation } from '@/components/MusicRecommendation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">MoodMelody</h1>
        <EmotionAnalysisForm />
        <MusicRecommendation />
      </Card>
    </main>
  );
}
