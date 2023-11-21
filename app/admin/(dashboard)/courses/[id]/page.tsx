import React from "react";
import { getCookie } from "../../../../../lib/services/cookie.service";
import { getOneTrainingDataAdmin } from "../../../../../lib/services/training-data.service";
import AdminCourseDetailContent from "./_components/content";
import DetailTraining from "./_components/detail-training";
import NotificationForUsers from "./_components/notification";

async function AdminCourseDetailPage({ params }: { params: { id: string } }) {
  const adminAK = await getCookie("adminAK");

  if (adminAK) {
    const trainingData = await getOneTrainingDataAdmin(params.id, adminAK);

    return (
      <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
        <h1 className="text-2xl font-semibold text-gray-800">
          Detail Pelatihan
        </h1>

        <DetailTraining params={params.id} />

        <NotificationForUsers 
          params={params.id} 
          trainingData={trainingData}
          adminAK={adminAK} 
        />

        <AdminCourseDetailContent
          trainingData={trainingData}
          adminAK={adminAK}
        />
      </div>
    );
  }
}

export default AdminCourseDetailPage;
