import { getCookie } from '@/lib/services/cookie.service';
import ProfileList from './_components/list';
import ExportData from './_components/export';

const Profile = async () => {
  const adminAK = await getCookie("adminAK");

  if (adminAK) {
    return (
      <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
        <div className="flex justify-between items-center">
          <h1 className='font-bold text-xl md:text-2xl text-gray-800'>Users Profile</h1>
          
          <ExportData adminAK={adminAK} />
        </div>

        <ProfileList adminAK={adminAK} />
      </div>
    )
  }
}

export default Profile