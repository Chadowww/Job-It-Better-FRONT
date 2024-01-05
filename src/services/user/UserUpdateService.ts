import { UserType } from "@/types/UserType";
import axios from "axios";
import { updateCandidate } from "@/services/candidate/CandidateUpdateService";

export const updateUser = async (user: UserType): Promise<boolean> => {
  try {
    const response = await axios.put(
      `https://127.0.0.1:8000/user/update/${user.user_id}`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200 && user.roles === 3) {
      return await updateCandidate(user);
    }
    return false;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
