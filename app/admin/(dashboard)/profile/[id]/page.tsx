import { getCookie } from '@/lib/services/cookie.service';
import UserDetail from '../_components/detail';

type UserProfileType = { params: { id: string } };

const UserProfileDetail = async ({ params } : UserProfileType) => {
    const adminAK = await getCookie("adminAK");

    return (
        <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
            <UserDetail params={params.id} adminAK={adminAK} />
        </div>
    )
}

export default UserProfileDetail