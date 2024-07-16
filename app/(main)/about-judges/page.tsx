// pages/index.js
import JudgesSection from '@/components/UI/About judges/headerjudges';
import JudgesList from '@/components/UI/About judges/index';


export default function Home() {
  return (
    <div>
      <JudgesSection />
      <JudgesList />
    </div>
  );
}
