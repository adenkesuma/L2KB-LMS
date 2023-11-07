"use client"

import { UserData } from "@/app/(user)/(app)/profile/page";
import axios from "axios";
import { useState, useEffect, FC } from "react"

type UserDetailProps = {
    params: string;
    adminAK: string | null | undefined;
}

const UserDetail: FC<UserDetailProps> = ({ params, adminAK }) => {
    const [userDetail, setUserDetail] = useState<UserData>()

    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_P2KB_API}/admin/profile/${params}`,
              {
                headers: {
                  Authorization: `Bearer ${adminAK}`,
                },
              }
            );

            if (response.status === 200) {
              setUserDetail(response.data.data);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };

        fetchUserProfile();
    }, [adminAK, params]);

    console.log(userDetail)

    return (
      <div>UserDetail</div>
    )
}

export default UserDetail