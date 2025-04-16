// pages/index.js
import JudgesSection from '@/components/UI/About judges/headerjudges';
import JudgesList from '@/components/UI/About judges/index';
import JudgingPanel from '@/components/UI/About judges/howtojudge';
import JudgeBenefitsSection from '@/components/UI/About judges/whyapply';
import JudgeApplication from '@/components/UI/About judges/judgeapplication';

export default function Home() {
  return (
    <div>
      <JudgesSection />
      <JudgingPanel />
      <JudgeBenefitsSection />
      <JudgeApplication />
      <JudgesList />
    </div>
  );
}
