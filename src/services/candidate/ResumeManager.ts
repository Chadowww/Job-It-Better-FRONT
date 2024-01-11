import axios from "axios";
import { token } from "@/utils/tokenManager";
import { ResumeType } from "@/types/ResumeType";
import { ref } from "vue";

export const resumes = ref<ResumeType[]>([]);
export const getResumes = async (
  id: number
): Promise<Array<ResumeType> | boolean> => {
  try {
    const response = await axios.get(
      `https://127.0.0.1:8000/resume/by-candidate/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    resumes.value = response.data;
    return resumes.value;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
export const uploadResume = async (resume: ResumeType): Promise<boolean> => {
  try {
    const formData = new FormData();

    // Ajoutez toutes les données du CV au FormData. Si le fichier existe, ajoutez-le aussi.
    Object.keys(resume).forEach((key) => {
      if (key !== "file" || (key === "file" && resume[key] instanceof File)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        formData.append(key, resume[key]);
      }
    });

    const response = await axios.post(
      `https://127.0.0.1:8000/resume/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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

export const deleteResume = async (filename: string): Promise<boolean> => {
  console.log(filename);
  try {
    const response = await axios.delete(
      `https://127.0.0.1:8000/resume/delete/${filename}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
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
