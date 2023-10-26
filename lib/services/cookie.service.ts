"use server";

import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export async function deleteCookie(key: string, path: string) {
  const cookie = cookies();
  const getCookie = cookie.get(key);

  if (getCookie) {
    cookie.delete({
      name: key,
      path: path,
    });
  }
}

export async function getCookie(key: string) {
  const cookie = cookies();

  if (key === "adminAK") {
    const getCookie = cookie.get(key)?.value;

    if (getCookie) {
      try {
        const res = verify(getCookie, process.env.JWT_ADMIN_SECRET as string);
        if (res) return getCookie;
      } catch (error) {
        return null;
      }
    }
  }

  const getCookie = cookie.get(key)?.value;
  return getCookie;
}

export async function setCookie(key: string, value: string, path: string) {
  const cookie = cookies();
  const setCookie = cookie.set({
    name: key,
    value: value,
    path: path,
  });

  return setCookie;
}
