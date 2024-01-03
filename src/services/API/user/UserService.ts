import { token } from "@/utils/tokenManager";
import Axios from "axios";
import { ref } from "vue";
import { UserType } from "@/types/UserType";

export const user = ref(<UserType>{});

export const getUser = async (): Promise<UserType | boolean> => {
  try {
    const response = await Axios.get(
      "https://127.0.0.1:8000/user/get-from-token",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    user.value = response.data;
    return user.value;
  } catch (error) {
    console.log(error);
    return false;
  }
};
