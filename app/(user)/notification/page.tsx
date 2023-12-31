"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import NotificationCard from "@/components/notificationCard";
import useStore from "@/store/use-store";
import { userAuthStore } from "@/store/user-auth.store";
import { UserData } from "../(app)/profile/page";
import Image from "next/image";

import NoDataImage from "@/public/assets/images/no-data.png"

interface Announce {
  createdAt: string;
}

const Notification = () => {
  const userAuth = useStore(userAuthStore, (state) => state);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_P2KB_API}/profile`,
          {
            headers: {
              Authorization: `Bearer ${userAuth?.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userAuth?.accessToken !== undefined) {
      fetchUserData();
    }
  }, [userAuth?.accessToken]);

  // sort data berdasarkan terbaru
  const sortedAnnounces: Announce[] | undefined = userData?.announces.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <main className="min-h-screen pt-4 sm:pt-6 lg:pt-12">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-end">
        <div>
          <h1 className="sm:text-2xl lg:text-4xl text-xl font-semibold sm:font-bold text-gray-800">
            Notifikasi
          </h1>
        </div>
      </div>

      <div>
         {sortedAnnounces?.length === 0 ? (
            <Image
              src={NoDataImage}
              alt="no data"
              className="w-3/4 mx-auto"
              width={1000}
              height={1000}
            />
            ) : (
              sortedAnnounces?.map((item, idx) => (
                <NotificationCard key={idx} announce={item} />
              ))
            )  
          }

      </div>
    </main>
  );
};

export default Notification;
