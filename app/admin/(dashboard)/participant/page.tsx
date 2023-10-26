import { getAllTrainingCandidate } from "../../../../lib/services/training-candidate.service";
import { getCookie } from "../../../../lib/services/cookie.service";
import ActivateUserContent from "./_components/content";

export interface ITrainingCandidate {
  id: string;
  nama_lengkap: string;
  nama_lengkap_gelar: string;
  no_sip: string;
  no_str: string;
  no_serkom: string;
  no_ijazah: string;
  no_pdki: string;
  no_ktp: string;
  no_atm: string;
  accepted: null;
  attend: false;
  createdAt: Date;
  updatedAt: Date;
  user_id: string;
  training_id: string;
}

const ParticipantPage = async () => {
  const adminAK = await getCookie("adminAK");

  if (adminAK) {
    const trainingCandidates = await getAllTrainingCandidate(adminAK);

    return (
      <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
        <h1 className="font-bold text-xl md:text-2xl text-gray-800">Peserta</h1>

        <ActivateUserContent trainingCandidates={trainingCandidates} />
      </div>
    );
  }
};

export default ParticipantPage;
