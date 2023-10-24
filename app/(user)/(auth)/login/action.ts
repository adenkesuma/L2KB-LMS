"use server";
import { cookies } from "next/headers";

export async function setCookie(accessKey: string) {
  const cookieStore = cookies();
  cookieStore.set({
    name: "accessKey",
    value: accessKey,
    path: "/",
    sameSite: "lax",
    secure: true,
    httpOnly: true,
  });

  return true;
}
