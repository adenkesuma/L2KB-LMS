"use server";

export async function deleteCourse(course_id: string, token: string) {
  const del = await fetch(
    `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training/delete?training_id=${course_id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );
  const res = await del.json();

  // console.log(res);
  if (res.statusCode === 200) {
    return true;
  }
}
