"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

const ModalSKP = ({ onClose, adminAK, userId }: any) => {
    const [SKP, setSKP] = useState<any>();
    const [isUploading, setIsUploading] = useState(false);
    
    const handleUpdateData = async () => {
        setIsUploading(true);

        try {
          const response = await axios.put(
            `${process.env.NEXT_PUBLIC_P2KB_API}/admin/profile/${userId}`, 
            {
              skp: parseInt(SKP)
            },
            {
              headers: {
                Authorization: `Bearer ${adminAK}`
              }
            }
          );

          if (response.status === 200) {
            toast.success("Berhasil Mengirim SKP");
            setIsUploading(false);
            setSKP("");
            console.log('Data updated successfully:', response.data);
          } else {
            toast.error("Something went wrong")
          }
      
        } catch (error: any) {
          toast.error(error.response.data.message)
          console.error('Error updating data:', error);
        }
    };


  return (
    <div className={`fixed top-0 bg-[rgba(0,0,0,0.1)] left-0 w-full h-full flex items-center justify-center z-50`}>
        <div className="modal-content bg-white border border-gray-200 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Upload SKP Manual</h2>
    
          <input
            type="number"
            value={SKP}
            onChange={(e) => setSKP(e.target.value)}
            className="py-2 px-4 border-gray-200 border rounded-lg text-gray-800 font-medium text-sm mb-6"
          />
          
          <div className="flex items-center gap-4">
            <Button
              onClick={handleUpdateData}
              disabled={!SKP || isUploading}
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
  )
}

export default ModalSKP