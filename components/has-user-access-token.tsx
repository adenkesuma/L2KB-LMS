"use client";

import useStore from "../store/use-store";
import { userAuthStore } from "../store/user-auth.store";

function HasUserAccessToken() {
  const userAuth = useStore(userAuthStore, (state) => state);

  if (userAuth?.accessToken) {
    window.location.href = "/";
  }

  return <></>;
}

export default HasUserAccessToken;
