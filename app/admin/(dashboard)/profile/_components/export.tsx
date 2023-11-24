"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from "react"
import * as XLSX from "xlsx"

const ExportData = ({ adminAK } : { adminAK : string }) => {
  const [loading, setLoading] = useState(false);

  const handleExportClick = async () => {
    try {
        setLoading(true);

        const response = await axios.get(`${process.env.NEXT_PUBLIC_P2KB_API}/admin/export/profile`, {
            headers: {
               Authorization: `Bearer ${adminAK}`,
              'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer' // response tpe sebagai array buffer untuk XLSX
        });

        
        if (response.status !== 200) {
            throw new Error('Gagal mengambil data');
        }
        
        const data = new Uint8Array(response.data); 

        const ws = XLSX.read(data, {type: 'array'}).Sheets.Sheet1;
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  
        XLSX.writeFile(wb, "users_profile.xlsx");


    } catch (error) {
      console.error('Gagal melakukan export data', error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Button disabled={loading} onClick={handleExportClick}>
        {loading ? 'Loading...' : 'Export to Excel'}
    </Button>
  )
}

export default ExportData