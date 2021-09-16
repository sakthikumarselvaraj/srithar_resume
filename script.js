function generatePdf() {
    const element = document.getElementById("resume");

    html2pdf()
    .from(element)
    .save()
  }