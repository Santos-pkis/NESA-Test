import { useEffect, useState } from "react";
import { getJudgeDetail } from "@/lib/services/getJudgeDetail";
import { approveJudge } from "@/lib/services/approveJudge";
import { declineJudge } from "@/lib/services/declineJudge";

const JudgeDetail = ({ applicant: id, goBack }: { applicant: string; goBack: () => void }) => {
  const [judge, setJudge] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    const fetchJudge = async () => {
      try {
        const data = await getJudgeDetail(id)
        setJudge(data)
        setLoading(false);
        console.log(data);
      } catch (err) {
        alert("Failed to fetch Judge details")
        setError("Failed to fetch Judge details")
        setLoading(false);
      }
    }
    fetchJudge();
  }, [id]);

  const handleApprove = async () => {
    if (!judge?.id) return;
    setActionLoading(true);
    setActionMessage(null);
    try {
      const res = await approveJudge(judge.id);
      setActionMessage(res.message || "Judge approved successfully.");
    } catch (err) {
      setActionMessage("Failed to approve judge.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDecline = async () => {
    if (!judge?.id) return;
    setActionLoading(true);
    setActionMessage(null);
    try {
      const res = await declineJudge(judge.id);
      setActionMessage(res.message || "Judge declined successfully.");
    } catch (err) {
      setActionMessage("Failed to decline judge.");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) return <div>Loading...
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
  </div>;
  if (error) return <div>{error}
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
  </div>;
  if (!judge) return <div>No data found. 
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
  </div>;

  return (
    <div className="p-6 pt-20 mt-4 space-y-4">
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
      <h2 className="text-2xl font-semibold">Judge Details / {judge.fullName || judge.name}</h2>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={handleDecline}
          disabled={actionLoading}
        >
          {actionLoading ? "Processing..." : "Decline Application"}
        </button>
        <button
          className="bg-yellow-500 px-4 py-2 text-white rounded"
          onClick={handleApprove}
          disabled={actionLoading}
        >
          {actionLoading ? "Processing..." : "Approve Application"}
        </button>
      </div>
      {actionMessage && <div className="text-center text-sm mt-2 text-blue-700">{actionMessage}</div>}
      <div className="bg-white p-4  rounded shadow">
        <p><strong>Full Name:</strong> {judge.fullName || judge.name}</p>
        <p><strong>Email:</strong> {judge.email}</p>
        <p><strong>Phone:</strong> {judge.phoneNumber || "-"}</p>
        <p><strong>Region:</strong> {judge.region || "-"}</p>
        <p><strong>Status:</strong> {judge.status || "-"}</p>
      </div>
    </div>
  );
};

export default JudgeDetail;