import React from "react";

type LoginInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function LoginInput({ ...rest }: LoginInputProps) {
  return (
    <input
      className="bg-[#1E1F22] rounded-md text-[#bbbdbe] font-medium text-md outline-none p-2"
      {...rest}
    ></input>
  );
}
