import axios from "axios";
import { CompanyCardType } from "@/types/CompanyCardType";

export const getCompanys = async (): Promise<
  Array<CompanyCardType> | undefined
> => {
  try {
    const response = await axios.get(
      "https://127.0.0.1:8000/company/top-offers",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch (e) {
    console.log(e);
  }
};
