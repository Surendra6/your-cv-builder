const Education = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Education</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="University"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Degree"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Stream/Specialization"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Country"
          className="border p-2 rounded"
        />
        <input
          type="date"
          placeholder="Start Date"
          className="border p-2 rounded"
        />
        <input
          type="date"
          placeholder="End Date"
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default Education;
