import { useEffect, useState } from "react";
import loading from "../assets/loading-snail.gif";
import { Link } from "react-router-dom";
import SelectCVTemplate from "../components/SelectCVTemplate";
import SelectCoverLetterTemplate from "../components/SelectCoverLetterTemplate";

const Home = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplashScreen(false); // Hide the splash screen after 3000ms
    }, 1500);
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
      <div className="bg-gray-50 flex flex-col">
        <header className="bg-gray-700 text-white px-5 py-8 shadow-md text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Your CV Builder</h1>
          <p className="text-lg md:text-xl mt-2">
            Craft Your Professional CV & Cover Letter with Ease
          </p>
          <p className="mt-2 text-lg md:text-xl">
            Choose from a wide variety of professionally designed templates.
          </p>
        </header>

        <main className="flex-grow container mx-auto px-4 py-12">
          <SelectCVTemplate />

          <SelectCoverLetterTemplate />
        </main>

        <footer className="bg-gray-700 text-white p-4 text-center">
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
