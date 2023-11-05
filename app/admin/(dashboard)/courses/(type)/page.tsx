import { getAllTrainingDataAdmin } from "../../../../../lib/services/training-data.service";
import { getCookie } from "../../../../../lib/services/cookie.service";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

async function AdminCourses() {
  const adminAK = await getCookie("adminAK");

  if (adminAK) {
    const allTrainingDataAdmin = await getAllTrainingDataAdmin(adminAK);

    return (
      <DataTable columns={columns} data={allTrainingDataAdmin} />
    );
  }
}

export default AdminCourses;
