import { cvTemplates } from "../utils/config/templates";
import { useNavigate } from "react-router-dom";

const SelectCVTemplate = () => {
  const navigate = useNavigate();

  // Handler to navigate to the CV builder
  const handleCVTemplateSelection = (id) => {
    navigate(`/your-cv-builder/cv-builder/${id}`);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Select a CV Template
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cvTemplates.map((template) => (
          <div
            key={template.id}
            className="flex flex-col items-center bg-white p-5 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleCVTemplateSelection(template.id)}
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

export default SelectCVTemplate;
