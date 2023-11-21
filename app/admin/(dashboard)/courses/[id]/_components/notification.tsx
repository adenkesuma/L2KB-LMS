"use client"

import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button'
import { toast } from 'sonner';

const NotificationForUsers = ({ params, adminAK, trainingData }: any) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [option, setOption] = useState('');

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = { title, description, option }

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/admin/training/announce/${params}/${option}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${adminAK}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            toast.success("Notifikasi berhasil di buat")
            setTitle("")
            setDescription("")
          } else {
            toast.error("Gagal mengirim data")
          }
        } catch (error: any) {
            toast.error(error.response.data.message)
            console.error('Terjadi kesalahan:', error);
        }
    };

    return (
        <div className="mt-10">
            <div className="flex gap-4 items-center">
                <h2 className="text-xl font-semibold text-gray-700">
                    Kirim Notifikasi Kepada Peserta
                </h2>
            </div>

            <form
                onSubmit={handleFormSubmit}
                className='rounded-2xl border border-gray-200 mt-6 bg-white p-8 overflow-hidden'
            >
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-xs lg:text-sm">
                    Judul Notifikasi
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded-xl p-2 border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <label className="font-medium text-xs lg:text-sm">
                    Deskripsi
                  </label>
                  <textarea
                    rows={6}
                    cols={50}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded-xl p-2 border-gray-300"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <label className="font-medium text-xs lg:text-sm">
                    Kirim ke:
                  </label>

                  <select value={option} onChange={(e) => setOption(e.target.value)} className='p-2 border border-gray-300 rounded-lg bg-white'>
                    <option value="">Semua orang</option>
                    {trainingData?.trainingCandidates.map((data: any, i: any) => (
                      <option value={data?.user?.id} key={i}>{data?.user?.nama}</option>
                    ))}
                  </select>

                </div>

                <Button className='w-40 mt-6' type='submit'>Kirim</Button>
            </form>
        </div>
    )
}

export default NotificationForUsers