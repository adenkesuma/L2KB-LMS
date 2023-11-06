"use client"

function CertificateViewer({ pdfUrl } : any) {
  return (
    <iframe
        src={`https://docs.google.com/viewer?embedded=true&url=${pdfUrl}`}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
    ></iframe>
  );
}

export default CertificateViewer;

