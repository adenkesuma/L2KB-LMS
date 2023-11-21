"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import noData from "@/public/assets/images/no-data.png"

const GetAllFacilities = () => {
    const [allFacilities, setAllFacilities] = useState<[]>();

    useEffect(() => {
       const getAllFacilities = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_P2KB_API}/facility`
            )

            if (response.status === 200) {
                console.log(response.data.data)
                setAllFacilities(response.data.data)
            }
       }

       getAllFacilities()
    }, [])

    return (
      <div className='mt-12'>
          {allFacilities?.length === 0 ? (
            <Image 
                src={noData}
                alt="no data"
                className="w-full bg-center rounded-md border"
            />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
               {allFacilities?.map((item: any) => (
                     <Image
                         key={item.id}
                         src={`${process.env.NEXT_PUBLIC_PDKI_API}/facility/${item.id}.jpg`}
                         width={1000}
                         height={1000}
                         alt="fasilitas"
                         className="w-full h-64 bg-center bg-cover rounded-md object-cover border"
                     />
               ))}
            </div>
          )}
      </div>
    )
}

export default GetAllFacilities