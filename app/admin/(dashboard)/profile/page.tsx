import { getUsersProfile } from '@/lib/services/user-data.service'
import { cookies } from 'next/headers';

const Profile = async () => {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  const usersProfile = await getUsersProfile(accessKey)

  console.log(usersProfile)

  return (
    <div>Profile</div>
  )
}

export default Profile