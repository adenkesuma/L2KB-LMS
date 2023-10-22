import React from "react";

import ClientOnly from "../../../components/client-only";
import HasUserAccessToken from "../../../components/has-user-access-token";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientOnly>
        <HasUserAccessToken hrefNotHas="/" />
      </ClientOnly>
      {children}
    </>
  );
}

export default AppLayout;
