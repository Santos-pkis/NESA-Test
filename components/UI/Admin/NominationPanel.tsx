const NominationPanel = () => (
  <div className="p-20">
    <h2 className="text-2xl font-semibold mb-4">Nominations Overview</h2>
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 shadow rounded">Total Nominations: 1456</div>
      <div className="bg-white p-4 shadow rounded">Accepted Nominations: 986</div>
      <div className="bg-white p-4 shadow rounded">Pending Nominations: 470</div>
    </div>
    <table className="w-full text-left bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3">S/N</th>
          <th>Name</th>
          <th>Sub-Category</th>
          <th>No of Nominations</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {['Oluwole Bankole Adams', 'MTN Nigeria', 'Greener Africa Initiative'].map((name, idx) => (
          <tr key={idx} className="border-t">
            <td className="p-3">{idx + 1}</td>
            <td>{name}</td>
            <td>Olivia Rhye</td>
            <td>{idx * 20 + 1}</td>
            <td>{idx % 2 === 0 ? <span className="text-green-600">Accepted</span> : <span className="text-yellow-600">Pending</span>}</td>
            <td>23/04/2024</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default NominationPanel;
