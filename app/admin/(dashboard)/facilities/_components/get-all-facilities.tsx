"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import Link from "next/link"

const GetAllFacilities = ({ adminAK } : { adminAK: string | null | undefined }) => {
    const [allFacilities, setAllFacilities] = useState<[]>();

    useEffect(() => {
       const getAllFacilities = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_P2KB_API}/facility`,
                {
                    headers: {
                        Authorization: `Bearer ${adminAK}`
                    }
                }
            )

            if (response.status === 200) {
                console.log(response.data.data)
                setAllFacilities(response.data.data)
            }
       }

       getAllFacilities()
    }, [adminAK])

    return (
      <div className='mt-12'>
          <h2 className='mb-4 text-xl font-bold'>Semua Fasilitas</h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
              {allFacilities?.map((item: any) => (
                  <Link
                    href={`/admin/facilities/${item.id}`}
                    key={item.id}
                    className="w-full"
                  >
                    <Image
                        src={`${process.env.NEXT_PUBLIC_PDKI_API}/facility/${item.id}.jpg`}
                        width={1000}
                        height={1000}
                        alt="fasilitas"
                        className="w-full h-80 bg-center bg-cover rounded-md object-cover border"
                    />
                </Link>
              ))}
          </div>
      </div>
    )
}

export default GetAllFacilities