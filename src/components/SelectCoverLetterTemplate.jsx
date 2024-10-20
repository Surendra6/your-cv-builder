import { coverLetterTemplates } from "../utils/config/templates";
import { useNavigate } from "react-router-dom";

const SelectCoverLetterTemplate = () => {
  const navigate = useNavigate();

  // Handler to navigate to the Cover Letter builder
  const handleCoverLetterTemplateSelection = (id) => {
    navigate(`/your-cv-builder/cover-letter/${id}`);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Select a Cover Letter Template
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coverLetterTemplates.map((template) => (
          <div
            key={template.id}
            className="max-w-md flex flex-col items-center bg-white p-5 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleCoverLetterTemplateSelection(template.id)}
          >
            <img src={template.image} alt={template.name} className="h-56" />
            <div className="mt-5 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                {template.name}
              </h3>
              <p className="text-gray-600 mt-2">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectCoverLetterTemplate;
