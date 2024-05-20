import { ButtonHTMLAttributes } from "react";

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inputText: string;
}

export function LoginButton({ inputText, ...rest }: LoginButtonProps) {
  return (
    <button
      className="text-white font-bold bg-blue-button w-full p-2 rounded-md mt-4 text-center hover:bg-blue-hover"
      {...rest}
    >
      {inputText}
    </button>
  );
}
