import { getCookie } from '@/lib/services/cookie.service'
import axios from 'axios'
import { toast } from 'sonner'

const DeleteFacility = async (facilityId: string) => {
    const adminAK = await getCookie('adminAK');

    try {
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_P2KB_API}/facility/${facilityId}`,
            {
                headers: {
                    Authorization: `Bearer ${adminAK}`
                }
            }
        )
        
        if (response.status === 200) {
            toast.success("Gambar berhasil dihapus")
            window.location.href = "/admin/facilities"
        }

    } catch (error: any) {
        console.log(error.data.message)
    }
}

export default DeleteFacility