import { z } from "zod";
import { ref } from "vue";

const ERROR_MESSAGES = {
  PASSWORD_FORMAT:
    "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
  EMAIL_FORMAT: "L'email n'est pas valide.",
};

const emailSchema = z.string().email(ERROR_MESSAGES.EMAIL_FORMAT);
const passwordSchema = z
  .string()
  .min(8, ERROR_MESSAGES.PASSWORD_FORMAT)
  .refine(
    (password) =>
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      ),
    ERROR_MESSAGES.PASSWORD_FORMAT
  );

type errorsType = {
  email: string | null;
  password: string | null;
};
export const errors = ref<errorsType>({
  email: "",
  password: "",
});

export function verifEmail(email: string) {
  const { success } = emailSchema.safeParse(email);
  if (success) {
    errors.value.email = null;
    return true;
  } else {
    errors.value.email = ERROR_MESSAGES.EMAIL_FORMAT;
    return false;
  }
}

export function verifPassword(password: string) {
  const { success } = passwordSchema.safeParse(password);
  if (success) {
    console.log("success");
    errors.value.password = null;
    return true;
  } else {
    errors.value.password = ERROR_MESSAGES.PASSWORD_FORMAT;
  }
}
