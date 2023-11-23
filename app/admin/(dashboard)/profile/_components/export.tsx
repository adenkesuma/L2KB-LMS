"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import * as XLSX from "xlsx"

const ExportData = ({ adminAK } : { adminAK : string }) => {
  const [loading, setLoading] = useState(false);

  const handleExportClick = async () => {
    try {
        setLoading(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/admin/export/profile`, {
            method: 'GET',
            headers: {
               Authorization: `Bearer ${adminAK}`,
              'Content-Type': 'application/json',
            },
        });

        
        if (!response.ok) {
            throw new Error('Gagal mengambil data');
        }
        
        const data = await response.json();

        const ws = XLSX.utils.json_to_sheet(data);
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
        {loading ? 'Loading...' : 'Export to csv'}
    </Button>
  )
}

export default ExportData