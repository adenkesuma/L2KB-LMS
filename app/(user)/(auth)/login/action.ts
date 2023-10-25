"use server";
import { cookies } from "next/headers";

export async function setCookie(accessKey: string) {
  const cookieStore = cookies();
  cookieStore.set({
    name: "accessKey",
    value: accessKey,
    path: "/",
    secure: true,
  });

  return true;
}
