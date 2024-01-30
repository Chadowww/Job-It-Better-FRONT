import { ApplyFormType } from "@/types/ApplyFormType";
import axios from "axios";

export const applyToJoboffer = async (
  apply: ApplyFormType
): Promise<boolean> => {
  console.log(apply);
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/apply/create",
      apply,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      console.log("Apply created");
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
};
