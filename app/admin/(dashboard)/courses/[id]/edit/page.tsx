import EditCourseForm from "./_components/form";
import { getCookie } from "../../../../../../lib/services/cookie.service";
import { getOneTrainingDataAdmin } from "../../../../../../lib/services/training-data.service";

async function EditCoursePage({ params }: { params: { id: string } }) {
  const adminAK = await getCookie("adminAK");

  if (adminAK) {
    const data = await getOneTrainingDataAdmin(params.id, adminAK);
    return (
      <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl md:text-2xl text-gray-800">
            Edit Pelatihan
          </h1>
        </div>

        <EditCourseForm adminAK={adminAK} id={params.id} prevData={data} />
      </div>
    );
  }
}

export default EditCoursePage;
