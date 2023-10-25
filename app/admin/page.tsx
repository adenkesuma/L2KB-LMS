import { redirect } from "next/navigation";

async function AdminPage() {
  return redirect("/admin/login");
}

export default AdminPage;
