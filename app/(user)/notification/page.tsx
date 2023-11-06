import NotificationCard from "@/components/notificationCard";
import React from "react";

const Notification = () => {
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
        <NotificationCard />
      </div>
    </main>
  );
};

export default Notification;
