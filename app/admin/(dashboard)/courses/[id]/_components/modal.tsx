"use client"

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function CertificateUploadModal({ onClose, onUpload, adminAK, trainingId, candidateId }: any) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  console.log(trainingId)
  console.log(candidateId)

  const handleUpload = async () => {
    if (selectedFile) {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("certificate_file", selectedFile);
      formData.append("training_id", trainingId?.training_id);
      formData.append("candidate_id", candidateId?.id);

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_P2KB_API}/admin/certificate/upload`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${adminAK}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status) {
          toast.success("Successfully create course");
          onUpload(selectedFile);
          setIsUploading(false);
          setSelectedFile(null);
          onClose();
        } else {
          toast.error("Something went wrong");
        }

      } catch (error: any) {
        toast.error(error.response.data.message)
        console.error("Gagal mengunggah sertifikat:", error);
        setIsUploading(false);
      }
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}>
      <div className="modal-content bg-white border border-gray-200 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Upload Sertifikat</h2>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="p-4 border-gray-200 border rounded-lg text-gray-800 font-medium text-sm mb-6"
        />
        
        {selectedFile && (
          <embed 
            src={URL.createObjectURL(selectedFile)} 
            width="100%" height="500" 
            className="mb-6"
          />
        )}

        <div className="flex items-center gap-4">
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-24"
          >
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
          <Button 
            onClick={onClose}
            className="w-24"
          >
            Batal
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CertificateUploadModal;
