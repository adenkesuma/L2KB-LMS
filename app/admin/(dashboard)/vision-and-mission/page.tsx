import { getCookie } from '@/lib/services/cookie.service';
import InputImage from './_components/page'

const VisionAndMission = async () => {
    const adminAK = await getCookie("adminAK");

    return (
      <div>
          <InputImage adminAK={adminAK}/>
      </div>
    )
}

export default VisionAndMission