import { Link } from "react-router-dom";

type LoginButtonProps = {
  inputText: string;
  path: string;
};

export function LoginButton({ inputText, path }: LoginButtonProps) {
  return (
    <Link
      className="text-white font-bold bg-blue-button w-full p-2 rounded-md mt-4 text-center hover:bg-blue-hover"
      to={path}
    >
      {inputText}
    </Link>
  );
}
