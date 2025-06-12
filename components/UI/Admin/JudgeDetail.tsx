const JudgeDetail = ({ applicant, goBack }: any) => (
  <div className="p-6 pt-20 mt-4 space-y-4">
    <div className="text-sm text-gray-600 cursor-pointer" onClick={goBack}>&larr; Back</div>
    <h2 className="text-2xl font-semibold">Nomination Details / {applicant.name}</h2>
    <div className="flex justify-end space-x-2">
      <button className="bg-gray-200 px-4 py-2 rounded">Decline Application</button>
      <button className="bg-yellow-500 px-4 py-2 text-white rounded">Approve Application</button>
    </div>
    <div className="bg-white p-4  rounded shadow">
      <p><strong>Full Name:</strong> {applicant.name}</p>
      <p><strong>Email:</strong> example@gmail.com</p>
      <p><strong>Phone:</strong> +2348012345678</p>
      <p><strong>LinkedIn:</strong> Kwara State</p>
      <p><strong>Reason:</strong> A visionary leader and advocate...</p>
    </div>
  </div>
);

export default JudgeDetail;