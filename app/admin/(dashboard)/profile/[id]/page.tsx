import { getCookie } from '@/lib/services/cookie.service';
import UserDetail from '../_components/detail';

type UserProfileType = { params: { id: string } };

const UserProfileDetail = async ({ params } : UserProfileType) => {
    const adminAK = await getCookie("adminAK");

    return (
        <UserDetail params={params.id} adminAK={adminAK} />
    )
}

export default UserProfileDetail