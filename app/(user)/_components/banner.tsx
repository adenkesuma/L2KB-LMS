import React from "react";

import { getAllTrainingData } from "../../../lib/services/training-data.service";
import HeroBanner from "../../../components/heroBanner";

async function MainPageBanner() {
  const allTrainingData = await getAllTrainingData();

  return (
    <>
      <HeroBanner data={allTrainingData} />
    </>
  );
}

export default MainPageBanner;
