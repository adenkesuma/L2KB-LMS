"use client"

import Image from 'next/image';
import { toast } from 'sonner';
import DeleteGallery from '../_components/delete-gallery';

type GalleryDetailType = { params: { id: string } };

const GalleryDetail = ({ params } : GalleryDetailType) => {
    const deleteImage = async () => {
        try {
            await DeleteGallery(params.id);

        } catch (error: any) {
            toast.error(error.data.message)
        }
    }

  return (
    <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10 flex gap-8 items-start">
        <Image
            src={`${process.env.NEXT_PUBLIC_PDKI_API}/gallery/${params.id}.jpg`}
            width={1000}
            height={1000}
            alt="fasilitas"
            className="w-2/3 bg-center bg-cover rounded-md object-cover border"
        />
        <button onClick={deleteImage} className='bg-red-600 text-white font-medium py-2 px-6 rounded-md'>
            Hapus Gambar
        </button>
    </div>
  )
}

export default GalleryDetail