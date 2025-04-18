import React, { useState } from 'react';
import { Shield, Loader2 } from "lucide-react";
import { useAuthContext } from '@/lib/context/AuthContext';
import { changePassword } from '@/lib/services/authService';
import { useModal } from "@/lib/store/modal";

const SecurityTab = () => {
  const { user } = useAuthContext();
  const { showModal } = useModal();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      showModal(
        <p>New passwords do not match</p>,
        "error"
      );
      return;
    }

    setIsLoading(true);
    try {
      const response = await changePassword({
        email: user.email,
        oldPassword: currentPassword,
        newPassword: newPassword,
      });

      showModal(
        <p>{response.message || "Password changed successfully!"}</p>,
        "success"
      );

      // Clear form on success
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      showModal(
        <p>{errorMessage}</p>,
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
        <p className="text-gray-600">Manage your password and account security</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="p-5 bg-deepGold/10 rounded-lg border border-deepGold/20">
          <div className="flex items-start">
            <div className="bg-deepGold/20 p-2 rounded-full mr-4 text-deepGold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <button className="ml-auto bg-deepGold text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-deepGold/90 transition">
              Enable
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          <div className="p-5">
            <h3 className="font-medium text-gray-900 mb-3">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepGold focus:border-deepGold transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepGold focus:border-deepGold transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepGold focus:border-deepGold transition"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handlePasswordChange}
                disabled={isLoading}
                className={`px-6 py-2.5 rounded-lg font-medium bg-deepGold text-black hover:bg-deepGold/90 transition flex items-center justify-center gap-2 min-w-[150px] ${
                  isLoading ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Password"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
            <h3 className="font-medium text-gray-900 mb-3">Recent Devices</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-gray-200 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">MacBook Pro</p>
                    <p className="text-sm text-gray-500">Lagos, Nigeria • 15 Jun 2025</p>
                  </div>
                </div>
                <button className="text-deepGold hover:text-deepGold/80 text-sm font-medium transition">
                  Revoke
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-gray-200 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">iPhone 13</p>
                    <p className="text-sm text-gray-500">Lagos, Nigeria • 14 Jun 2025</p>
                  </div>
                </div>
                <button className="text-deepGold hover:text-deepGold/80 text-sm font-medium transition">
                  Revoke
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SecurityTab;