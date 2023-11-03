import React from "react";
import { getCookie } from "../../../../../lib/services/cookie.service";
import { getOneTrainingDataAdmin } from "../../../../../lib/services/training-data.service";
import AdminCourseDetailContent from "./_components/content";

async function AdminCourseDetailPage({ params }: { params: { id: string } }) {
  const adminAK = await getCookie("adminAK");

  if (adminAK) {
    const trainingData = await getOneTrainingDataAdmin(params.id, adminAK);
    // console.log(trainingData);

    return (
      <>
        <AdminCourseDetailContent
          trainingData={trainingData}
          adminAK={adminAK}
        />
      </>
    );
  }
}

export default AdminCourseDetailPage;
