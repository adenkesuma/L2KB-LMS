"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import useStore from "../store/use-store";
import { userAuthStore } from "../store/user-auth.store";

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

export default ClientOnly;
