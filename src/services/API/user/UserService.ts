import { token } from "@/utils/tokenManager";
import Axios from "axios";
import { ref } from "vue";
import { UserType } from "@/types/UserType";

export const user = ref(<UserType>{});

export const getUser = async (): Promise<UserType | boolean> => {
  try {
    if (token.value) {
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
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
