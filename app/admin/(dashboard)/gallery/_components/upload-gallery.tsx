"use client"

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/components/icons/loading-icon";
import axios from "axios";
import { toast } from "sonner";


const UploadGallery = ({ adminAK } : { adminAK: string | null | undefined }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0])
        }
    }

    const handleImageUpload = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        if (selectedImage) {
            const formData = new FormData();
            formData.append("gallery_image", selectedImage);

            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_P2KB_API}/gallery/upload`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${adminAK}`
                        }
                    }
                )

                if (response.status === 201) {
                    setIsLoading(false);
                    toast.success("Image uploaded successfully. Reloading page...")

                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                } else {
                    setIsLoading(false);
                    toast.error("Failed to upload.")
                }

            } catch (error) {
                toast.error("Internal server error")
            }
        }
    }

    return (
        <div 
            className="lg:mt-8 mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4"
        >
            <form
                className="w-full"
                onSubmit={(e) => handleImageUpload(e)}
            >
                <h2 className="mb-6 font-bold text-xl">Upload Galeri</h2>
                {selectedImage ? (
                    <Image 
                        src={URL.createObjectURL(selectedImage)}
                        alt="upload image"
                        width={1000}
                        height={1000}
                        className="w-full border border-gray-200 rounded-md"
                    />
                ) : (
                    <div className="w-full border border-gray-200 rounded-md flex justify-center items-center h-72">
                        <p className="font-semibold text-base text-green">Upload Gambar</p>
                    </div>
                )}

                <input  
                    className="mt-8"
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                />

                <Button
                    type="submit"
                    className="mt-6 text-white bg-green rounded-lg py-[6px] md:py-2 px-4 flex justify-center items center"
                >
                    {isLoading ? (
                        <>
                            <LoadingIcon /> Uploading
                        </>
                    ) : (
                        "Upload Gallery"
                    )}
                </Button>
            </form>
        </div>
    )
}

export default UploadGallery