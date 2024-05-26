import { ButtonHTMLAttributes } from "react";

import Loading from "@/components/loading";

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inputText: string;
  isLoading: boolean;
}

export function LoginButton({
  inputText,
  isLoading,
  ...rest
}: LoginButtonProps) {
  return (
    <button
      className="text-white font-bold bg-blue-button w-full p-2 rounded-md mt-4 text-center hover:bg-blue-hover"
      {...rest}
    >
      {isLoading ? <Loading /> : <>{inputText}</>}
    </button>
  );
}
