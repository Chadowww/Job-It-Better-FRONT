import { ref } from "vue";
import { JwtTokenType } from "@/types/JwtTokenType";
import { jwtDecode } from "jwt-decode";

export const token = ref<string>(localStorage.getItem("token") || "");

export function decodeToken(token: string): JwtTokenType {
  return jwtDecode(token) as JwtTokenType;
}
