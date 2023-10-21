import React from "react";
import { getAccessToken } from "../../../store/user-auth.store";
import ClientOnly, { HasToken } from "../../../components/client-only";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientOnly>
        <HasToken />
        {children}
      </ClientOnly>
    </>
  );
}

export default AuthLayout;
