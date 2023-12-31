import Card from "../../../../components/card";
import { getAllTrainingData } from "../../../../lib/services/training-data.service";

async function CourseContent({ searchParams }: { searchParams: any }) {
  const allTrainingData = await getAllTrainingData(searchParams.name);

  allTrainingData.sort((a, b) => {
    const dateA = new Date(a.training_start).getTime();
    const dateB = new Date(b.training_start).getTime();
    return dateB - dateA; 
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-6 lg:mt-12">
      {allTrainingData.map((data, i) => {
        return <Card key={i} data={data} />;
      })}
    </div>
  );
}

export default CourseContent;
