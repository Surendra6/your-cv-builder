import { useReducer } from "react";

// Initial state for the form
const initialState = {
  personalDetails: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    country: "",
    linkedin: "",
    github: "",
    profilePicture: null,
  },
  education: {
    university: "",
    degree: "",
    specialization: "",
    country: "",
    startDate: "",
    endDate: "",
  },
  skills: [],
  professionalDetails: {
    jobs: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        responsibilities: "",
      },
    ],
  },
};

// Reducer function to maintain the form data
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PERSONAL_DETAILS":
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          [action.field]: action.payload,
        },
      };
    case "UPDATE_EDUCATION":
      return {
        ...state,
        education: { ...state.education, [action.field]: action.payload },
      };
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload),
      };
    case "UPDATE_PROFESSIONAL_DETAILS": {
      const updatedJobs = [...state.professionalDetails.jobs];
      updatedJobs[action.index] = {
        ...updatedJobs[action.index],
        [action.field]: action.value,
      };
      return {
        ...state,
        professionalDetails: {
          ...state.professionalDetails,
          jobs: updatedJobs,
        },
      };
    }
    case "ADD_JOB_SECTION":
      return {
        ...state,
        professionalDetails: {
          ...state.professionalDetails,
          jobs: [
            ...state.professionalDetails.jobs,
            {
              title: "",
              company: "",
              startDate: "",
              endDate: "",
              city: "",
              country: "",
              responsibilities: "",
            },
          ],
        },
      };
    default:
      return state;
  }
};

export const useFormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return [state, dispatch];
};
