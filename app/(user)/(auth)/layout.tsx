"use client";

import React from "react";
import { getAccessToken } from "../../../store/user-auth.store";

function AuthLayout({ children }: { children: React.ReactNode }) {
  //   console.log("udin", getAccessToken());
  return <>{children}</>;
}

export default AuthLayout;
