import React from "react";

import { getAllTrainingData } from "../../../lib/services/training-data.service";
import Card from "../../../components/card";

async function LatestTrainingMainPage() {
  const allTrainingData = await getAllTrainingData();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-6 lg:mt-12">
      {allTrainingData?.slice(0, 4).map((data, i) => {
        return <Card key={i} data={data} />;
      })}
    </div>
  );
}

export default LatestTrainingMainPage;
