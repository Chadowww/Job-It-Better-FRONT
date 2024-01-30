import { UserFormType } from "@/types/UserFormType";
import axios from "axios";

export const userRegister = async (
  companyUser: UserFormType
): Promise<string | undefined> => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/user/create",
      companyUser,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201 && response.data.userId) {
      return response.data.userId;
    }
  } catch (error: any) {
    console.log(error);
    return error.response.data.error;
  }
};
