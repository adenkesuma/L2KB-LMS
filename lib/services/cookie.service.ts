"use server";

import { cookies } from "next/headers";

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
