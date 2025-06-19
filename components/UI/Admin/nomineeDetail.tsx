import { useEffect, useState } from "react";
import { getNomineeDetail } from "@/lib/services/getNomineeDetail";

const NomineeDetail = ({ applicant: id, goBack }: { applicant: string; goBack: () => void }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    const fetchNominee = async () => {
      try {
    const data = await getNomineeDetail(id)
      setData(data);
      setLoading(false);
      console.log(data)
   } catch (err) {
        alert("Failed to fetch nominee details")
        setError("Failed to fetch nominee details")
        setLoading(false);
      }
    }
    fetchNominee();
  }, []);

  if (loading) return <div className="p-6 pt-20">Loading...</div>;
  if (error) return <div className="p-6 pt-20 text-red-500">{error}</div>;
  if (!data) return <div className="p-6 pt-20">No data found.</div>;

  return (
    <div className="p-6 pt-20 mt-4 space-y-4">
      <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
      <h2 className="text-2xl font-semibold">Nomination Details / {data.fullName || data.name}</h2>

      <div className="bg-white p-4  rounded shadow">
        <p><strong>Full Name:</strong> {data.name }</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>category:</strong> {data.category || "-"}</p>
        <p><strong>subCategory:</strong> {data.subCategory || "-"}</p>
        <p><strong>achievements:</strong> {data.achievements || "-"}</p>
        <p><strong>document:</strong> {data.document || "null"}</p>
        <p><strong>status:</strong> {data.status || "-"}</p>

      </div>
    </div>
  );
};

export default NomineeDetail;