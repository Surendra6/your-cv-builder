import { useState } from "react";
import WorkInProgress from "./WorkInProgress";
import { FaUser, FaUniversity, FaWrench, FaBriefcase } from "react-icons/fa";
import PersonalDetails from "../components/PersonalDetails";

const CreateCV = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepComplete = (step) => currentStep > step;
  const isStepActive = (step) => currentStep === step;

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Stepper Progress Bar */}
      <div className="m-auto flex justify-between items-center mb-8 relative">
        {/* Progress Lines */}
        {/* <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between">
          <div
            className={`w-1/3 border-t-4 ${
              isStepComplete(1) ? "border-blue-500" : "border-gray-300"
            }`}
          />
          <div
            className={`w-1/3 border-t-4 ${
              isStepComplete(2) ? "border-blue-500" : "border-gray-300"
            }`}
          />
          <div
            className={`w-1/3 border-t-4 ${
              isStepComplete(3) ? "border-blue-500" : "border-gray-300"
            }`}
          />
        </div> */}

        {/* Step Indicators */}
        <div className="relative z-10 flex justify-between w-full">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isStepComplete(1) || isStepActive(1)
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              <FaUser />
            </div>
            <span
              className={`hidden md:inline text-sm ${
                isStepActive(1) ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Personal Details
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isStepComplete(2) || isStepActive(2)
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              <FaUniversity />
            </div>
            <span
              className={`hidden md:inline text-sm ${
                isStepActive(2) ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Education
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isStepComplete(3) || isStepActive(3)
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              <FaWrench />
            </div>
            <span
              className={`hidden md:inline text-sm ${
                isStepActive(3) ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Skills
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                isStepComplete(4) || isStepActive(4)
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              <FaBriefcase />
            </div>
            <span
              className={`hidden md:inline text-sm ${
                isStepActive(4) ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Professional Details
            </span>
          </div>
        </div>
      </div>

      {/* Stepper Forms */}
      {currentStep === 1 && <PersonalDetails />}
      {currentStep === 2 && <WorkInProgress />}
      {currentStep === 3 && <WorkInProgress />}
      {currentStep === 4 && <WorkInProgress />}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          className={`bg-gray-500 text-white p-2 rounded ${
            currentStep === 1 ? "invisible" : ""
          }`}
        >
          Previous
        </button>

        {currentStep < 4 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Next
          </button>
        ) : (
          <button className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateCV;
