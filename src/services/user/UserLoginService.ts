import axios from "axios";

type LoginData = {
  email: string;
  password: string;
};

export const userLogin = async (data: LoginData) => {
  try {
    const response = await axios.post("https://127.0.0.1:8000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        localStorage.removeItem("token");
      }, 3600000);
      location.reload();
    }
  } catch (error: any) {
    console.log(error);
  }
};
