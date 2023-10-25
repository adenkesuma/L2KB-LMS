"use server";

import { cookies } from "next/headers";

export async function deleteCookie(key: string) {
  const cookie = cookies();
  const getCookie = cookie.get(key);

  if (getCookie) {
    cookie.delete(key);
  }
}
