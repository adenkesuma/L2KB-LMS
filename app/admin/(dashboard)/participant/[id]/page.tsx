import {
  getOneTrainingCandidate,
  getTrainingCandidateFileList,
} from "../../../../../lib/services/training-candidate.service";
import { getCookie } from "../../../../../lib/services/cookie.service";
import TrainingCandidateFileContent from "./components/content";

const ActivateUserDetail = async ({ params }: { params: { id: string } }) => {
  const adminAK = await getCookie("adminAK");
  if (adminAK) {
    const trainingCandidate = await getOneTrainingCandidate(adminAK, params.id);
    const fileList = await getTrainingCandidateFileList(
      adminAK,
      trainingCandidate?.id
    );

    return (
      <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
        <h1 className="font-bold text-xl md:text-2xl text-gray-800">
          Informasi peserta
        </h1>

        <TrainingCandidateFileContent
          trainingCandidate={trainingCandidate}
          fileList={fileList}
          adminAK={adminAK}
        />
      </div>
    );
  }
};

export default ActivateUserDetail;
