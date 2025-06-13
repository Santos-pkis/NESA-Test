import { cn } from "@/lib/utils/util";
import {getNominations} from "@/lib/services/getNominations";
import { useEffect, useState } from "react";
import { getjudges } from "@/lib/services/getjugdes";

 type Nomination = {
    fullName: string;
    email: string;
    subCategory: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
    nominationCount: string;
    latestCreatedAt: string;
};

type NominationsResponse = {
    totalNominations: number;
    totalAccepted: number;
    totalPending: number;
    nominations: Nomination[];
};
const NominationPanel = () => {
  const [nominees, setNominees] = useState<NominationsResponse | null>(null);
  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const data = await getNominations();
        setNominees(data);
        console.log(data)
      } catch (err) {
        console.error("Failed to fetch nominations:", err);
      }
    };

    fetchNominees();
  }, []);
return (
<div className="p-6 w-full pt-28">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
            <StatCard
              title="Total Nominations"
              count={nominees ? nominees.totalNominations : 0}
              change="4.8%"
            />
            <StatCard
              title="Accepted Nominations"
              count={nominees ? nominees.totalAccepted : 0}
              change="4.8%"
            />
            <StatCard
              title="Pending Nominations"
              count={nominees ? nominees.totalPending : 0}
              change="4.8%"
            />
            </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">List of Nominations</h3>
              <div className="flex gap-2">
                <button className="border px-2 py-1 rounded text-sm">Filters</button>
                <button className="border px-2 py-1 rounded text-sm">Sort By</button>
                <button className="bg-black text-white px-3 py-1 rounded text-sm">Export</button>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">S/N</th>
                  <th>Name</th>
                  <th>Sub-Category</th>
                  <th>No of Nominations</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Example static data mapping, remove or update as needed
                {nominations.map((n, i) => (
                  <tr key={i} className="border-b text-sm">
                    <td className="py-2">{i + 1}</td>
                    <td>{n.name}</td>
                    <td>{n.subCategory}</td>
                    <td>{n.count}</td>
                    <td>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          n.status === "Accepted"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        )}
                      >
                        {n.status}
                      </span>
                    </td>
                    <td>{n.date}</td>
                  </tr>
                ))}
                */}

                {nominees && Array.isArray(nominees.nominations) && nominees.nominations.length > 0 ? (
                  nominees.nominations.map((n, i) => (
                    <tr key={i} className="border-b text-sm">
                      <td className="py-2">{i + 1}</td>
                      <td>{n.fullName}</td>
                      <td>{n.subCategory || "-"}</td>
                      <td>{n.nominationCount}</td>
                      <td>
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            n.status === "Accepted"
                              ? "bg-green-100 text-green-600"
                              : "bg-yellow-100 text-yellow-600"
                          )}
                        >
                          {n.status}
                        </span>
                      </td>
                      <td>{n.latestCreatedAt ? new Date(n.latestCreatedAt).toLocaleDateString() : "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      No nominations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>)
}
type StatCardProps = {
  title: string;
  count: string | number;
  change: string;
};

function StatCard({ title, count, change }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-green-500 text-sm">▲ {change}</div>
    </div>
  );
}
const nominations = [
  { name: "Oluwole Bankole Adams", subCategory: "Olivia Rhye", count: 1, status: "Pending", date: "23/04/2024" },
  { name: "MTN Nigeria", subCategory: "Olivia Rhye", count: 23, status: "Accepted", date: "07/05/2016" },
  { name: "Greener Africa Initiative", subCategory: "Olivia Rhye", count: 15, status: "Pending", date: "18/09/2016" },
  { name: "Greener Africa Initiative", subCategory: "Olivia Rhye", count: 89, status: "Accepted", date: "12/06/2020" },
  { name: "Greener Africa Initiative", subCategory: "Olivia Rhye", count: 90, status: "Pending", date: "15/08/2017" },
  { name: "Greener Africa Initiative", subCategory: "Olivia Rhye", count: 123, status: "Pending", date: "16/08/2013" },
  { name: "Greener Africa Initiative", subCategory: "Olivia Rhye", count: 30, status: "Pending", date: "28/10/2012" },
];
export default NominationPanel;
