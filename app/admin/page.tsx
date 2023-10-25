import React from "react";
import { redirect } from "next/navigation";

function AdminMainPage() {
  return redirect("/admin/login");
}

export default AdminMainPage;
