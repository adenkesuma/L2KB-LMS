"use client"

import axios from 'axios'
import { useState } from 'react'
import Image from 'next/image'

const Guideline = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  }

  const handleImageUpload = async (e: any) => {
    e.preventDefault()

    if (selectedImage) {
      const formData = new FormData()
      formData.append('guide_image', selectedImage)

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_P2KB_API}/upload-guide`, formData);

        if (response.status === 200) {
          console.log('Image uploaded successfully.')
        } else {
          console.error('Image upload failed.')
        }
      } catch (error) {
        console.error('Network error:', error)
      }
    }
  }

  return (
    <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800">Panduan Pelatihan</h1>
        </div>

        <form
          className="my-8 flex items-start gap-8"
          onSubmit={(e) => handleImageUpload(e)}
        >
          <Image
            src={`https://api.pdkindonesia.com/guide/index.jpg`}
            alt="guideline image"
            width={1000}
            height={1000}
            className='w-2/3 border border-gray-200 rounded-md'
          />
          

          <div className='w-1/3'>
            <h2 className="font-bold text-lg text-gray-800 mb-4">Preview Panduan</h2>

            {selectedImage ? (
              <Image
                src={URL.createObjectURL(selectedImage)}
                width={1000}
                height={1000}
                alt="selected image"
                className='w-96 border border-gray-200 rounded-md'
              />
              ) : (
              <Image
                src={`${process.env.NEXT_URL_API}/guide/index.jpg`}
                alt="guideline image"
                width={1000}
                height={1000}
                className='w-96 border border-gray-200 rounded-md'
              />
            )}

            <input 
              className='mt-6'
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />

            <button
              type="submit"
              className='block mt-6 text-white bg-green rounded-lg py-[6px] md:py-2 px-4'
            >
              Ubah Panduan
            </button>
          </div>
        </form>
    </div>
  )
}

export default Guideline