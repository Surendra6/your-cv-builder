import CVTemplate1 from "../../assets/cv-template-1.jpg";
import CVTemplate2 from "../../assets/cv-template-2.jpg";
import CVTemplate3 from "../../assets/cv-template-3.jpg";

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

export { cvTemplates, coverLetterTemplates };
