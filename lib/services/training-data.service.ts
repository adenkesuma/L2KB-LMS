import { ITrainingData } from "../../app/(user)/courses/page";

export async function getAllTrainingData(): Promise<ITrainingData[] | []> {
  try {
    const get = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/training`, {
      method: "GET",
      next: {
        revalidate: 0,
      },
    });
    const res = await get.json();
    return await res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

type GetOneTrainingDataType = {
  id: string;
};
export async function getOneTrainingData(
  id: string
): Promise<ITrainingData | null> {
  try {
    const get = await fetch(
      `${process.env.NEXT_PUBLIC_P2KB_API}/training/${id}`,
      {
        method: "GET",
        next: {
          revalidate: 0,
        },
      }
    );
    const res = await get.json();
    return await res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
