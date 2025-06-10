// File: components/JudgesApplications.tsx
const JudgesApplications = ({ selectApplicant }: any) => {
  const applicants = [
    { name: 'Savannah Nguyen', status: 'Accepted', date: '28/10/2012' },
    { name: 'Jacob Jones', status: 'Pending', date: '18/09/2016' },
    { name: 'Albert Flores', status: 'Denied', date: '18/09/2016' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Judges Applications</h2>
      <table className="w-full text-left bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">S/N</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((a, i) => (
            <tr key={i} className="border-t cursor-pointer hover:bg-gray-50" onClick={() => selectApplicant(a)}>
              <td className="p-3">{i + 1}</td>
              <td>{a.name}</td>
              <td>{a.status}</td>
              <td>{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JudgesApplications;