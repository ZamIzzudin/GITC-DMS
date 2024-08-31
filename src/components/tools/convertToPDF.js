/** @format */

// pdfConverter.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const convertToPDF = async (pages, letter = null, type) => {
  const pdf = new jsPDF();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i].current;

    const canvas = await html2canvas(page, { scale: 2 });
    const imgData = canvas.toDataURL("image/webp", 1);
    // Set ukuran gambar dan letaknya di PDF
    const imgOptions = {
      width: pdf.internal.pageSize.getWidth(), // Sesuaikan lebar dengan lebar halaman PDF
      height: pdf.internal.pageSize.getHeight(), // Sesuaikan tinggi dengan tinggi halaman PDF
    };

    pdf.addImage(imgData, "PNG", 0, 0, imgOptions.width, imgOptions.height);

    if (i < pages.length - 1) {
      pdf.addPage();
    }
  }

  if (type === "download") {
    if (letter === "confirmationLetter") {
      pdf.save("confirmation_letter.pdf");
    } else if (letter === "offeringLetter") {
      pdf.save("offering_letter.pdf");
    }
  } else {
    return pdf.output("blob");
  }
};

export { convertToPDF };
