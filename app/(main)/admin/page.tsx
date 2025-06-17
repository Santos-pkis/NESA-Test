'use client';

import { useState } from 'react';
import Sidebar from '@/components/UI/Admin/Sidebar';
import NominationPanel from '@/components/UI/Admin/NominationPanel';
import VotingPanel from '@/components/UI/Admin/VotingPanel';
import JudgesApplications from '@/components/UI/Admin/JudgesApplication';
import JudgeDetail from '@/components/UI/Admin/JudgeDetail';
import ApprovedJudges from '@/components/UI/Admin/ApprovedJudges';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const [selected, setSelected] = useState(() => {
  return localStorage.getItem('admin_selected_panel') || 'nominationpanel';
});
  const [applicant, setApplicant] = useState(null);
    useEffect(() => {
      const saved = localStorage.getItem('admin_selected_panel');
      if (saved) setSelected(saved);
    }, []);
    // Persist selected panel in localStorage
    useEffect(() => {
      localStorage.setItem('admin_selected_panel', selected);
    }, [selected]);
  // Handle content switching
  const renderContent = () => {
    switch (selected) {
      case 'Nomination':
        return <NominationPanel />;
      case 'Judges/Judges':
        return <ApprovedJudges selectApplicant={setApplicant} />;                 
      case 'Judges/Applications':
        return applicant ? (
          <JudgeDetail applicant={applicant} goBack={() => setApplicant(null)} />
        ) : (
          <JudgesApplications selectApplicant={setApplicant} />
        );
      case 'Voting':
        return <VotingPanel />;

      default:
        return (
          <div className="p-6 pt-20 text-xl font-medium">
            {selected} content coming soon, hold...
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar selected={selected} setSelected={setSelected} />
      <main className="flex-1 overflow-y-auto bg-gray-50">{renderContent()}</main>
    </div>
  );
}







