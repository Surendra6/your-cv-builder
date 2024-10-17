import Button from "../design-system/Button";
import Textfield from "../design-system/Textfield";

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
        <Textfield label={"CV Title"} />
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
            <Textfield
              label={"Job Title"}
              value={job.title}
              onChange={(e) => handleJobChange(index, "title", e.target.value)}
            />
            <Textfield
              label={"Company"}
              value={job.company}
              onChange={(e) =>
                handleJobChange(index, "company", e.target.value)
              }
            />
            <Textfield
              label={"Start Date"}
              value={job.startDate}
              onChange={(e) =>
                handleJobChange(index, "startDate", e.target.value)
              }
            />

            <Textfield
              label={"End Date"}
              value={job.endDate}
              onChange={(e) =>
                handleJobChange(index, "endDate", e.target.value)
              }
            />

            <Textfield
              label={"City"}
              value={job.city}
              onChange={(e) => handleJobChange(index, "city", e.target.value)}
            />

            <Textfield
              label={"Country"}
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

      <Button label="Add Job Section" onClick={addJobSection} />
    </div>
  );
};

export default ProfessionalDetails;
