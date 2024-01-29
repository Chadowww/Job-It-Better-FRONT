import axios from "axios";
import { token } from "@/utils/tokenManager";
import { JobOfferType } from "@/types/JobOfferType";
import { ref } from "vue";

export const jobOffer = ref(<JobOfferType>{});
export const getJobOffer = async (
  id: number
): Promise<JobOfferType | boolean> => {
  try {
    const response = await axios.get(
      `https://127.0.0.1:8000/job-offer/read/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    if (response.status === 200) {
      return (jobOffer.value = response.data);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
