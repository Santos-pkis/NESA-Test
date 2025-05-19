'use client';

import { Copy, Download } from 'lucide-react';

export default function ReferralPage() {
  const referralCode = '237980hszaya8';

  return (
    <div className="flex min-h-screen bg-white text-white pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-[#151007] p-6 flex flex-col space-y-6">
        <div className="text-white text-xl font-semibold">Menu</div>
        <div className="flex flex-col gap-2">
          <button className="text-left px-4 py-2 border border-white/30 rounded text-sm hover:bg-white/10">
            Profile Settings
          </button>
          <button className="text-left px-4 py-2 border border-white/30 rounded text-sm hover:bg-white/10">
            Wallet
          </button>
          <button className="text-left px-4 py-2 border border-white/30 rounded text-sm flex items-center gap-2 hover:bg-white/10">
            <Copy className="w-4 h-4" /> Referrals
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8 bg-white text-black">
        {[ 
          {
            title: 'Voting/Nomination Referral',
            showWithdraw: false,
          },
          {
            title: 'Merchandise Referral',
            showWithdraw: true,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#151007] text-white rounded-xl p-6 w-full max-w-3xl shadow-md"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </div>

            <div className="flex items-center gap-4 text-yellow-400 text-3xl font-bold mb-2">
              <span className="text-4xl">🪙</span>
              <span>25</span>
            </div>

            <p className="text-sm text-white mb-4">
              Refer to get more earn more coins
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="text"
                value={referralCode}
                readOnly
                className="flex-1 px-4 py-2 rounded text-black font-mono"
              />

              {card.showWithdraw && (
                <button className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded text-sm hover:bg-white/10">
                  Withdraw Reward <Download size={16} />
                </button>
              )}

              <button className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded text-sm hover:bg-yellow-300">
                Copy Referral Link <Copy size={16} />
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
