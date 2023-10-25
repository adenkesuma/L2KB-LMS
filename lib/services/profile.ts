"use server";

import { cookies } from "next/headers";

export async function getProfile() {
  const cookie = cookies();
  const accessKey = cookie.get("accessKey")?.value;

  if (accessKey) {
    const get = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessKey}`,
      },
    });

    const res = await get.json();
    if (get.status === 200) {
      return res.data;
    } else {
      return null;
    }
  }
}
