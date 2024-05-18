import { Link, LinkProps } from "react-router-dom";

interface LoginButtonProps extends LinkProps {
  inputText: string;
}

export function LoginButton({ inputText, ...rest }: LoginButtonProps) {
  return (
    <Link
      className="text-white font-bold bg-blue-button w-full p-2 rounded-md mt-4 text-center hover:bg-blue-hover"
      {...rest}
    >
      {inputText}
    </Link>
  );
}
