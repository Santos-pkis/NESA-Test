"use client";

import React, { useState, useEffect } from 'react';
import DashboardCard from '@/components/Layout/Dashboard/DashboardCard';
import WalletSummary from '@/components/Layout/Dashboard/WalletSummary';
import ReferralInfo from '@/components/Layout/Dashboard/ReferralInfo';
import VotingOverviewCard from '@/components/Layout/Dashboard/VotingOverviewCard';
import SkeletonLoader from '@/components/UI/SkeletonLoader'; // Import SkeletonLoader
import { useAuthRedirect } from '@/lib/hooks/useAuthRedirect';
import { useAuthContext } from '@/lib/context/AuthContext';

const recentActivities = [
  {
    type: 'wallet',
    title: 'Wallet Top-up',
    description: 'You funded your wallet with ₦5,000',
    date: 'April 6, 2025 at 3:45 PM',
  },
  {
    type: 'referral',
    title: 'New Referral Bonus',
    description: 'You earned ₦1,000 from John Doe’s signup',
    date: 'April 5, 2025 at 11:20 AM',
  },
  {
    type: 'voting',
    title: 'New Nomination',
    description: 'You nominated Jane Smith for “Community Leader”',
    date: 'April 3, 2025 at 4:05 PM',
  },
  {
    type: 'wallet',
    title: 'Withdrawal Processed',
    description: '₦2,000 was withdrawn to your bank account',
    date: 'April 1, 2025 at 10:00 AM',
  },
];

export default function DashboardPage() {
  useAuthRedirect();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-10">
          {loading ? (
            <>
              <SkeletonLoader className="h-8 w-1/2 mb-2" />
              <SkeletonLoader className="h-4 w-1/3" />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900">Welcome {user?.name || 'User'},</h1>
              <p className="mt-2 text-sm text-gray-600">
                Track your nominations, referrals, and wallet activities
              </p>
            </>
          )}
        </div>

        {/* Voting Overview */}
        <div className="mb-12">
          {loading ? (
            <SkeletonLoader className="h-40 w-full" />
          ) : (
            <VotingOverviewCard />
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {loading ? (
            <>
              <SkeletonLoader className="h-32 w-full" />
              <SkeletonLoader className="h-32 w-full" />
            </>
          ) : (
            <>
              <WalletSummary />
              <ReferralInfo />
            </>
          )}
        </div>

        {/* Recent Activity Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg p-6 divide-y divide-gray-200">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonLoader key={index} className="h-6 w-full mb-4" />
                  ))
              : recentActivities.map((activity, index) => (
                  <div key={index} className="py-4">
                    <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}