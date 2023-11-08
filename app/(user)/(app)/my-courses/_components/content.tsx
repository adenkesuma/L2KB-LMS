import React from "react";
import { cookies } from "next/headers";

import NoDataImage from "@/public/assets/images/no-data.png"
import { getMyTraining } from "../../../../../lib/services/training-data.service";
import Card from "../../../../../components/card";
import Image from "next/image";

async function MyCourseContent() {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  if (accessKey) {
    const myTrainingData = await getMyTraining(accessKey);
    
    // get current date
    const currentDate = new Date();
      
    // filter training data by training_end
    const myTraining = myTrainingData?.filter(item => {
      const trainingEnd = new Date(item.training?.training_end);
      return trainingEnd >= currentDate;
    });

    // get skp
    let totalSkp = 0;

    myTraining?.forEach((item) => {
      totalSkp += item.training.skp;
    });


    return (
      <div className="mt-4 sm:mt-6 lg:mt-12">
        <h1 className="text-xl text-gray-800 font-medium">
          Total skp yang akan saya dapatkan:{" "}
          <span className="text-green text-2xl font-bold">{totalSkp}</span>
        </h1>

          {myTraining?.length === 0 ? (
            <Image
              src={NoDataImage}
              alt="no data"
              className="w-3/4 mx-auto"
              width={1000}
              height={1000}
            />
            ) : (
              <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                {myTraining?.map((data) => {
                  return <Card data={data.training} key={data.training.id} />;
                })}
              </div>
            )  
          }
      </div>
    );
  }
}

export default MyCourseContent;
