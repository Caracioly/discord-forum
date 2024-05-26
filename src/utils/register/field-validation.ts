function validateEmail(userEmail: string): { valid: boolean; message: string } {
  if (!userEmail) {
    return {
      valid: false,
      message: "O campo de email não pode estar vazio.",
    };
  }

  const re = /\S+@\S+\.\S+/;
  if (!re.test(userEmail)) {
    return {
      valid: false,
      message: "E-mail inválido",
    };
  }

  return {
    valid: true,
    message: "Sucess",
  };
}

function validatePassword(userPassword: string): {
  valid: boolean;
  message: string;
} {
  if (!userPassword) {
    return {
      valid: false,
      message: "O campo da senha não pode estar vazio.",
    };
  }

  if (userPassword.length <= 5) {
    return {
      valid: false,
      message: "Senha muito curta.",
    };
  }

  return {
    valid: true,
    message: "Sucess",
  };
}

function validateUserTag(userTag: string): { valid: boolean; message: string } {
  if (!userTag) {
    return {
      valid: false,
      message: "O campo do user tag não pode estár vazio.",
    };
  }

  if (userTag.length <= 5) {
    return {
      valid: false,
      message: "Senha muito curta.",
    };
  }

  return {
    valid: true,
    message: "Sucess",
  };
}

export { validateEmail, validatePassword, validateUserTag };
