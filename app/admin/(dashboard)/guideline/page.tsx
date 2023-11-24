import { getCookie } from '@/lib/services/cookie.service'
import GuidelineInput from './_components/guideline-input'

const Guideline = async () => {
    const adminAK = await getCookie('adminAK')

    return (
      <div>
        <GuidelineInput adminAK={adminAK} />
      </div>
    )
}

export default Guideline