"use client";

import useStore from "../store/use-store";
import { userAuthStore } from "../store/user-auth.store";

function HasUserAccessToken({
  hrefHas,
  hrefNotHas,
}: {
  hrefHas?: string;
  hrefNotHas?: string;
}) {
  const userAuth = useStore(userAuthStore, (state) => state);
  if (userAuth) {
    if (hrefHas) {
      if (userAuth?.accessToken) {
        window.location.href = hrefHas;
      }
    }
    if (hrefNotHas) {
      if (!userAuth?.accessToken) {
        window.location.href = hrefNotHas;
      }
    }
  }

  return <></>;
}

export default HasUserAccessToken;
