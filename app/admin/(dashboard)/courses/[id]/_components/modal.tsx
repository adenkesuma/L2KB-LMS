"use client"

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function CertificateUploadModal({ onClose, adminAK, trainingId, candidateId }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

   const handleUpload = async () => {
    if (selectedFile) {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("certificate_file", selectedFile);
      formData.append("training_id", trainingId);
      formData.append("candidate_id", candidateId);

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
          toast.success("Berhasil Mengirim sertifikat");
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
    <div className={`fixed top-0 bg-[rgba(0,0,0,0.4)] left-0 w-full h-full flex items-center justify-center z-50`}>
      <div className="modal-content bg-white border border-gray-200 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Upload Sertifikat</h2>

        <input
          type="file"
          accept=".pdf"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { 
            const files: FileList | null = e.target.files;
            if (files) {
              const file: File | null = files[0];

              if (file) {
                setSelectedFile(file);
              }
            }
          }}
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
