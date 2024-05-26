import {
  validateEmail,
  validatePassword,
} from "@/utils/login/field-validation";

function validateForm(
  email: string,
  password: string
): { valid: boolean; message: string } {
  const emailValidation = validateEmail(email);
  if (!emailValidation.valid) {
    return { valid: false, message: emailValidation.message };
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return { valid: false, message: passwordValidation.message };
  }

  return { valid: true, message: "sucess" };
}

export { validateForm };
