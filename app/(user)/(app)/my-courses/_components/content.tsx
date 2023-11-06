import React from "react";
import { cookies } from "next/headers";

import { getMyTraining } from "../../../../../lib/services/training-data.service";
import Card from "../../../../../components/card";
import Link from "next/link";

async function MyCourseContent() {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  if (accessKey) {
    const myTrainingData = await getMyTraining(accessKey);
    console.log(myTrainingData);

    // get skp
    let totalSkp = 0;

    myTrainingData?.forEach((item) => {
      totalSkp += item.training.skp;
    });

    return (
      <div className="mt-4 sm:mt-6 lg:mt-12">
        <h1 className="text-xl text-gray-800 font-medium">
          Total skp yang akan saya dapatkan:{" "}
          <span className="text-green text-2xl font-bold">{totalSkp}</span>
        </h1>

        <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {myTrainingData?.map((data) => {
            return <Card data={data.training} key={data.training.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default MyCourseContent;
