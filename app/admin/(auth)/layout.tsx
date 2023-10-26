import React from "react";
import { getCookie } from "../../../lib/services/cookie.service";
import { redirect } from "next/navigation";

async function AdminAuthLayout({ children }: { children: React.ReactNode }) {
  const adminAK = await getCookie("adminAK");
  if (adminAK) redirect("/admin/courses");

  return <>{children}</>;
}

export default AdminAuthLayout;
