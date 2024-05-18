import React from "react";

type LoginInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function LoginInput({ ...rest }: LoginInputProps) {
  return (
    <input
      className="bg-gray-input rounded-md text-gray font-medium text-md outline-none p-2"
      {...rest}
    />
  );
}
