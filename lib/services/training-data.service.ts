import { IMyTraningData } from "../../app/(user)/(app)/my-courses/page";
import { ITrainingData } from "../../app/(user)/courses/page";

export async function getAllTrainingData(
  nama?: string
): Promise<ITrainingData[] | []> {
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/training${
      nama ? `?nama=${nama}` : ""
    }`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const res = await get.json();
  return await res.data;
}

export async function getAllTrainingDataAdmin(
  token?: string,
  page?: number
): Promise<ITrainingData[] | []> {
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training?page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
  const res = await get.json();
  return await res.data;
}

export async function getOneTrainingData(
  id: string
): Promise<ITrainingData | null> {
  try {
    const get = await fetch(
      `${process.env.NEXT_PUBLIC_P2KB_API}/training/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const res = await get.json();
    return await res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getOneTrainingDataAdmin(
  id: string,
  token?: string
): Promise<ITrainingData | null> {
  try {
    const get = await fetch(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    const res = await get.json();
    return await res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getMyTraining(
  accessKey: string
): Promise<IMyTraningData[] | null> {
  try {
    const get = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/my-training`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessKey}`,
      },
      cache: "no-store",
    });
    const res = await get.json();
    return await res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
