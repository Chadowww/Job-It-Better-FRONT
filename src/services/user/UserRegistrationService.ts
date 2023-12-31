import { UserFormType } from "@/types/UserFormType";
import axios from "axios";

export const userRegister = async (
  companyUser: UserFormType
): Promise<string | undefined> => {
  console.log(companyUser);
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
    if (response.status === 201 && response.data.user_id) {
      return response.data.user_id;
    }
  } catch (error: any) {
    console.log(error);
    return undefined;
  }
};
