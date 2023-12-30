import { z } from "zod";
import { ref } from "vue";
import { CompanyFormType } from "@/types/CompanyFormType";

const ERROR_MESSAGES = {
  EMAIL_FORMAT: "L'email n'est pas valide.",
  PASSWORD_FORMAT:
    "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
  REPEATEPASSWORD_FORMAT: "Les mots de passe ne sont pas identiques.",
  COMPANY_FORMAT:
    "Les informations de la société n'est pas valide. Veuillez vérifier les champs Nom, Téléphone, Adresse, Ville, Pays et Siret.",
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

const companySchema = z.object({
  name: z.string().min(3),
  phone: z.string().length(10),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  siret: z.string().regex(/^[0-9]{14}$/),
});

type errorsType = {
  email: string | null;
  password: string | null;
  repeatPassword: string | null;
  company: string | null;
};
export const errors = ref<errorsType>({
  email: "",
  password: "",
  repeatPassword: "",
  company: "",
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

export function verifyPassword(password: string) {
  const { success } = passwordSchema.safeParse(password);
  if (success) {
    errors.value.password = null;
    return true;
  } else {
    errors.value.password = ERROR_MESSAGES.PASSWORD_FORMAT;
  }
}

export function verifyRepeatPassword(password: string, repeatPassword: string) {
  if (password === repeatPassword) {
    errors.value.repeatPassword = null;
    return true;
  } else {
    errors.value.repeatPassword = ERROR_MESSAGES.REPEATEPASSWORD_FORMAT;
    return false;
  }
}

export function verifCompany(company: CompanyFormType): boolean {
  const { success } = companySchema.safeParse(company);
  if (success) {
    errors.value.company = null;
    return true;
  } else {
    errors.value.company = ERROR_MESSAGES.COMPANY_FORMAT;
    return false;
  }
}
