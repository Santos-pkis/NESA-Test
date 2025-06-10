'use client';

import { useState } from 'react';
import Sidebar from '@/components/UI/Admin/Sidebar';
import NominationPanel from '@/components/UI/Admin/NominationPanel';
import JudgesApplications from '@/components/UI/Admin/JudgesApplication';
import JudgeDetail from '@/components/UI/Admin/JudgeDetail';

export default function AdminDashboard() {
  const [selected, setSelected] = useState('Nomination');
  const [applicant, setApplicant] = useState(null);

  // Handle content switching
  const renderContent = () => {
    switch (selected) {
      case 'Nomination':
        return <NominationPanel />;
      case 'Judges/Applications':
        return applicant ? (
          <JudgeDetail applicant={applicant} goBack={() => setApplicant(null)} />
        ) : (
          <JudgesApplications selectApplicant={setApplicant} />
        );
      default:
        return (
          <div className="p-6 pt-20 text-xl font-medium">
            {selected} content coming soon...
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







