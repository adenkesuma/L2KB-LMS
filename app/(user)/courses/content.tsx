"use client";

import React, { Suspense } from "react";
import { ITrainingData } from "./page";
import Card from "../../../components/card";
import Loading from "../../../components/loading";

function CourseContent({
  searchParams,
  allTrainingData,
}: {
  searchParams: any;
  allTrainingData: ITrainingData[];
}) {
  return (
    <Suspense key={searchParams.name} fallback={<Loading />}>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-6 lg:mt-12">
        {allTrainingData.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </Suspense>
  );
}

export default CourseContent;
