import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { LoginInput } from "@/components/login-input";
import { LoginButton } from "@/components/login-button";

import { useAuth } from "@/context/AuthProvider/useAuth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = useAuth();
  const navigate = useNavigate();

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);

      navigate("/home")

    } catch (err) {
      console.error("Email or Password invalid.");
    }
  }

  return (
    <div className="w-full h-screen bg-gray-main relative">
      <img
        src="https://images.alphacoders.com/129/thumb-1920-1291249.png"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-gray-container top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4">
        <div className="flex flex-col justify-center items-center p-4 select-none">
          <h1 className="text-white text-xl font-bold">
            Boas-vindas de volta!
          </h1>
          <h2 className="text-gray text-lg text-center">
            Estamos muito animados em te ver novamente!
          </h2>
          <div className="flex flex-col w-[80%] gap-1 mt-4">
            <h1 className="text-gray font-semibold">
              E-mail
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            ></LoginInput>
          </div>
          <div className="flex flex-col w-[80%] gap-1 mt-4">
            <h1 className="text-gray font-semibold">
              Senha
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></LoginInput>
            <button className="text-light-blue font-bold text-sm mt-1 self-start hover:underline">
              Esqueceu sua senha?
            </button>
            <LoginButton
              onClick={() => onFinish({ email, password })}
              inputText="Entrar"
            />
            <h1 className="text-sm text-gray">
              Precisando de uma conta?
              <Link
                className="text-light-blue font-bold text-sm mt-1 self-start hover:underline ml-2"
                to="/register"
              >
                Registre-se
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
