const ProfessionalDetails = ({ jobs, setJobs }) => {
  const addJobSection = () => {
    setJobs([
      ...jobs,
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        responsibilities: "",
      },
    ]);
  };

  const handleJobChange = (index, field, value) => {
    const newJobs = [...jobs];
    newJobs[index][field] = value;
    setJobs(newJobs);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Professional Details</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="CV Title"
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Profile Summary"
          maxLength={1500}
          className="border p-2 w-full rounded"
          rows="4"
        />
      </div>

      {jobs.map((job, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <div className="grid grid-cols-2 gap-4 mb-2">
            <input
              type="text"
              placeholder="Job Title"
              className="border p-2 rounded"
              value={job.title}
              onChange={(e) => handleJobChange(index, "title", e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              className="border p-2 rounded"
              value={job.company}
              onChange={(e) =>
                handleJobChange(index, "company", e.target.value)
              }
            />
            <input
              type="date"
              placeholder="Start Date"
              className="border p-2 rounded"
              value={job.startDate}
              onChange={(e) =>
                handleJobChange(index, "startDate", e.target.value)
              }
            />
            <input
              type="date"
              placeholder="End Date"
              className="border p-2 rounded"
              value={job.endDate}
              onChange={(e) =>
                handleJobChange(index, "endDate", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded"
              value={job.city}
              onChange={(e) => handleJobChange(index, "city", e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              className="border p-2 rounded"
              value={job.country}
              onChange={(e) =>
                handleJobChange(index, "country", e.target.value)
              }
            />
          </div>
          <textarea
            placeholder="Roles and Responsibilities"
            maxLength={500}
            className="border p-2 w-full rounded"
            rows="3"
            value={job.responsibilities}
            onChange={(e) =>
              handleJobChange(index, "responsibilities", e.target.value)
            }
          />
        </div>
      ))}

      <button
        onClick={addJobSection}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-4"
      >
        Add Job Section
      </button>
    </div>
  );
};

export default ProfessionalDetails;
