"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getAccessToken } from "../store/user-auth.store";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

interface HasTokenProps extends ClientOnlyProps {}

export const HasToken: () => void = () => {
  const router = useRouter();
  const user_auth =
    sessionStorage.getItem("auth-store") !== undefined &&
    JSON.parse(sessionStorage.getItem("auth-store"));
  console.log(user_auth);

  console.log(getAccessToken());
  if (user_auth.state.accessToken) {
    return router.replace("/update_profile");
  }

  return <></>;
};

export default ClientOnly;
