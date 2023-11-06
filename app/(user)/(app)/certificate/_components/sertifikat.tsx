"use client"

// function CertificateViewer({ pdfUrl } : any) {
//   return (
//     <iframe
//         src={`https://docs.google.com/viewer?embedded=true&url=${pdfUrl}`}
//         width="100%"
//         height="600"
//         frameBorder="0"
//         scrolling="no"
//     ></iframe>
//   );
// }

// export default CertificateViewer;

import React, { useEffect, useRef } from "react";
import PDFObject from "pdfobject";

function CertificateViewer({ pdfUrl }: any) {
  const viewerRef = useRef(null);

  useEffect(() => {
    PDFObject.embed(pdfUrl, viewerRef.current);
  }, [pdfUrl]);

  return ( 
    <div 
        ref={viewerRef} 
        className="w-96"
        style={{ width: "100%", height: "600px" }} 
    />
  );
}

export default CertificateViewer;

