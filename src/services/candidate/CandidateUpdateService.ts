import axios from "axios";
import { UserType } from "@/types/UserType";

export const updateCandidate = async (user: UserType): Promise<boolean> => {
  try {
    console.log(user);
    const response = await axios.put(
      `https://127.0.0.1:8000/candidate/update/${user.candidateId}`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
