import axios from "axios";
import { token } from "@/utils/tokenManager";

export const uploadAvatar = async (file: File): Promise<boolean> => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/candidate/upload-avatar",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    console.log(response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
