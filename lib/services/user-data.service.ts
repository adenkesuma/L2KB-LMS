import axios from "axios";
import { UserData } from "../../app/(user)/(app)/profile/page";

export async function getUserData(accessKey: string): Promise<UserData | null> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_P2KB_API}/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
