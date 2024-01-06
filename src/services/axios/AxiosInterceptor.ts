import axios from "axios";

// axios.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.message === "Expired JWT Token") {
      console.log("Token expiré !");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    if (
      error.response.data ===
      "A security token is required but the token storage is empty."
    ) {
      console.log("Pas de token !");
      localStorage.removeItem("token");
      window.location.href = "/";
    } else {
      console.log(error.response.data);
    }
    return Promise.reject(error);
  }
);
