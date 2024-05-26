import { FormData } from "@/types/register";
import {
  validateEmail,
  validatePassword,
  validateUserTag,
} from "@/utils/register/field-validation";

function validateForm(formData: FormData): { valid: boolean; message: string } {
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.valid) {
    return { valid: false, message: emailValidation.message };
  }

  const passwordValidation = validatePassword(formData.password);
  if (!passwordValidation.valid) {
    return { valid: false, message: passwordValidation.message };
  }

  const userTagValidation = validateUserTag(formData.userTag);
  if (!userTagValidation.valid) {
    return { valid: false, message: userTagValidation.message };
  }

  return { valid: true, message: "sucess" };
}

export { validateForm };
