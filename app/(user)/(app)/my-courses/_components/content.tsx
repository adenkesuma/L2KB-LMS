import React from "react";
import { cookies } from "next/headers";

import { getMyTraining } from "../../../../../lib/services/training-data.service";
import Card from "../../../../../components/card";

async function MyCourseContent() {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  if (accessKey) {
    const myTrainingData = await getMyTraining(accessKey);

    return (
      <div className="mt-4 sm:mt-6 lg:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {myTrainingData?.map((data) => {
          return <Card data={data.training} key={data.training.id} />;
        })}
      </div>
    );
  }
}

export default MyCourseContent;
