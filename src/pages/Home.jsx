import { useEffect, useState } from "react";
import loading from "../assets/loading-snail.gif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CVTemplate1 from "../assets/cv-template-1.png";
import CVTemplate2 from "../assets/cv-template-2.png";
import CVTemplate3 from "../assets/cv-template-3.png";

const Home = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const navigate = useNavigate();

  const cvTemplates = [
    {
      id: "classic-cv",
      name: "Classic CV",
      description: "A traditional and timeless CV design.",
      image: CVTemplate1,
    },
    {
      id: "modern-cv",
      name: "Modern CV",
      description: "A sleek and contemporary design for professionals.",
      image: CVTemplate2,
    },
    {
      id: "creative-cv",
      name: "Creative CV",
      description: "A unique and artistic template for creative roles.",
      image: CVTemplate3,
    },
  ];

  const coverLetterTemplates = [
    {
      id: "classic-letter",
      name: "Formal Cover Letter",
      description: "A professional and structured format.",
      image: CVTemplate1,
    },
    {
      id: "modern-letter",
      name: "Elegant Cover Letter",
      description: "A clean and sophisticated design.",
      image: CVTemplate2,
    },
    {
      id: "creative-letter",
      name: "Creative Cover Letter",
      description: "An artistic design for creative industries.",
      image: CVTemplate3,
    },
  ];

  // Handler to navigate to the CV builder
  const handleCVTemplateSelection = (id) => {
    navigate(`/your-cv-builder/cv-builder/${id}`);
  };

  // Handler to navigate to the Cover Letter builder
  const handleCoverLetterTemplateSelection = (id) => {
    navigate(`/your-cv-builder/cover-letter/${id}`);
  };

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplashScreen(false); // Hide the splash screen after 3000ms
    }, 2000);
    return () => clearTimeout(splashTimeout);
  }, [setShowSplashScreen]);

  return showSplashScreen ? (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <img src={loading} alt="Logo" className="w-64 h-64" />
      </div>
    </div>
  ) : (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-blue-500 text-white py-8 shadow-md text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Your CV Builder</h1>
          <p className="text-lg md:text-xl mt-2">
            Craft Your Professional CV & Cover Letter with Ease
          </p>
          <p className="mt-2 text-lg md:text-xl">
            Choose from a wide variety of professionally designed templates.
          </p>
        </header>

        <main className="flex-grow container mx-auto px-4 py-12">
          {/* CV Templates Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Select a CV Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cvTemplates.map((template) => (
                <div
                  key={template.id}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleCVTemplateSelection(template.id)}
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="size-56"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cover Letter Templates Section */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Select a Cover Letter Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coverLetterTemplates.map((template) => (
                <div
                  key={template.id}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform cursor-pointer"
                  onClick={() =>
                    handleCoverLetterTemplateSelection(template.id)
                  }
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="h-56"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>
            All user data is stored locally, ensuring privacy and user control.{" "}
            <Link
              to="/your-cv-builder/privacy"
              className="underline text-blue-400"
            >
              Learn more
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
