import axios from "axios";
import { CompanyFormType } from "@/types/CompanyFormType";

export const companyRegister = async (
  company: CompanyFormType
): Promise<boolean> => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/company/create",
      company,
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
