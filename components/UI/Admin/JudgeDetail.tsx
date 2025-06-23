import { useEffect, useState } from "react";
import { getJudgeDetail } from "@/lib/services/getJudgeDetail";

const JudgeDetail = ({ applicant: id, goBack }: { applicant: string; goBack: () => void }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    const fetchJudge = async () => {
            try {
       const data = await getJudgeDetail(id)
      setData(data)
      setLoading(false);
      console.log(data);
   } catch (err) {
        alert("Failed to fetch Judge details")
        setError("Failed to fetch Judge details")
        setLoading(false);
      }
    }
    fetchJudge();
  }, []);

  if (loading) return <div>Loading...

      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
``
  </div>;
  if (error) return <div>{error}

      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
  
  </div>;
  if (!data) return <div>No data found. 
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
  </div>;

  return (
    <div className="p-6 pt-20 mt-4 space-y-4">
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
      <h2 className="text-2xl font-semibold">Judge Details / {data.fullName || data.name}</h2>
      <div className="flex justify-end space-x-2">
        <button className="bg-gray-200 px-4 py-2 rounded">Decline Application</button>
        <button className="bg-yellow-500 px-4 py-2 text-white rounded">Approve Application</button>
      </div>
      <div className="bg-white p-4  rounded shadow">
        <p><strong>Full Name:</strong> {data.fullName || data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phoneNumber || "-"}</p>
        <p><strong>Region:</strong> {data.region || "-"}</p>
        <p><strong>Status:</strong> {data.status || "-"}</p>
      </div>
    </div>
  );
};

export default JudgeDetail;