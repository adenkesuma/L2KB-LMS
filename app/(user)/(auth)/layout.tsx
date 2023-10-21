import React from "react";

import ClientOnly from "../../../components/client-only";
import HasUserAccessToken from "../../../components/has-user-access-token";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientOnly>
        <HasUserAccessToken />
        {children}
      </ClientOnly>
    </>
  );
}

export default AuthLayout;
