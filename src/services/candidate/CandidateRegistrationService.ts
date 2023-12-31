import { CandidateFormType } from "@/types/CandidateFormType";
import axios from "axios";

export const candidateRegister = async (
  candidate: CandidateFormType
): Promise<boolean> => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/candidate/create",
      candidate,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.status === 201;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
