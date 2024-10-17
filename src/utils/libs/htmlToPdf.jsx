import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const exportHTML = () => {
  var element = document.getElementById("source-html");

  html2canvas(element).then((canvas) => {
    var imgData = canvas.toDataURL("image/png");
    var pdf = new jsPDF("p", "mm", "a4");
    var imgWidth = 210;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("CV.pdf");
  });
};

// const exportHTML = () => {
//   // Ensure jsPDF is loaded
//   if (typeof window.jspdf === "undefined") {
//     console.error("jsPDF library is not loaded.");
//     return;
//   }

//   const { jsPDF } = window.jspdf;

//   // Get the HTML content from the element
//   var element = document.getElementById("source-html");

//   // Use html2canvas to capture the HTML content as a canvas
//   html2canvas(element).then((canvas) => {
//     var imgData = canvas.toDataURL("image/png");

//     // Initialize jsPDF (A4 size)
//     var pdf = new jsPDF("p", "mm", "a4");

//     // Calculate width and height to fit the content into a PDF page
//     var imgWidth = 210; // A4 page width in mm
//     var pageHeight = 297; // A4 page height in mm
//     var imgHeight = (canvas.height * imgWidth) / canvas.width;
//     var heightLeft = imgHeight;
//     var position = 0;

//     // Add the image (HTML content) to the PDF
//     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;

//     // If the content exceeds one page, add more pages
//     while (heightLeft >= 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//     }

//     // Download the PDF
//     pdf.save("CV.pdf");
//   });
// };

export { exportHTML };
