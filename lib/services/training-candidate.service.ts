import { ITrainingCandidate } from "../../app/admin/(dashboard)/participant/page";

export async function getAllTrainingCandidate(
  adminAK?: string
): Promise<ITrainingCandidate[] | []> {
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-candidate`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + adminAK,
      },
      cache: "no-store",
    }
  );
  const res = await get.json();

  return await res.data;
}

export async function getOneTrainingCandidate(
  adminAK?: string,
  id?: string
): Promise<ITrainingCandidate | null> {
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-candidate/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + adminAK,
      },
      cache: "no-store",
    }
  );
  const res = await get.json();

  return await res.data;
}

export async function getTrainingCandidateFileList(
  adminAK?: string,
  id?: string
): Promise<{
  ijazah?: string;
  ktp?: string;
  serkom?: string;
  sip?: string;
  str?: string;
  paid?: string;
  pdki?: string;
} | null> {
  const get = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/documents/training-candidate/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + adminAK,
      },
      cache: "no-store",
    }
  );
  const res = await get.json();
  const files = res.data as string[];

  const obj = files?.map((file) => {
    const name = file.split(".")[0];
    return { name, file };
  });
  const result = obj?.reduce((acc: any, { name, file }) => {
    acc[name] = file;
    return acc;
  }, {});

  return result;
}
