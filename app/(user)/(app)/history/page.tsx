import { getMyTraining } from "@/lib/services/training-data.service";
import { cookies } from "next/headers";
import HistoryClient from "./_components/data";

const History = async () => {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  if (accessKey) {
    let totalSkp = 0;
    const myTrainingData = await getMyTraining(accessKey);

    // get current date
    const currentDate = new Date();
      
    // filter training data by training_end
    const trainingDone = myTrainingData?.filter(item => {
      const trainingEndDate = new Date(item.training?.training_end);
      return trainingEndDate <= currentDate;
    });

    trainingDone?.forEach((item) => {
      totalSkp += item.training.skp
    })

    return (
      <HistoryClient trainingDone={trainingDone} />
    );
  }

};

export default History;
