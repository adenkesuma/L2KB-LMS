import { ITrainingData } from "../../app/(user)/courses/page";

export async function getAllTrainingData(
  name?: string
): Promise<ITrainingData[] | []> {
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/training${
      name ? `?name=${name}` : ""
    }`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const res = await get.json();
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(async () => {
    return await res.data;
  });
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

export async function getMyTraining(accessKey: string): Promise<any | null> {
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
